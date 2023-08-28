import React from 'react';

const ColorBox = ({ color }) => {
  const boxStyle = {
    backgroundColor: color,
    width: '100px',
    height: '100px',
    margin: '10px',
    display: 'inline-block',
  };

  return <div style={boxStyle}></div>;
};

export default ColorBox;
