import React, { useState, useRef } from 'react';
import MapComponent from './Components/MapComponent';
import axios from 'axios';
import BabylonScene from './Components/Cuboid';
import html2canvas from 'html2canvas';
import './App.css';

function App() {
  const [region, setRegion] = useState(null);
  const [image, setImage] = useState(null);
  const mapContainerRef = useRef();

  const handleCapture = async () => {
    if (!region || !mapContainerRef.current) {
      alert('Region not selected or map container not found!');
      return;
    }

    try {
      const canvas = await html2canvas(mapContainerRef.current);
      const imageUrl = canvas.toDataURL('image/png');

      // Send the captured image to the backend
      const response = await axios.post('http://localhost:5001/api/maps/capture', {
        imageUrl,
        region,
        userId: '12345',
      });

      setImage(imageUrl);
      console.log('Capture saved:', response.data);
    } catch (error) {
      console.error('Error capturing region:', error);
    }
  };

  return (
    <div className="App">
      <h1>Map Capture</h1>
      <div ref={mapContainerRef} style={{ height: '500px', width: '100%' }}>
        <MapComponent setRegion={setRegion} />
      </div>
      <button onClick={handleCapture}>Capture Region</button>
      {image && (
        <>
          <h2>Captured Image</h2>
          <img src={image} alt="Captured Region" style={{ maxWidth: '100%', height: 'auto' }} />
          <BabylonScene textureUrl={image} />
        </>
      )}
    </div>
  );
}

export default App;
