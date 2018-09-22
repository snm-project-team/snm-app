import React, { Component } from 'react';
import { MapView } from 'expo';

export default class Map extends Component {
  render() {
    return (
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 37.78826,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <MapView.Marker
          coordinate={{ latitude: 37.73538, longitude: -122.4324 }}
          title="marker.title"
          description="desss"
          // sagaのイベント、詳細情報をコール、独自コンポネント呼びだし、座標どうするかが問題?
          onPress={() => console.log('hey')}
        />
      </MapView>
    );
  }
}
