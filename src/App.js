import React from 'react';
import { Map, TileLayer } from 'react-leaflet';
import Marker from './Marker';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      now: [],
    };
  }

  async componentDidMount() {
    this.timer = setInterval(async() => {
      const res = await fetch('https://fukai.mybluemix.net/now');
      const now = await res.json();
      this.setState({ now });
    }, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const markers = this.state.now.map(data => <Marker data={data} key={data._id} />);

    return (
      <div className="App">
        <Map id="map" center={[41.8327605, 140.7515623]} zoom={13}>
          <TileLayer
            attribution='amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          { markers }
        </Map>
      </div>
    );
  }
}

export default App;
