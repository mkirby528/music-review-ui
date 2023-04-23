import "./index.css"
import React from "react";
import Radio from "@mui/joy/Radio";
import RadioGroup from "@mui/joy/RadioGroup";
import { connect } from "react-redux";
import { updateSearchTerm, updateDateRange, updateSortField } from "../../../Store/actions";
class SortSelection extends React.Component {
    constructor(props) {
        super(props)
        this.updateSortField = this.updateSortField.bind(this)
    }
    updateSortField(event) {
        this.props.updateSortField(event.target.value)
    }
    render() {
        return (
            <div className="sort-container">
                <h6 className="sort-label">
                    Sort
                </h6>
                <RadioGroup
                    orientation="horizontal"
                    name="sortField"
                    className="sort-radio-group"
                    onChange={this.updateSortField}
                    value={this.props.filterValues.sortField}

                >
                    {['Rating', 'Title', 'Artists', 'DateListened', 'ReleaseDate'].map((item) => (
                        <Radio
                            key={item}
                            value={item}
                            label={item}
                            disableIcon
                            className="sort-radio-button"
                            size="md"
                            variant="solid"
                            slotProps={{
                                action: ({ checked }) => ({
                                    sx: {
                                        ...(checked && {
                                            bgcolor: '#6DAEDB',
                                            boxShadow: 'sm',
                                            '&:hover': {
                                                bgcolor: '#6DAEDB',
                                            },
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