import React from 'react';
import { Map, TileLayer } from 'react-leaflet';
import CustomMarker from './CustomMarker';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      polling: true,
      now: [],
    };
  }

  async componentDidMount() {
    this.timer = setInterval(async() => {
      if (!this.state.polling) return;
      const res = await fetch('https://fukai.mybluemix.net/now');
      const now = await res.json();
      this.setState({ now });
    }, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  revival = async(e) => {
    const obj = {};
    obj[e.target.name] = e.target.value;
    await this.setState(obj);

    const { date, time } = this.state;
    if (!date || !time) {
      this.setState({ polling: true });
      return;
    }

    const datetime = new Date(`${date} ${time}`);
    const res = await fetch(`https://fukai.mybluemix.net/at/${datetime.getTime()}`);
    const json = await res.json();
    this.setState({
      now: json,
      polling: false,
    });
  }

  render() {
    const markers = this.state.now
      .filter(pin => typeof pin.latitude !== "undefined" && typeof pin.longitude !== "undefined")
      .map(pin => <CustomMarker pin={pin} key={pin._id} />);

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

        <form id="revival">
          <input type="date" name="date" onChange={this.revival} />
          <input type="time" name="time" onChange={this.revival} />
        </form>
      </div>
    );
  }
}

export default App;
