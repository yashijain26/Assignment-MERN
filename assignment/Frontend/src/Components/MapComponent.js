import React, { useRef, useState } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import axios from 'axios';
const containerStyle = {
 width: '100%',
 height: '400px',
};
const center = {
 lat: -3.745,
 lng: -38.523,
};
const MapComponent = ({ onCapture }) => {
 const mapRef = useRef(null);
 const [map, setMap] = useState(null);
 const onLoad = (mapInstance) => {
   setMap(mapInstance);
 };
 const captureRegion = () => {
   const bounds = map.getBounds();
   const visibleRegion = {
     north: bounds.getNorthEast().lat(),
     south: bounds.getSouthWest().lat(),
     east: bounds.getNorthEast().lng(),
     west: bounds.getSouthWest().lng(),
   };
   // Call the backend to capture the image and save data
   axios.post('http://localhost:5000/api/capture', { region: visibleRegion }).then((res) => {
     onCapture(res.data.imageUrl);
   });
 };
 return (
<LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
<GoogleMap
       mapContainerStyle={containerStyle}
       center={center}
       zoom={10}
       onLoad={onLoad}
       onUnmount={() => setMap(null)}
       ref={mapRef}
>
       {/* Other map features */}
</GoogleMap>
<button onClick={captureRegion}>Capture Visible Region</button>
</LoadScript>
 );
};
export default MapComponent;
