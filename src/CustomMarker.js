import React from 'react';
import { Marker } from 'react-leaflet';
import CustomPopup from './CustomPopup';

function CustomMarker(props) {
  const calcFukai = (fukai) => {
    if(fukai < 65) {
      return "🥶";
    } else if(65 <= fukai && fukai >= 70 ) {
      return "🥰";
    } else {
      return "🥵";
    }
  }

  const { pin } = props;
  return (
    <Marker position={pin.position}>
      <CustomPopup pin={pin} />
    </Marker>
  );
}

export default CustomMarker;
