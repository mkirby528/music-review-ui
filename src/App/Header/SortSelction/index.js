import "./index.css"
import React from "react";
import Radio from "@mui/joy/Radio";
import RadioGroup from "@mui/joy/RadioGroup";
import { connect } from "react-redux";
import { updateSearchTerm, updateDateRange, updateSortField } from "../../Store/actions";
class SortSelection extends React.Component {
    constructor(props) {
        super(props)
        this.updateSortField = this.updateSortField.bind(this)
    }
    updateSortField(event) {
        console.log("Here")
        this.props.updateSortField(event.target.value)
    }
    render() {
        return (
            <div className="sort-container">
                <h6 className="sort-label">
                    Sort Field
                </h6>
                <RadioGroup
                    orientation="horizontal"
                    aria-labelledby="segmented-controls-example"
                    name="sortField"
                    className="sort-radio-group"
                    onChange={this.updateSortField}
                    value={this.props.filterValues.sortField}

                >
                    {['Rating', 'Title', 'Artist'].map((item) => (
                        <Radio
                            key={item}
                            value={item}
                            label={item}
                            disableIcon
                            className="s`ort-radio-button"
                            variant="soft"
                            slotProps={{
                                action: ({ checked }) => ({
                                    sx: {
                                        ...(checked && {
                                            bgcolor: '#6DAEDB',
                                        }),
                                    },
                                }),
                            }}
                        />
                    ))}
                </RadioGroup>
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
export default connect(mapStateToProps, { updateSearchTerm, updateDateRange, updateSortField })(SortSelection);