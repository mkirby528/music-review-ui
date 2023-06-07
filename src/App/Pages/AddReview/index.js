
import "./index.css"
import React from "react";
import { connect } from "react-redux";
import AddReviewForm from "../../Components/AddReviewFlow/AddReviewForm";
import SearchSpotify from "../../Components/AddReviewFlow/SearchSpotify";
import { Box } from "@mui/joy";
import SelectAlbum from "../../Components/AddReviewFlow/SelectAlbum";

class AddReviewPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            step: 0,
            spotifyResults: [],
            selectedAlbum: {}
        }
    }

    updateSpotifyResults = (results) => {
        this.setState({ spotifyResults: results })
    }
    updateSelectedAlbum = (album) => {
        this.setState({ selectedAlbum: album })
    }

    // Proceed to next step
    continues = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1,
        });
    };

    // Go back to prev step
    back = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1,
        });
    };

    render() {
        const { step } = this.state;
        switch (step) {
            case 0:
                return (<Box className="app-page" >
                    <SearchSpotify continues={this.continues} updateSpotifyResults={this.updateSpotifyResults}
                    />
                </Box >)
            case 1:
                return (<Box className="app-page" >
                    <SelectAlbum back={this.back}
                        continues={this.continues} spotifyResults={this.state.spotifyResults} updateSelectedAlbum={this.updateSelectedAlbum} />
                </Box >)
            case 2:
                return (<Box className="app-page" >
                    <AddReviewForm back={this.back}
                        continues={this.continues} selectedAlbum={this.state.selectedAlbum} />
                </Box >)
            default:
                return <div></div>
        }
    }
}


export default connect(null, null)(AddReviewPage);
