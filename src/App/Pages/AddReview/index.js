
import "./index.css"
import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { Input, Button, Box, FormControl } from "@mui/joy";
import { FormLabel, Row } from "react-bootstrap";
import Switch, { switchClasses } from '@mui/joy/Switch';
import { Redirect } from "react-router-dom";


class AddReviewPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            redirectToHome: false,
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
        const Rating = event.target[2].value
        const HaveVinyl = event.target[3].checked
        const album = {
            Title, Artist, Rating, HaveVinyl
        }
        let response = await this.postAlbumReview(album)
        if (response.status === 201) {
            this.setState({ redirectToHome: true })
        }
        console.log(response)
    }
    async postAlbumReview(album) {
        const baseUrl = "https://zjixv0m4di.execute-api.us-east-1.amazonaws.com/non-prod"
        const albumsPath = "/albums"
        const requestURL = baseUrl + albumsPath

        const response = await axios.post(requestURL, album)
        return response
    }
    render() {
        const redirectToHome = this.state.redirectToHome;
        if (redirectToHome) {
            return <Redirect to="/" />
        }
        return (
            <Box className="app-page" >
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
                    <Row xs={1} sm={2}>
                        <FormControl className="review-form-control">
                            <FormLabel className="review-form-label text-centered">
                                Rating
                            </FormLabel>
                            <Input
                                className="review-form-input"
                                type="number"
                                defaultValue={1}
                                variant="soft"
                                required
                                slotProps={{
                                    input: {
                                        min: 1,
                                        max: 10,
                                        step: 1,
                                    },
                                }}

                            />

                        </FormControl>
                        <FormControl className="review-form-control">
                            <FormLabel className="review-form-label text-centered">
                                Have Viny?
                            </FormLabel>
                            <Switch
                                color={this.state.haveVinylChecked ? 'success' : 'danger'}
                                checked={this.state.haveVinylChecked}
                                onChange={(event) => this.setChecked(event.target.checked)}
                                sx={{
                                    '--Switch-thumbSize': '32px',
                                    '--Switch-trackWidth': '80px',
                                    '--Switch-trackHeight': '48px',
                                    '--Switch-trackBackground': '#EE5E52',
                                    '&:hover': {
                                        '--Switch-trackBackground': '#EE5E52',
                                    },
                                    [`&.${switchClasses.checked}`]: {
                                        '--Switch-trackBackground': '#5CB176',
                                        '&:hover': {
                                            '--Switch-trackBackground': '#5CB176',
                                        },
                                    },
                                }}
                            />
                        </FormControl>
                    </Row>
                    <FormControl className="review-form-control">
                        <Button className="review-form-submit-button"
                            type="submit">Submit</Button>
                    </FormControl>
                </form>
            </Box >)
    }
}


export default connect(null, null)(AddReviewPage);
