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
    getCounts() {
        const field = this.props.field
        const ratingCounts = {};
        this.props.albums.forEach(function (album) {
            ratingCounts[album[field]] = (ratingCounts[album[field]] || 0) + 1;
        })
        return ratingCounts
    }

    render() {
        const field = this.props.field
        const options = {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: field,
                    color: "white"
                },
            },
            scales: {
                y: {
                    ticks: {
                        color: "white",
                    }
                },
                x: {
                    ticks: {
                        color: "white",
                    }
                }
            }


        };
        const labels = Object.keys(this.getCounts())
        const data = {
            labels,
            datasets: [
                {
                    label: 'Count',
                    data: Object.values(this.getCounts()),
                    backgroundColor: this.props.color || 'lime',
                    color: "white"
                },

            ],
        };
        return (
            <Container fluid className="histogram-container" >
                <Bar className="histogram" options={options} data={data} width={"100%"} height={"100%"}/>
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