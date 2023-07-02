import "./index.css"
import React from "react";

import { connect } from "react-redux";
import { updateSearchTerm, updateDateRange, updateSortField, updateSortOrder } from "../../../Store/actions";
import { Select, Option } from "@mui/joy";

class SortSelection extends React.Component {
    constructor(props) {
        super(props)
        this.updateSortField = this.updateSortField.bind(this)
        this.updateSortOrder = this.updateSortOrder.bind(this)
    }
    updateSortField(event) {
       
        this.props.updateSortField(event.target.value)
    }
    updateSortOrder(event) {
        let sortOrder = "desc"
        if (this.props.filterValues.sortOrder === "desc") {
            sortOrder = "asc"
        }
        this.props.updateSortOrder(sortOrder)
    }
    render() {
        return (
            <div className="sort-container">
                <h6 className="sort-label">
                    Sort
                </h6>
                <div className="sort-select-container">
                    <select className="sort-select" defaultValue={"DateListened"} onChange={this.updateSortField}>
                        {['Rating', 'Title', 'Artists', 'DateListened', 'ReleaseDate'].map((item) => (
                            <option
                                key={item}
                                value={item}
                                label={item}
                                className="option-text"
                            >{item}</option>
                        ))}

                    </select>
                    <i onClick={this.updateSortOrder} className={this.props.filterValues.sortOrder === "asc" ? "fa-solid fa-arrow-up" : "fa-solid fa-arrow-down"}></i>

                </div>
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
export default connect(mapStateToProps, { updateSearchTerm, updateDateRange, updateSortField, updateSortOrder })(SortSelection);