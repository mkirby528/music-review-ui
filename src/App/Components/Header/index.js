import "./index.css"
import React from "react";
import SearchInput from "react-search-input"
import ReleaseDateSlider from "./ReleaseDateSlider";
import SortSelction from "./SortSelction";
import { connect } from "react-redux";
import { updateSearchTerm, updateDateRange } from "../../Store/actions";
import { Row } from "react-bootstrap";
class Header extends React.Component {


    render() {
        return (
            <Row className="header">
                <SearchInput className="search-input" fuzzy onChange={this.props.updateSearchTerm} />
                <Row className="filter-options-container" xs={2}>
                    <ReleaseDateSlider></ReleaseDateSlider>
                    <SortSelction></SortSelction>

                </Row>
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