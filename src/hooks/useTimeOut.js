import { useEffect } from 'react';

const useTimeOut = (time, callback) => {

  useEffect(() => {
    const timeout = setTimeout(callback, time);
    
    return () => clearTimeout(timeout);
  }, []);

};

export default useTimeOut;