
import "./index.css"
import React from "react";
import { Container } from "react-bootstrap";
import { connect } from "react-redux";
import Register from "../../../Components/Auth/Register";
class LoginPage extends React.Component {
    render() {

        return (
            <Container fluid className="app-page" >
                <Register />
            </Container >)
    }
}


export default connect(null, null)(LoginPage);
