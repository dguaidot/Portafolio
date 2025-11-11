import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const LocationMap = ({ location, coordinates }) => (
  <section id="location" className="py-24">
    <div className="container mx-auto px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-secondary-800 dark:text-secondary-100 mb-4">
          Mi Ubicación
        </h2>
        <p className="text-secondary-600 dark:text-secondary-300 max-w-2xl mx-auto">
          {location}
        </p>
      </div>
      <div className="h-96 w-full max-w-5xl mx-auto rounded-lg shadow-lg overflow-hidden border border-secondary-200 dark:border-secondary-700">
        <MapContainer 
          center={coordinates} 
          zoom={13} 
          scrollWheelZoom={false} 
          style={{ height: '100%', width: '100%' }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={coordinates}>
            <Popup>
              ¡Aquí es donde la magia sucede! <br /> Caracas, Venezuela.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  </section>
);

export default LocationMap;
