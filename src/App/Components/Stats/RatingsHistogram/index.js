import React from "react";
import "./index.css"
import { Container } from "react-bootstrap";
import { connect } from "react-redux";

import { Chart, registerables } from 'chart.js';
import { Bar } from "react-chartjs-2";
Chart.register(...registerables);

class RatingsHistogram extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            ratingCounts: {}

        }
    }
    getRatingCounts() {
        const ratingCounts = {};
        this.props.albums.forEach(function (v) {
            ratingCounts[v.Rating] = (ratingCounts[v.Rating] || 0) + 1;
        })
        return ratingCounts
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
        const labels = Object.keys(this.getRatingCounts(this.props.albums))
        const data = {
            labels,
            datasets: [
                {
                    label: 'Count',
                    data: Object.values(this.getRatingCounts(this.props.albums)),
                    backgroundColor: 'rgba(0, 255, 132, 0.8)',
                },

            ],
        };
        return (
            <Container fluid className="stats-container" >
                <h2 className="total-review-count-label">Total Reviews: {this.props.albums.length}</h2>
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

export default connect(mapStateToProps, null)(RatingsHistogram);