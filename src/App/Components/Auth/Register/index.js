import { CognitoUser, CognitoUserAttribute } from 'amazon-cognito-identity-js';
import React from "react";
import UserPool from '../../../Auth/UserPool';

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
                alert("Couldn't sign up");
            } else {
                console.log(data);
                this.setVerifyProcess(true);
                alert('User Added Successfully');
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
                alert("Couldn't verify account");
            } else {
                console.log(data);
                alert('Account verified successfully');
                window.location.href = '/login';
            }
        });
    };
    render() {
        return (
            <div>
                {this.state.verifyProcess === false ? (
                    <form onSubmit={this.onSubmit}>
                        UserName:
                        <input
                            type="text"
                            value={this.state.username.toLowerCase().trim()}
                            onChange={(e) => this.setUsername(e.target.value)}
                        />
                        <br />
                        Email:
                        <input
                            type="email"
                            value={this.state.email}
                            onChange={(e) => this.setEmail(e.target.value)}
                        />
                        <br />
                        Password:
                        <input
                            type="password"
                            value={this.state.password}
                            onChange={(e) => this.setPassword(e.target.value)}
                        />
                        <br />
                        <button type="submit">Register</button>
                    </form>
                ) : (
                    <form onSubmit={this.verifyAccount}>
                        Enter the OTP:
                        <input
                            type="text"
                            value={this.state.OTP}
                            onChange={(e) => this.setOTP(e.target.value)}
                        />
                        <br />
                        <button type="submit">Verify</button>
                    </form>
                )}
            </div >
        )
    }
}

export default Register;