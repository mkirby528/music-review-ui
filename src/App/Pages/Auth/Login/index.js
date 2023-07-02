
import "./index.css"
import React from "react";
import { Container } from "react-bootstrap";
import { connect } from "react-redux";
import Login from "../../../Components/Auth/Login";
class LoginPage extends React.Component {
    render() {

        return (
            <Container fluid className="app-page" >
                <Login />
            </Container >)
    }
}


export default connect(null, null)(LoginPage);
