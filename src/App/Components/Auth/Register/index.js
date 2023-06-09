import React from "react";
import { signUp, confirmSignUp } from "../../../Auth/authHelper"
import { Container } from "react-bootstrap";
import { Input, Button, FormControl } from "@mui/joy";
import { FormLabel, } from "react-bootstrap";
import "./index.css"

class Register extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            email: "",
            password: "",
            verifyProcess: false,
            otp: ""

        }
    }
    handleSubmit = async (event) => {
        event.preventDefault()
        try {
            await signUp(this.state.username, this.state.email, this.state.password)
            this.setState({verifyProcess:true});

        } catch (err) {
            console.log(err)
        }
    }
    handleOTPSubmit = async (e) => {
        e.preventDefault()
        try {
            const verify_response = await confirmSignUp(this.state.username, this.state.otp)
            console.log(verify_response)
            window.location = "/"
        } catch (err) {
            console.log(err)
        }
    }


    handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }



    render() {
        return (
            <Container fluid className="form-container">
                {this.state.verifyProcess === false ? (

                    <form className="add-review-form"
                        onSubmit={(event) => {
                            this.handleSubmit(event)
                        }}
                    >
                        <FormControl className="review-form-control">
                            <FormLabel className="review-form-label">
                                Username
                            </FormLabel>
                            <Input
                                className="review-form-input"
                                variant="soft"
                                name="username"
                                required
                                onChange={this.handleInputChange}

                            />
                        </FormControl>
                        <FormControl className="review-form-control">
                            <FormLabel className="review-form-label">
                                Email
                            </FormLabel>
                            <Input
                                className="review-form-input"
                                variant="soft"
                                name="email"
                                required
                                onChange={this.handleInputChange}

                            />
                        </FormControl>
                        <FormControl className="review-form-control">
                            <FormLabel className="review-form-label">
                                Password
                            </FormLabel>
                            <Input
                                className="review-form-input"
                                variant="soft"
                                required
                                name="password"
                                type="password"
                                onChange={this.handleInputChange}

                            />
                        </FormControl>
                        <FormControl className="review-form-control">
                            <Button className="review-form-submit-button"
                                type="submit">Submit</Button>
                        </FormControl>
                    </form>) :

                    <form className="add-review-form"
                        onSubmit={(event) => {
                            this.handleOTPSubmit(event)
                        }}

                    >
                        <FormControl className="review-form-control">
                            <FormLabel className="review-form-label">
                                OTP
                            </FormLabel>
                            <Input
                                className="review-form-input"
                                variant="soft"
                                required
                                name="otp"
                                onChange={this.handleInputChange}

                            />
                        </FormControl>
                        <FormControl className="review-form-control">
                            <Button className="review-form-submit-button"
                                type="submit">Submit</Button>
                        </FormControl>
                    </form>}
            </Container >
        )
    }
}

export default Register;