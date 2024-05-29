// src/commons/toolbar/SlideInMenu.tsx
import React from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';

interface SlideInMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const SlideInMenu: React.FC<SlideInMenuProps> = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed inset-0 bg-gray-900 bg-opacity-75 transition-transform transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } md:translate-x-0 md:w-58 slide-in`}
    >
      <div className="bg-white h-full w-full md:w-58 p-4 relative">
        <button onClick={onClose} className="absolute top-4 left-4">
          <XMarkIcon className="w-6 h-6" />
        </button>
        <div className="flex flex-col items-center space-y-4 mt-12 md:mt-4">
          <a href="#" className="text-gray-800">Home</a>
          <a href="#" className="text-gray-800">Platform</a>
          <a href="#" className="text-gray-800">Products</a>
          <a href="#" className="text-gray-800">Services</a>
          <button className="bg-blue-500 px-4 py-2 rounded mt-4 md:mt-0 md:hidden">Contact Us</button>
        </div>
      </div>
    </div>
  );
};

export default SlideInMenu;
