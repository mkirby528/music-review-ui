import "./App.css"
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import AlbumGridPage from "./Pages/AlbumGrid";
import { connect } from "react-redux";
import { addAlbums, updateSearchTerm, updateDateRange } from "./Store/actions";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

class App extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/">
                        <AlbumGridPage />
                    </Route>
                </Switch>
            </Router>
        )
    }
}



export default connect(null, { addAlbums, updateSearchTerm, updateDateRange })(App);
