import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'
import { appTitle } from '../../common/consts'
import Map from '../../containers/map'

export default class Main extends Component {
  render = () => (
    <div>
      <AppBar
        title={appTitle}
      />
      <Map />
    </div>
  )
}
