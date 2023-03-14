import "./index.css"
import React from "react";
import SearchInput from "react-search-input"
import { Row } from "react-bootstrap";
class Header extends React.Component {
    render() {
        return (
            <Row className="header">
                <SearchInput className="search-input" fuzzy onChange={this.props.updateSearchFunction} />
            </Row>
        )
    }
}

export default Header