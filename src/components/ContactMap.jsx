import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Maximize2 } from 'lucide-react';

import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

const customIcon = new L.Icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const ContactMap = () => {
  const position = [9.9816, 76.2999]; 
  const zoomLevel = 13;

  return (
    <section className="relative w-full h-[500px] z-0 overflow-hidden border-t border-gray-100">
      <MapContainer 
        center={position} 
        zoom={zoomLevel} 
        scrollWheelZoom={false}
        className="w-full h-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={customIcon}>
          <Popup>
            <span className="font-bold">Roadoz Logistics Center</span> <br /> 
            Regional Hub
          </Popup>
        </Marker>
      </MapContainer>
      
      <div className="absolute bottom-10 left-6 md:left-20 max-w-xs bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-2xl border border-white z-[1000] pointer-events-auto">
        <h4 className="font-bold text-gray-900 mb-2">Regional Hub</h4>
        <p className="text-gray-600 text-xs leading-relaxed">
          Centrally located in Kochi to manage South Indian distribution channels with maximum efficiency.
        </p>
      </div>

      <div className="absolute bottom-10 right-6 md:right-20 flex flex-col gap-2 z-[1000]">
        <button 
          onClick={() => window.open(`https://www.google.com/maps?q=${position[0]},${position[1]}`, '_blank')}
          className="bg-white p-3 rounded-full shadow-lg text-gray-600 hover:bg-gray-100 transition-colors flex items-center justify-center border border-gray-200"
          title="View on Google Maps"
        >
          <Maximize2 size={20} />
        </button>
      </div>
    </section>
  );
};

export default ContactMap;