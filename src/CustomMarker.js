import React from 'react';
import { Marker } from 'react-leaflet';
import L from 'leaflet';
import CustomPopup from './CustomPopup';

function initMarker(ref) {
  if(!ref) return;
  ref.leafletElement.openPopup();
}

function fukaiIcon(fukai, co2) {
  const color = 60 < fukai && fukai <= 70 && co2 <= 1500 ? 'fine' : 'poor';
  return new L.Icon({
    iconUrl: `http://${window.location.host}${window.location.pathname}icons/icon_${color}.png`,
    iconSize: [61, 33],
    iconAnchor: [61, 33],
    popupAnchor: [-38, -33],
  });
};

function CustomMarker(props) {
  const { pin } = props;
  return (
    <Marker ref={initMarker} position={[pin.latitude, pin.longitude]} icon={fukaiIcon(pin.fukai, pin.co2)}>
      <CustomPopup pin={pin} />
    </Marker>
  );
}

export default CustomMarker;
