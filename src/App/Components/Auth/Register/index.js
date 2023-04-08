import { CognitoUser, CognitoUserAttribute } from 'amazon-cognito-identity-js';
import React from "react";
import { Input, Button } from '@mui/joy';
import UserPool from '../../../Auth/UserPool';
import { Container } from 'react-bootstrap';
import "./index.css"

class Register extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            email: "",
            password: "",
            verifyProcess: false,
            OTP: ""
        }
    }

    setEmail(email) {
        this.setState({ email })
    }
    setUsername(username) {
        this.setState({ username })
    }
    setPassword(password) {
        this.setState({ password })
    }
    setVerifyProcess(verifyProcess) {
        this.setState({ verifyProcess })
    }
    setOTP(OTP) {
        this.setState({ OTP })
    }
    onSubmit = (e) => {
        e.preventDefault();
        const attributeList = [];
        attributeList.push(
            new CognitoUserAttribute({
                Name: 'email',
                Value: this.state.email,
            })
        );
        UserPool.signUp(this.state.username, this.state.password, attributeList, null, (err, data) => {
            if (err) {
                console.log(err);
            } else {
                console.log(data);
                this.setVerifyProcess(true);
            }
        });
    };

    verifyAccount = (e) => {
        e.preventDefault();
        const user = new CognitoUser({
            Username: this.state.username,
            Pool: UserPool,
        });
        console.log(user);
        user.confirmRegistration(this.state.OTP, true, (err, data) => {
            if (err) {
                console.log(err);
            } else {
                console.log(data);
                window.location.href = '/login';
            }
        });
    };
    render() {
        return (
            <Container fluid className="form-container">
                {this.state.verifyProcess === false ? (
                    <form className='form' onSubmit={this.onSubmit}>
                        <div className="form-control">
                            <Input
                                placeholder='username'
                                type="text"
                                value={this.state.username.toLowerCase().trim()}
                                onChange={(e) => this.setUsername(e.target.value)}
                            />

                            <Input
                                className='input'
                                placeholder='email'
                                type="text"
                                value={this.state.email}
                                onChange={(e) => this.setEmail(e.target.value)}
                            />

                            <Input
                                className='input'
                                placeholder='password'
                                type="password"
                                value={this.state.password}
                                onChange={(e) => this.setPassword(e.target.value)}
                            />
                            <Button className='input submit-button' type="submit">Register</Button>
                        </div>
                    </form>
                ) : (
                    <form id='otp-form' className='form' onSubmit={this.verifyAccount}>
                        <Input
                            className='input'
                            placeholder='One Time Password (OTP)'
                            type="text"
                            value={this.state.OTP}
                            onChange={(e) => this.setOTP(e.target.value)}
                        />
                        <Button className='input submit-button' type="submit">Verify</Button>
                    </form>
                )
                }
            </Container >
        )
    }
}

export default Register;