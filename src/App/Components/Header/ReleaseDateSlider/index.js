import "./index.css"
import React from "react";
import { Slider } from "@mui/joy";
import { updateDateRange } from "../../../Store/actions";
import { connect } from "react-redux";

class ReleaseDateSlider extends React.Component {
    constructor(props) {
        super(props)
        this.releaseDateRangeUpdated = this.releaseDateRangeUpdated.bind(this)
    }
    releaseDateRangeUpdated(event, dateRange) {
        this.props.updateDateRange(dateRange[0], dateRange[1])
    }
    render() {
        return (
            <div className="release-year-container">
                <h6 className="releaseyear-label">
                    Release Year
                </h6>
                <Slider
                    id="release-year-slider"
                    getAriaLabel={() => 'Temperature range'}
                    min={1965}
                    max={2023}
                    defaultValue={[1965, 2023]}
                    valueLabelDisplay="on"
                    onChange={this.releaseDateRangeUpdated}
                />
            </div>
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
export default connect(mapStateToProps, { updateDateRange })(ReleaseDateSlider);