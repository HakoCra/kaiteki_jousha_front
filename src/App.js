import React from 'react';
import { Map, TileLayer } from 'react-leaflet';
import CustomMarker from './CustomMarker';
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
    const markers = this.state.now.map(pin => <CustomMarker pin={pin} key={pin._id} />);

    return (
      <div className="App">
        <header>
          <h3>公共交通機関を快適に利用する会</h3>
          <a href="#about">About</a>
        </header>
        <Map id="map" center={[41.8327605, 140.7515623]} zoom={13}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          { markers }
        </Map>
      </div>
    );
  }
}

export default App;
