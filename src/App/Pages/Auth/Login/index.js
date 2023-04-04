
import "./index.css"
import React from "react";
import { Container } from "react-bootstrap";
import { connect } from "react-redux";

class LoginPage extends React.Component {
    render() {

        return (
            <Container fluid className="app-page" >
                <div>
                    <b>You are not logged in</b>
                    <a href="https://music-review-app.auth.us-east-1.amazoncognito.com/login?client_id=4a83iauevbv9vds0lo1jugj9h3&redirect_uri=http://localhost:3000/&response_type=code">Sign in</a>
                </div>
            </Container >)
    }
}


export default connect(null, null)(LoginPage);
