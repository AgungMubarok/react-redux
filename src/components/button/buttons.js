import React from 'react';

const Buttons = ({title, onClick}) => {
  return (
    <button onClick={onClick}>
      {title}
    </button>
  );
};

export default Buttons;