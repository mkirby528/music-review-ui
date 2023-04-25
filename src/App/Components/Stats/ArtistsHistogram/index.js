import React from "react";
import "./index.css"
import { Container } from "react-bootstrap";
import { connect } from "react-redux";

import { Chart, registerables } from 'chart.js';
import { Table } from "@mui/joy";
Chart.register(...registerables);

class ArtistsHistogram extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            ratingCounts: {}

        }
    }
    getArtistCounts() {
        const artistCounts = {};
        this.props.albums.forEach(function (album) {

            album.Artists.forEach(artist => {
                artistCounts[artist] = (artistCounts[artist] || 0) + 1;

            })

        })
        return artistCounts
    }

    render() {
        const artistCount = this.getArtistCounts()
        const artistCountArray = Object.entries(artistCount)
        const sortedCountsArray = artistCountArray.sort((a, b) => {
            console.log(a, b)
            return b[1] - a[1]
        })

        console.log(sortedCountsArray)

        return (
            < Container fluid className="stats-container" >
                <h2 className="total-review-count-label">Total Artists Reviewed: {sortedCountsArray.length}</h2>
                <Table>
                    <thead>
                        <tr>
                            <th></th>

                            <th>Artist</th>
                            <th>Count</th>

                        </tr>
                    </thead>

                    {sortedCountsArray.map((artist, i) => (
                        <tr key={artist[0]}>
                            <td className="table-data">{i + 1}</td>
                            <td className="table-data">{artist[0]}</td>
                            <td className="table-data">{artist[1]}</td>

                        </tr>))
                    }

                </Table>
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

export default connect(mapStateToProps, null)(ArtistsHistogram);