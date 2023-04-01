import "./index.css"
import React from "react";
import SearchInput from "react-search-input"
import Slider from '@mui/joy/Slider';
import SortSelction from "./SortSelction";
import { connect } from "react-redux";
import { updateSearchTerm, updateDateRange, updateSortField } from "../Store/actions";
import { Row, Col } from "react-bootstrap";
class Header extends React.Component {
    constructor(props) {
        super(props)
        this.releaseDateRangeUpdated = this.releaseDateRangeUpdated.bind(this)
    }
    releaseDateRangeUpdated(event, dateRange) {
        this.props.updateDateRange(dateRange[0], dateRange[1])
    }
    render() {
        return (
            <Row className="header">
                <SearchInput className="search-input" fuzzy onChange={this.props.updateSearchTerm} />
                <Row>
                    <Col>
                        <Slider
                            id="release-year-slider"
                            getAriaLabel={() => 'Temperature range'}
                            min={1965}
                            max={2023}
                            defaultValue={[1965, 2023]}
                            valueLabelDisplay="on"
                            onChange={this.releaseDateRangeUpdated}
                        />
                    </Col>
                    <Col>
                        <SortSelction></SortSelction>
                    </Col>
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
export default connect(mapStateToProps, { updateSearchTerm, updateDateRange, updateSortField })(Header);