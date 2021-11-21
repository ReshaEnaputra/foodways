import React, { Component } from 'react'
import { GoogleMap, Marker,withGoogleMap, withScriptjs } from "react-google-maps"
// import withScriptjs from 'react-google-maps/lib/async/withScriptjs';

class Maps extends Component {
    myMap = withScriptjs(withGoogleMap((props) => (
    <GoogleMap />
    )));

    render() {
        return (
            <React.Fragment>
                {this.myMap()}
            </React.Fragment>
        )
    }
}

export default Maps