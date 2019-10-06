import React from 'react';
import { Popup } from 'react-leaflet';
import { Line } from 'react-chartjs-2';

class CustomPopup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pin: props.pin,
    };
  }

  calcLine(data) {
    return new Promise(resolve => {
      const labels = data.map(datum => datum.created_at);
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
    const res = await fetch(`https://fukai.mybluemix.net/get-history/${this.state.pin.uuid}`)
    const history = await res.json();
    const data = await this.calcLine(history);
    this.setState({ data });
  }

  render() {
    const { pin, data } = this.state;
    return (
      <Popup autoClose={false}>
        <p>UUID: { pin.uuid }, 気温: { pin.temperature }, 湿度: { pin.humidity }</p>
        <Line data={data} />
      </Popup>
    );
  }
}

export default CustomPopup;
