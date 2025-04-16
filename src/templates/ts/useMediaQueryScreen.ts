import { useState, useEffect } from 'react';

const useMediaQueryScreen = () => {
  const [screenSize, setScreenSize] = useState({
    isxSmall: window.innerWidth < 576,
    isSmall: window.innerWidth >= 576 && window.innerWidth < 767,  
    isMedium: window.innerWidth >= 767 && window.innerWidth < 992,  
    isLarge: window.innerWidth >= 992 && window.innerWidth < 1200,  
    isLargeXl: window.innerWidth >= 1200     
  });

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        isxSmall: window.innerWidth <=  576,
        isSmall: window.innerWidth > 576 && window.innerWidth <= 767,  
        isMedium: window.innerWidth > 767 && window.innerWidth <= 992,  
        isLarge: window.innerWidth > 992 && window.innerWidth <= 1200,  
        isLargeXl: window.innerWidth > 1200     
      });
    };

    // Verificación inicial
    handleResize();
      
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return [screenSize.isxSmall, screenSize.isSmall, screenSize.isMedium, screenSize.isLarge, screenSize.isLargeXl];
};

export default useMediaQueryScreen;