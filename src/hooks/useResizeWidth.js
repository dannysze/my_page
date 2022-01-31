import { useState, useEffect } from 'react';

const useResizeWidth = () => {

  const [width, setWidth] = useState(window.innerWidth);
  
  useEffect(() => {
    const resizeHandler = () => {
      setWidth(window.innerWidth);
    };
    
    window.addEventListener("resize", resizeHandler);

    return () => window.removeEventListener("resize", resizeHandler);
  }, []);

  return width;
};

export default useResizeWidth;