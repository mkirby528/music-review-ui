import "./index.css"
import React from "react";
import axios from "axios";

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";
import Header from "../../Components/Header"
import { connect } from "react-redux";
import { addAlbums, updateSearchTerm, updateDateRange } from "../../Store/actions";
import { Chart, registerables } from 'chart.js';
import { Bar } from "react-chartjs-2";
Chart.register(...registerables);

class StatsPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            ratingCounts: {}

        }
    }
    async fetchAllAlbums() {
        const baseUrl = "https://zjixv0m4di.execute-api.us-east-1.amazonaws.com/non-prod"
        const albumsPath = "/albums"
        const requestURL = baseUrl + albumsPath
        const headers = {
            "Content-Type": "application/json"
        }

        const response = await axios.get(requestURL, { headers: headers })
        return response.data
    }
    async componentDidMount() {
        if (!this.props.albums || this.props.albums.length === 0) {
            const albumsResponse = await this.fetchAllAlbums()
            await this.props.addAlbums(albumsResponse)
            this.getRatingCouts()
        }
    }

    getRatingCouts() {
        const ratingCounts = {};
        this.props.albums.forEach(function (v) {
            ratingCounts[v.Rating] = (ratingCounts[v.Rating] || 0) + 1;
        })
        this.setState({ ratingCounts })
    }

    render() {
        const options = {
            responsive: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Ratings',
                },
            },
        };
        const labels = Object.keys(this.state.ratingCounts)
        const data = {
            labels,
            datasets: [
                {
                    label: 'Count',
                    data: Object.values(this.state.ratingCounts),
                    backgroundColor: 'rgba(0, 255, 132, 0.8)',
                },

            ],
        };
        return (
            <Container fluid className="app" >
                <Header />
                <h1 className="total-review-count-label">Total Reviews: {this.props.albums.length}</h1>
                <Bar options={options} data={data} />;

            </Container >)
    }
}

function mapStateToProps(state) {
    const { albumsStore } = state
    return {
        albums: albumsStore.albums,
        filterValues: albumsStore.filterValues,
        isLoading: albumsStore.isLoading
    }
}

export default connect(mapStateToProps, { addAlbums, updateSearchTerm, updateDateRange })(StatsPage);
