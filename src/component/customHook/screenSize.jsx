import { useState, useEffect } from 'react';

function UseScreenSize() {
  const [screenSize, setScreenSize] = useState('');

  useEffect(() => {
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  const checkScreenSize = () => {
    if (window.innerWidth > 900) {
      return setScreenSize('Large');
    } else if (window.innerWidth > 600 && window.innerWidth < 900) {
      return setScreenSize('Medium');
    } else if (window.innerWidth < 600) {
      return setScreenSize('small');
    }
  };
  return screenSize;
}

export default UseScreenSize;
