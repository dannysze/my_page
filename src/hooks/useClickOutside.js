import { useEffect } from 'react';

const useClickOutside = (ref, callback) => {
  useEffect(() => {
    const clickOutsideHandler = (event) => {

      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      console.log('GG triggerign')
      callback(event)
    };

    document.addEventListener('mousedown', clickOutsideHandler);
    document.addEventListener('touchstart', clickOutsideHandler);

    return () => {
      document.removeEventListener('mousedown', clickOutsideHandler);
      document.removeEventListener('touchstart', clickOutsideHandler);
    };
  }, [ref, callback]);
};

export default useClickOutside;