import React, { useState } from 'react';

const ColorForm = ({ onColorSubmit }) => {
  const [color, setColor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (color.trim() !== '') {
      onColorSubmit(color);
      setColor('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ColorForm;
