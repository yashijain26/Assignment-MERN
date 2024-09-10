import React, { useState } from 'react';
import MapComponent from './Components/MapComponent';
import Cuboid from './Components/Cuboid';
import './App.css';
const App = () => {
 const [imageUrl, setImageUrl] = useState(null);
 const handleMapCapture = (url) => {
   setImageUrl(url);
 };
 return (
<div>
<h1>Map Capture to 3D Cuboid</h1>
<MapComponent onCapture={handleMapCapture} />
     {imageUrl && <Cuboid imageUrl={imageUrl} />}
</div>
 );
};
export default App;
