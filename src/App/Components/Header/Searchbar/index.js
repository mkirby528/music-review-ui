import "./index.css"
import React from "react";
import Autocomplete from '@mui/joy/Autocomplete';
import Input from '@mui/joy/Input';

class Searchbar extends React.Component {

    render() {
        return (
            <Autocomplete options={['Option 1', 'Option 2']} />
        )
    }
}

export default Searchbar