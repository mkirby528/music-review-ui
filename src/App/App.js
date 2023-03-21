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
            filterValues: {
                searchTerm: '',
                minYear: '1960',
                maxYear: '2023'
            }
        };
        this.searchUpdated = this.searchUpdated.bind(this)
        this.releaseDateRangeUpdated = this.releaseDateRangeUpdated.bind(this)
    }

    searchUpdated(term) {
        let filterValues = { ...this.state.filterValues }
        filterValues.searchTerm = term
        this.setState({ filterValues })
    }
    releaseDateRangeUpdated(event, newValue) {
        let filterValues = { ...this.state.filterValues }
        filterValues.minYear = newValue[0]
        filterValues.maxYear = newValue[1]
        this.setState({ filterValues })
    }

    render() {
        return (
            <Container fluid className="app">
                <Header updateSearchFunction={this.searchUpdated} releaseDateRangeUpdated={this.releaseDateRangeUpdated}></Header>
                <CardGrid filterValues={this.state.filterValues} ></CardGrid>
            </Container>)
    }
}

export default App;
