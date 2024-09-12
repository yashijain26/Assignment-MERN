import React, { useRef, useEffect } from 'react';
import { MapContainer, TileLayer, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MapComponent = ({ setRegion }) => {
  const mapRef = useRef();

  const MyMapEvents = () => {
    const map = useMapEvents({
      moveend: () => {
        const bounds = map.getBounds();
        const regionData = {
          north: bounds.getNorth(),
          south: bounds.getSouth(),
          east: bounds.getEast(),
          west: bounds.getWest(),
        };
        setRegion(regionData);
      },
    });
    return null;
  };

  useEffect(() => {
    if (mapRef.current) {
      console.log("Map initialized");
    }
  }, []);

  return (
    <MapContainer
      center={[51.505, -0.09]} // Default center
      zoom={13}
      scrollWheelZoom={true}
      style={{ height: '100%', width: '100%' }}
      ref={mapRef}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <MyMapEvents />
    </MapContainer>
  );
};

export default MapComponent;
