import React from 'react';
import { Marker } from 'react-leaflet';
import L from 'leaflet';
import CustomPopup from './CustomPopup';

function CustomMarker(props) {
  const { pin } = props;
  const fukaiIcon = (fukai) => {
    const color = fukai < 60 ? 'blue' :
      60 <= fukai && fukai >= 70 ? 'kaiteki' :
      'red';
    return new L.Icon({
      iconUrl: `http://${window.location.host}/icons/marker-${color}.png`,
    });
  };

  return (
    <Marker position={pin.position} icon={fukaiIcon(pin.fukai)}>
      <CustomPopup pin={pin} />
    </Marker>
  );
}

export default CustomMarker;
