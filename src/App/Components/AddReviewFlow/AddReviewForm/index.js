import "./index.css"
import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { Input, Button, FormControl } from "@mui/joy";
import { FormLabel, Row, } from "react-bootstrap";
import Switch, { switchClasses } from '@mui/joy/Switch';
import { Redirect } from "react-router-dom";
import CircularProgress from '@mui/joy/CircularProgress';
import { AuthContext } from "../../../Auth/authContext";


class AddReviewForm extends React.Component {
    static contextType = AuthContext
    constructor(props) {
        super(props)
        this.state = {
            "submitLoading": false,
            "album": { ...this.props.selectedAlbum, "HaveVinyl": false, "Rating": 1 }
        }
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
    handleChangeArray = (event, index) => {
        const fieldName = event.target.name
        const value = event.target.value
        let fieldArray = this.state.album[fieldName]
        fieldArray[index] = value
        this.setState(prevState => {
            let album = Object.assign({}, prevState.album);
            album[fieldName] = fieldArray;
            return { album };
        })
    }
    removeArrayElement = (key, index) => {
        let fieldArray = this.state.album[key]
        fieldArray = fieldArray.slice(0, index).concat(fieldArray.slice(index + 1))
        this.setState(prevState => {
            let album = Object.assign({}, prevState.album);
            album[key] = fieldArray;
            return { album };
        })
    }
    addArrayElement = (key) => {
        let fieldArray = this.state.album[key]
        fieldArray.push("")
        this.setState(prevState => {
            let album = Object.assign({}, prevState.album);
            album[key] = fieldArray;
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
        album["Rating"] = Number(album["Rating"])
        this.setState({ "submitLoading": true })
        let response = await this.postAlbumReview(album)
        if (response.status === 201) {
            this.setState({ redirectToHome: true })
        }
    }
    async postAlbumReview(album) {
        const sessionInfo = await this.context.getSession()
        const authToken = sessionInfo.idToken.jwtToken
        const baseUrl = "https://zjixv0m4di.execute-api.us-east-1.amazonaws.com/non-prod"
        const albumsPath = "/albums"
        const headers = {
            "Authorization": authToken
        }
        const requestURL = baseUrl + albumsPath

        const response = await axios.post(requestURL, album,{headers})
        return response
    }
    render() {
        if (this.state.redirectToHome) {
            return <Redirect to="/" />
        }
        return (

            <div className="add-review-form-container">
                {this.state.submitLoading &&
                    <div className="loading-container">
                        <h1>
                            Creating Review...
                        </h1>
                        <CircularProgress />
                    </div>
                }
                {!this.state.submitLoading &&


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
                                            {key}
                                            <i onClick={() => this.addArrayElement(key)} className="fa-solid fa-circle-plus"></i>
                                        </FormLabel>

                                        {this.state.album[key].map((value, index) => {
                                            return (
                                                <FormControl key={index} className="form-array-input-container">
                                                    <Row>
                                                        <Input
                                                            className="review-form-input-arry"
                                                            name={key}
                                                            value={value}
                                                            onChange={(event) => this.handleChangeArray(event, index)}
                                                            variant="soft"
                                                            required
                                                        />
                                                        <i onClick={() => this.removeArrayElement(key, index)} className="form-array-input-remove-icon icon-link fa-solid fa-circle-xmark"></i>
                                                    </Row>
                                                </FormControl>
                                            )
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
                                                    value={this.state.album[key][obj]}
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
                    </form >}
            </div>
        )
    }
}
export default connect(null, null)(AddReviewForm);
