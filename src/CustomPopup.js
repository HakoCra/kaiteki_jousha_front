import React from 'react';
import { Popup } from 'react-leaflet';
import { Line } from 'react-chartjs-2';
import moment from 'moment';

class CustomPopup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pin: props.pin,
    };
  }

  calcLine(data) {
    return new Promise(resolve => {
      const labels = data.map(datum => {
        const date = moment(datum.created_at);
        return date.format('HH:mm:ss');
      });
      const fukais = data.map(datum => datum.fukai);

      resolve({
        labels,
        datasets: [{
          label: '不快指数',
          fill: false,
          data: fukais,
        }],
      });
    });
  }

  async componentDidMount() {
    const res = await fetch(`https://fukai.mybluemix.net/get-history/${this.state.pin.uid}`)
    const history = await res.json();
    const data = await this.calcLine(history);
    this.setState({ data });
  }

  nicoIcon(label, val) {
    let emo = "";
    emo = label === "fukai" ? (
      60.0 < val && val <= 70.0 ? "fine" : "poor"
    ) :
    label === "co2" ? (
      emo = val <= 1500 ? "fine" : "poor"
    ) : "aaa"
    const src = `http://${window.location.host}${window.location.pathname}icons/face_${emo}.png`;
    return (
      <img src={src} class="face" alt={`emo_${emo}`} />
    );
  }

  render() {
    const { pin, data } = this.state;
    return (
      <Popup autoClose={false}>
        <p>
          UID: { pin.uid }<br />
          気温: { pin.temperature }<br />
          湿度: { pin.humidity }<br />
          不快指数: { pin.fukai } { this.nicoIcon('fukai', pin.fukai) }<br />
          二酸化炭素濃度: { pin.co2 } { this.nicoIcon('co2', pin.co2) }
        </p>
        <Line data={data} />
      </Popup>
    );
  }
}

export default CustomPopup;
