import React, { useEffect } from 'react';
import './Maintainance.sass';

const Maintainanace = () => {

  useEffect(() => {
    document.title = 'Maintainanace';
  });

  return (
    <div className="maintainance__container flex__container__center">
      <div className="maintainance__message">
        <h1 className="maintainance__title title-1">Oops!</h1>
        <h2 className="maintainanace__subtitle title-2">My page is currently unavailable!</h2>
        <p className="maintainance__passage passage-1">Please visit again later!</p>
      </div>
    </div>
  );
}

export default Maintainanace;