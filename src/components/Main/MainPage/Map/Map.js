import React, { Component } from 'react';
import './Map.css';
import MyMapComponent from './MapComponent';
 
export class MapContainer extends Component {

state = {
  currenPosition: null,
  showMap: false
}

componentDidMount() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      let pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      this.setState({ currenPosition: pos })
    })
  }  
}

showMap = () => {
  this.setState({ showMap: true })
}

  render() {

    const { showMap } = this.state;

    return (
      <div className='map_component'>
      <div className={showMap ? 'showMap' : 'map_wraper'}>
        <span onClick={this.showMap} className='pulse'>показать карту</span>
        
      </div>
      {this.state.currenPosition && <MyMapComponent center={this.state.currenPosition}/>}
      </div>
    )
  }
}

export default MapContainer

