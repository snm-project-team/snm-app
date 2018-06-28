import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Drawer from 'material-ui/Drawer'
import { Card, CardHeader, CardText } from 'material-ui/Card';
import nanahoshi from '../../img/nanahoshi.jpg'
import tuba from '../../img/tuba.jpg'
import './store-information.css'

export default class Buttons extends Component {
  static propTypes = {
    isOpen: PropTypes.bool.isRequired,
    setStoreInfoIsOpen: PropTypes.func.isRequired
  }
  render = () => (
    <Drawer
      open={this.props.isOpen}
      width={400}
      docked={false}
      onRequestChange={() => this.props.setStoreInfoIsOpen(false)}
    >
      <div className="store-img-space">
        <img className="store-img" src={nanahoshi} alt="nanahoshi" />
      </div>
      <div className="store-info-header">七星家</div>
      <div className="store-content">
        <div className="info-subject">基本情報</div>
        <div className="content-row">
          <div className="content-keys">営業時間</div>
          <div className="content-values">9:00 〜 4:00</div>
        </div>
        <div className="content-row">
          <div className="content-keys">評価</div>
          <div className="content-values">★★☆☆☆</div>
        </div>
        <div className="content-row">
          <div className="content-keys">料金</div>
          <div className="content-values">¥810 〜 ¥114514</div>
        </div>
        <div className="content-row">
          <div className="content-keys">登録者</div>
          <div className="content-values">りるはメンバー</div>
        </div>
      </div>
      <Card className="comment-card">
        <CardHeader
          avatar={tuba}
          title='りるはメンバー'
        />
        <CardText expandable={false}>良いお店<br />玄関に秘密あり</CardText>
      </Card>
    </Drawer>
  )
}