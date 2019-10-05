import React from 'react';
import { Marker, Popup } from 'react-leaflet';

class CustomMarker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
    };
  }

  async componentDidMount() {
    const res = await fetch(`https://fukai.mybluemix.net/get-history/${this.state.data.uuid}`)
    const history = await res.json();
  }

  calcFukai(fukai) {
    if(fukai < 65) {
      return "🥶";
    } else if(65 <= fukai && fukai >= 70 ) {
      return "🥰";
    } else {
      return "🥵";
    }
  }

  render() {
    const { data } = this.state;
    return (
      <Marker position={data.position}>
        <Popup>
          <span role="emoji">{ data.fukai }{ this.calcFukai(data.fukai) }</span>
        </Popup>
      </Marker>
    );
  }
}

export default CustomMarker;
