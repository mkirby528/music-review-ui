import "./index.css"
import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { Input, Button, FormControl } from "@mui/joy";
import { FormLabel, Row } from "react-bootstrap";
import Switch, { switchClasses } from '@mui/joy/Switch';
import { Redirect } from "react-router-dom";


class AddReviewForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = { "album": { ...this.props.selectedAlbum, "HaveVinyl": false, "Rating": 1 } }
    }
    setChecked(value) {
        this.setState(prevState => {
            let album = Object.assign({}, prevState.album);
            album.HaveVinyl = value;
            return { album };
        })
    }
    handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState(prevState => {
            let album = Object.assign({}, prevState.album);
            album[name] = value;
            return { album };
        })
    }

    isObject(val) {
        if (val === null) { return false; }
        return ((typeof val === 'function') || (typeof val === 'object'));
    }

    async formSubmitted(event) {
        event.preventDefault()
        let album = this.state.album
        console.log(album)
        album["Rating"] = Number(album["Rating"])
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
        if (this.state.redirectToHome) {
            return <Redirect to="/" />
        }
        return (
            <form className="add-review-form"
                onSubmit={(event) => {
                    this.formSubmitted(event)
                }}
            >
                {Object.keys(this.state.album).filter(key => {
                    return key !== "id" && key !== "ArtistsString" && key !== "Type" && key !== "HaveVinyl"
                }).map((key, index) => {
                    if (Array.isArray(this.state.album[key])) {
                        return (
                            <FormControl key={index} className="review-form-control">
                                <FormLabel className="review-form-label">
                                    {key} </FormLabel>

                                {this.state.album[key].map((value, index) => {
                                    return (<FormControl key={index} className="review-form-control">
                                        <Input
                                            className="review-form-input"
                                            name={key}
                                            defaultValue={this.state.album[key][index]}
                                            onChange={this.handleChange} // Update to call new function for array update
                                            variant="soft"
                                            required
                                        /></FormControl>)
                                })}
                            </FormControl>)
                    }
                    if (this.isObject(this.state.album[key])) {
                        return (<FormControl key={index} className="review-form-control">
                            <FormLabel className="review-form-label">
                                {key} </FormLabel>

                            {Object.keys(this.state.album[key]).map((obj, index) => {

                                return (
                                    <FormControl key={index} className="review-form-control">
                                        <FormLabel className="review-form-label">{obj}</FormLabel>
                                        <Input
                                            className="review-form-input"
                                            name={key}
                                            defaultValue={this.state.album[key][obj]}
                                            onChange={this.handleChange} // Update to call new function for object updates
                                            variant="soft"
                                            required
                                        /></FormControl>)
                            })}
                        </FormControl>)

                    }
                    return (<FormControl key={index} className="review-form-control">
                        <FormLabel className="review-form-label">
                            {key}
                        </FormLabel>
                        <Input
                            className="review-form-input"
                            name={key}
                            defaultValue={this.state.album[key]}
                            onChange={this.handleChange}
                            variant="soft"
                            required
                        />
                    </FormControl>)
                })}
                <Row xs={1} sm={2}>
                    <FormControl className="review-form-control">
                        <FormLabel className="review-form-label text-centered">
                            Have Viny?
                        </FormLabel>
                        <Switch
                            color={this.state.album.HaveVinyl ? 'success' : 'danger'}
                            checked={this.state.album.HaveVinyl}
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
        )
    }
}
export default connect(null, null)(AddReviewForm);
