import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import { mapInformation } from '../../common/consts'
import StoreInformation from '../../containers/map/store-information'
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import './index.css'

export default class Buttons extends Component {
  static propTypes = {
    isOpen: PropTypes.bool.isRequired,
    setStoreInfoIsOpen: PropTypes.func.isRequired
  }
  MyMapComponent = withScriptjs(withGoogleMap(props =>
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: 36, lng: 140 }}
    >
      {props.isMarkerShown && <Marker
        position={{ lat: 36, lng: 140 }}
        onClick={() => this.props.setStoreInfoIsOpen(!this.props.isOpen)}
      />}
    </GoogleMap>
  ))
  render = () => (
    <div>
      <this.MyMapComponent
        isMarkerShown
        googleMapURL={mapInformation.url}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `90vh` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
      <StoreInformation />
      <FloatingActionButton className="add-button">
        <ContentAdd />
      </FloatingActionButton>
    </div>
  )
}