import React from 'react';
import spinner from './assets/spinner.gif';

function Spinner() {
  return (
    <div className="w-100">
      <img src={spinner} alt="Loading..." className="text-center mx-auto" />
    </div>
  );
}

export default Spinner;