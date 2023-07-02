import React from "react";
import { Container } from "react-bootstrap";
import { Input, Button, FormControl } from "@mui/joy";
import { FormLabel, } from "react-bootstrap";
import "./index.css"
import {AuthContext} from '../../../Auth/authContext'



class Login extends React.Component {
    static contextType = AuthContext
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: "",
            user: {}

        }
    }
    

    handleSubmit = async (e) => {
        e.preventDefault()
        try {
          await this.context.signIn(this.state.username, this.state.password)
          window.location = "/"
        } catch (err) {
          console.log(err.message)
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
        if (this.context.user) {
          window.location = "/"
        }
        return (
            <Container fluid className="form-container">
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
                    </form>
            </Container >
        )
    }
}

export default Login;