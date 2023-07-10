import "./App.css"
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import AlbumGridPage from "./Pages/AlbumGrid";
import StatsPage from "./Pages/Stats"
import AddReviewPage from "./Pages/AddReview"
import LoginPage from "./Pages/Auth/Login"
import RegisterPage from "./Pages/Auth/Register"
import { AuthProvider } from "././Auth/authContext"

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
            <AuthProvider>
                <Router>
                    <Switch>
                        <Route path="/stats" component={StatsPage} />
                        <Route path="/add" component={AddReviewPage} />
                        <Route path="/login" component={LoginPage} />
                        <Route exact path="/register" component={RegisterPage} />
                        <Route exact path="/" component={AlbumGridPage} />
                    </Switch>

                </Router>
            </AuthProvider>

        )
    }
}



export default connect(null, { addAlbums, updateSearchTerm, updateDateRange })(App);
