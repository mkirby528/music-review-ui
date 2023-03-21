import "./index.css"
import React from "react";
import SearchInput from "react-search-input"
import Slider from '@mui/joy/Slider';

import { Row } from "react-bootstrap";
class Header extends React.Component {
    render() {
        return (
            <Row className="header">
                <SearchInput className="search-input" fuzzy onChange={this.props.updateSearchFunction} />
                <Slider
                    id="release-year-slider"
                    getAriaLabel={() => 'Temperature range'}
                    min={1965}
                    max={2023}
                    defaultValue={[1965, 2023]}
                    valueLabelDisplay="on"
                    onChange={this.props.releaseDateRangeUpdated}
                />
            </Row>
        )
    }
}

export default Header