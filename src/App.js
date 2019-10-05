import React from 'react';
import { Map, TileLayer } from 'react-leaflet';
import './App.css';

class App extends React.Component {
  async componentDidMount() {
    this.timer = setInterval(async() => {
      const res = await fetch('https://fukai.mybluemix.net/now');
      const data = await res.json();
      console.log(data);
    }, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <div className="App">
        <Map id="map" center={[41.8327605, 140.7515623]} zoom={13}>
          <TileLayer
            attribution='amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </Map>
      </div>
    );
  }
}

export default App;
