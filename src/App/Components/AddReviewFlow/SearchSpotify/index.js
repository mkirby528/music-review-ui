import "./index.css"
import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { Input, Button, FormControl } from "@mui/joy";
import { FormLabel, } from "react-bootstrap";


class AddReviewForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            haveVinylChecked: false,
        }
    }
    setChecked(value) {
        this.setState({ "haveVinylChecked": value })
    }
    async formSubmitted(event) {
        event.preventDefault()
        const Title = event.target[0].value
        const Artist = event.target[1].value
        const album = {
            Title, Artist
        }
        let response = await this.searchSpotify(album)
        if (response.status < 300) {
            this.props.updateSpotifyResults(response.data)
            this.props.continues()
        }
        console.log(response)
    }
    async searchSpotify(album) {
        const baseUrl = "https://zjixv0m4di.execute-api.us-east-1.amazonaws.com/non-prod"
        const spotifySearchPath = `/albums/spotify/search?Title=${album.Title}&Artist=${album.Artist}`
        const requestURL = baseUrl + spotifySearchPath
        const response = await axios.get(requestURL)
        console.log(response)
        return response
    }

    render() {
        return (
            <form className="add-review-form"
                onSubmit={(event) => {
                    this.formSubmitted(event)
                }}
            >
                <FormControl className="review-form-control">
                    <FormLabel className="review-form-label">
                        Title
                    </FormLabel>
                    <Input
                        className="review-form-input"
                        variant="soft"
                        required
                    />
                </FormControl>
                <FormControl className="review-form-control">
                    <FormLabel className="review-form-label">
                        Artist
                    </FormLabel>
                    <Input
                        className="review-form-input"
                        variant="soft"
                        required
                    />
                </FormControl>

                <FormControl className="review-form-control">
                    <Button className="review-form-submit-button"
                        type="submit">Search</Button>
                </FormControl>
            </form>
        )
    }
}
export default connect(null, null)(AddReviewForm);
