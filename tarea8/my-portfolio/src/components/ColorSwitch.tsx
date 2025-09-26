import { useState } from "react";

function ColorSwitch() {
  const [colors, setColors] = useState<string[]>([]);
  const [color, setColor] = useState<string>("");

  const handleAddColor = () => {
    setColors([...colors, color]);
    setColor("");
  };

  const handleClickColor = (color: string) => {
    document.body.style.backgroundColor = color;
  };

  return (
    <>
      <div className="color-switch-input">
        <input
          type="text"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          placeholder="Add color"
        />
        <button onClick={handleAddColor}>Add</button>
      </div>
      <div className="colors-container">
        {colors.map((color) => (
          <div
            style={{
              width: "50px",
              height: "50px",
              backgroundColor: color,
              display: "inline-block",
              margin: "5px",
              cursor: "pointer",
            }}
            key={color}
            className="color-item"
            onClick={() => handleClickColor(color)}
          >
            {color}
          </div>
        ))}
      </div>
    </>
  );
}

export default ColorSwitch;
