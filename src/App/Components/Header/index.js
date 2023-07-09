import "./index.css"
import React from "react";
import SearchInput from "react-search-input"
import ReleaseDateSlider from "./ReleaseDateSlider";
import SortSelction from "./SortSelction";
import { connect } from "react-redux";
import { updateSearchTerm, updateDateRange } from "../../Store/actions";
import { Row, Col } from "react-bootstrap";
import { AuthContext } from "../../Auth/authContext"
import AvatarDropdownMenu from "./AvartarDropdownMenu";

class Header extends React.Component {
    static contextType = AuthContext

    render() {
        return (
            <Row className="header" >
                <Col xs={9} md={11} className="filter-options-column">
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
                <Col xs={3} md={1} className="user-profile-column">
                    {this.context.user &&
                        <div className="avatar-container">
                            <AvatarDropdownMenu />
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