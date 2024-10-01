import React from 'react';
import { MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div>
          <h3 className="text-xl font-bold mb-2">Plumbing and Heating</h3>
          <p className="flex items-center">
            <MapPin size={16} className="mr-2" />
            XXX Center, VT
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;