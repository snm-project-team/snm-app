import React, { Component } from 'react';
import { MapView } from 'expo';
import PropTypes from 'prop-types';

export default class Map extends Component {
  static propTypes={
    isSpotDetailOpen: PropTypes.bool.isRequired,
    setSpotDetailOpen: PropTypes.func.isRequired,
  };

  state = {
    latitude: 35.681167,
    longitude: 139.767052,
  };

  render() {
    console.log(this.state.latitude);
    return (
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 35.681167,
          longitude: 139.767052,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
        region={{
          latitude: this.state.latitude,
          longitude: this.state.longitude,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
      >
        <MapView.Marker
          coordinate={{ latitude: 35.681167, longitude: 139.767052 }}
          title="居酒屋 かざえ"
          onPress={() => {
            this.setState({ longitude: 139.749052 });
            this.props.setSpotDetailOpen(!this.props.isSpotDetailOpen, '1');
          }}
        />
        <MapView.Marker
          coordinate={{ latitude: 34.681167, longitude: 138.767052 }}
          title="marker.title"
          onPress={() => this.props.setSpotDetailOpen(!this.props.isSpotDetailOpen, '2')}
        />
      </MapView>
    );
  }
}
