import "./index.css"
import React from "react";
import SearchInput from "react-search-input"
import ReleaseDateSlider from "./ReleaseDateSlider";
import SortSelction from "./SortSelction";
import { connect } from "react-redux";
import { updateSearchTerm, updateDateRange } from "../../Store/actions";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Auth/authContext"
class Header extends React.Component {
    static contextType = AuthContext

    render() {
        console.log()
        return (
            <Row className="header" >
                <Col className="home-button-column">
                    <Link to="/">
                        <i className="icon-link fa-solid fa-home"></i>
                    </Link>
                    <Link to="/add">
                        <i className="icon-link fa-solid fa-circle-plus"></i>
                    </Link>
                    <Link to="/stats">
                        <i className="icon-link fa-solid fa-chart-line"> </i>
                    </Link>

                </Col>
                <Col className="filter-options-column" xs={8} md={10}>
                    <SearchInput className="search-input" fuzzy onChange={this.props.updateSearchTerm} />
                    <Row className="filter-options-container">
                        <Col className="release-date-slider-column">
                            <ReleaseDateSlider></ReleaseDateSlider>
                        </Col>
                        <Col className="sort-selection-column">
                            <SortSelction></SortSelction>
                        </Col>
                    </Row>
                </Col>
                <Col className="user-profile-column">
                    {this.context.user &&
                        <div className="avatar-container">
                            <img src="avatar.png" alt="Avatar" className="avatar"></img>
                         

                        </div>
                    }

                </Col>
            </Row>
        )
    }
}
function mapStateToProps(state) {
    const { albumsStore } = state
    return {
        albums: albumsStore.albums,
        filterValues: albumsStore.filterValues,
        isLoading: albumsStore.isLoading
    }
}
export default connect(mapStateToProps, { updateSearchTerm, updateDateRange })(Header);