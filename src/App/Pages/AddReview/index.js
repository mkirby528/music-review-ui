
import "./index.css"
import React from "react";

import { connect } from "react-redux";
import { Input, Box, FormControl } from "@mui/joy";
import { FormLabel, Row } from "react-bootstrap";
import Switch, { switchClasses } from '@mui/joy/Switch';


class AddReviewPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: "",
            artist: "",
            rating: -1,
            haveVinylChecked: false,

        }
    }
    setChecked(value) {
        this.setState({ "haveVinylChecked": value })
    }
    render() {

        return (
            <Box className="app-page" >
                <form className="add-review-form"
                    onSubmit={(event) => {
                        event.preventDefault();
                    }}
                >
                    <FormControl>
                        <FormLabel className="review-form-label">
                            Title
                        </FormLabel>
                        <Input
                            className="review-form-input"
                            variant="soft"
                            required
                        />
                    </FormControl>
                    <FormControl>
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
                        <FormControl>
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
                        <FormControl>
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
                            />                        </FormControl>
                    </Row>

                </form>
            </Box >)
    }
}


export default connect(null, null)(AddReviewPage);
