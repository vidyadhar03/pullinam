// src/commons/toolbar/Toolbar.tsx
import { useState } from 'react';
// import SlideInMenu from './SlideInMenu';

export function Toolbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex items-center md:justify-between p-4  text-black">
      <div>
        <img src='./hamburger.svg' className='w-8 h-8 cursor-pointer'/>
      </div>

      <div><img src='./titlemain.jpg' className='w-auto h-12 ml-4 md:ml-0'/></div>
      
      <div className="hidden md:block">
        <div className="text-sm text-gray-800 px-4 py-2 rounded">Contact Us</div>
      </div>
      {/* <SlideInMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} /> */}
    </div>
  );
}
