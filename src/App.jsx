import React,{useState} from "react";
import ColorBox from "./components/ColorBox";
import ColorForm from "./components/ColorForm";
function App() {
  const [colors, setColors] = useState([]);

  const handleColorSubmit = (color) => {
    setColors([...colors, color]);
  };

  return (
    <div className="App">
      <h1>Color Box App</h1>
      <ColorForm onColorSubmit={handleColorSubmit} />
      <div>
        {colors.map((color, index) => (
          <ColorBox key={index} color={color} />
        ))}
      </div>
    </div>
  );
}

export default App;