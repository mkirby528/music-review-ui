import "./index.css"
import React from "react";
import SearchInput from "react-search-input"
import Slider from '@mui/joy/Slider';
import { connect } from "react-redux";
import { addAlbums, updateSearchTerm, updateDateRange } from "../Store/actions";
import { Row } from "react-bootstrap";
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
                <Slider
                    id="release-year-slider"
                    getAriaLabel={() => 'Temperature range'}
                    min={1965}
                    max={2023}
                    defaultValue={[1965, 2023]}
                    valueLabelDisplay="on"
                    onChange={this.releaseDateRangeUpdated}
                />
            </Row>
        )
    }
}

export default connect(null, { addAlbums, updateSearchTerm, updateDateRange })(Header);