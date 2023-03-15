import "./App.css"
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";
import CardGrid from "./CardGrid";
import Header from "./Header"

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: '',
        };
        this.searchUpdated = this.searchUpdated.bind(this)
    }

    searchUpdated(term) {
        this.setState({ searchTerm: term })
    }

    render() {
        return (
            <Container fluid className="app">
                <Header updateSearchFunction={this.searchUpdated}></Header>
                <CardGrid searchTerm={this.state.searchTerm}></CardGrid>
            </Container>)
    }
}

export default App;
