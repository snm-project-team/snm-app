import React, { Component } from 'react';
import { MapView } from 'expo';
import PropTypes from 'prop-types';

export default class Map extends Component {
  static propTypes={
    isSideMenuOpen: PropTypes.bool.isRequired,
    setMenuOpen: PropTypes.func.isRequired,
  };

  render() {
    return (
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 35.681167,
          longitude: 139.767052,
          latitudeDelta: 1,
          longitudeDelta: 1,
        }}
      >
        <MapView.Marker
          coordinate={{ latitude: 35.681167, longitude: 139.767052 }}
          title="marker.title"
          description="desss"
          // sagaのイベント、詳細情報をコール、独自コンポネント呼びだし、座標どうするかが問題?
          onPress={() => this.props.setMenuOpen(!this.props.isSideMenuOpen)}
        />
        <MapView.Marker
          coordinate={{ latitude: 34.681167, longitude: 138.767052 }}
          title="marker.title"
          description="desss"
          // sagaのイベント、詳細情報をコール、独自コンポネント呼びだし、座標どうするかが問題?
          onPress={() => this.props.setMenuOpen(!this.props.isSideMenuOpen)}
        />
      </MapView>
    );
  }
}
