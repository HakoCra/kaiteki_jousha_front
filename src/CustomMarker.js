import React from 'react';
import { Marker } from 'react-leaflet';
import L from 'leaflet';
import CustomPopup from './CustomPopup';

function initMarker(ref) {
  if(!ref) return;
  ref.leafletElement.openPopup();
}

function fukaiIcon(fukai) {
  const color = fukai < 60 ? 'blue' :
    60 <= fukai && fukai >= 70 ? 'kaiteki' :
    'red';
  return new L.Icon({
    iconUrl: `http://${window.location.host}${window.location.pathname}/icons/marker-${color}.png`,
  });
};

function CustomMarker(props) {
  const { pin } = props;
  return (
    <Marker ref={initMarker} position={pin.position} icon={fukaiIcon(pin.fukai)}>
      <CustomPopup pin={pin} />
    </Marker>
  );
}

export default CustomMarker;
