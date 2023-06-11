import React from "react";
import "./index.css"
import { Container } from "react-bootstrap";
import { connect } from "react-redux";

import { Chart, registerables } from 'chart.js';
import { Table } from "@mui/joy";
Chart.register(...registerables);

class ArtistsTable extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            ratingCounts: {}

        }
    }
    getArtistCountsAndAverageRating() {
        const artistCounts = [];
        this.props.albums.forEach(function (album) {
            album.Artists.forEach(artist => {
                let artistObject = artistCounts.find(artistObject => artistObject.Name === artist);
                if (artistObject) {
                    artistObject.Count += 1
                    artistObject.RatingSum = artistObject.RatingSum + parseInt(album.Rating)
                    return
                } else {
                    artistObject = {}
                    artistObject.Name = artist
                    artistObject.Count = 1
                    artistObject.RatingSum = parseInt(album.Rating)

                    artistCounts.push(artistObject)
                }
            })
            artistCounts.forEach(artist => {
                artist.AverageRating = artist.RatingSum / artist.Count
                artist.RoundedAverageRating = Math.round(10 * artist.AverageRating) / 10;
            })

        })
        return artistCounts
    }

    render() {
        const artistCount = this.getArtistCountsAndAverageRating()
        const sortedCounts = artistCount.sort((a, b) => {
            return b.Count - a.Count
        })


        return (
            < Container fluid className="artists-table-container" >
                <Table>
                    <thead>
                        <tr>
                            <th></th>

                            <th>Artist</th>
                            <th>Count</th>
                            <th>Average Rating</th>

                        </tr>
                    </thead>
                    <tbody>
                        {sortedCounts.map((artist, i) => {
                            return (<tr key={artist.Name}>
                                <td className="table-data">{i + 1}</td>
                                <td className="table-data">{artist.Name}</td>
                                <td className="table-data">{artist.Count}</td>
                                <td className="table-data">{artist.RoundedAverageRating}</td>

                            </tr>)
                        })
                        }
                    </tbody>

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

export default connect(mapStateToProps, null)(ArtistsTable);