import "./index.css"
import React from "react";
import Slider, { sliderClasses } from '@mui/joy/Slider';
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
                <h6 className="release-year-label">
                    Release Year
                </h6>

                <Slider
                    id="release-year-slider"
                    min={1965}
                    max={new Date().getFullYear()}
                    defaultValue={[1965, new Date().getFullYear()]}
                    valueLabelDisplay="on"
                    onChange={this.releaseDateRangeUpdated}
                    sx={{
                        // Need both of the selectors to make it works on the server-side and client-side
                        [`& [style*="left:0%"], & [style*="left: 0%"]`]: {
                          [`&.${sliderClasses.markLabel}`]: {
                            transform: 'none',
                          },
                          [`& .${sliderClasses.valueLabel}`]: {
                            left: 'calc(var(--Slider-thumbSize) / 2)',
                            borderBottomLeftRadius: 0,
                            '&::before': {
                              left: 0,
                              transform: 'translateY(100%)',
                              borderLeftColor: 'currentColor',
                            },
                          },
                        },
                        [`& [style*="left:100%"], & [style*="left: 100%"]`]: {
                          [`&.${sliderClasses.markLabel}`]: {
                            transform: 'translateX(-100%)',
                          },
                          [`& .${sliderClasses.valueLabel}`]: {
                            right: 'calc(var(--Slider-thumbSize) / 2)',
                            borderBottomRightRadius: 0,
                            '&::before': {
                              left: 'initial',
                              right: 0,
                              transform: 'translateY(100%)',
                              borderRightColor: 'currentColor',
                            },
                          },
                        },
                      }}
                    
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