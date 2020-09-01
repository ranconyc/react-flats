import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import flats from '../../data/flats';
import FlatsList from './flats_list';
import Marker from './marker';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFlat: flats[0],
      flats
    };
  }

  selectFlat = (index) => {
    this.setState({ selectedFlat: flats[index] });
  }

  center() {
    const { selectedFlat } = this.state;
    return {
      lat: selectedFlat.lat,
      lng: selectedFlat.lng
    };
  }

  render() {
    const { flats, selectedFlat } = this.state;
    return (
      <div>
        <FlatsList
          flats={flats}
          selectedFlat={selectedFlat}
          selectFlat={this.selectedFlat}
        />
        <div className="map-container">
          <GoogleMapReact defaultCenter={this.center()} sefaultZoom={12}>
            <Marker lat={selectedFlat.lat} lng={selectedFlat.lng} />
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default App;
