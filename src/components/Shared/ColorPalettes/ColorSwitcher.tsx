import React, { useState, useEffect, useRef } from "react";
import { PiGearSix } from "react-icons/pi";

const colors1 = ["120, 171, 168", "255, 145, 251", "253, 187, 46"];
const colors2 = ["255, 219, 103", "0, 255, 255", "84, 182, 137"];

const ColorPicker: React.FC = () => {
  const [color, setColor] = useState<string | null>(null);
  const colorSwitcherRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const storedColor = localStorage.getItem("primary-color");
    setColor(storedColor);
  }, []);

  const handleColorChange = (newColor: string) => {
    setColor(newColor);
    localStorage.setItem("primary-color", newColor);
    document.documentElement.style.setProperty("--p1", newColor);
  };

  const toggleColorSwitcher = () => {
    const colorSwitcher = colorSwitcherRef.current;
    if (colorSwitcher) {
      colorSwitcher.classList.toggle("opened");
    }
  };

  return (
    <div className="color-switcher" ref={colorSwitcherRef}>
      <button className="switcher-btn" onClick={toggleColorSwitcher}>
        <PiGearSix />
      </button>
      <div className="pallates box-shadow2 brn4">
        <div className="d-flex gap-2">
          {colors1.map((color, idx) => (
            <button
              key={idx}
              className={`color-btn bg-color${idx + 1}`}
              onClick={() => handleColorChange(color)}
              data-color={color}
            ></button>
          ))}
        </div>
        <div className="d-flex gap-2 mt-2">
          {colors2.map((color, idx) => (
            <button
              key={idx}
              className={`color-btn bg-color${idx + 4}`}
              onClick={() => handleColorChange(color)}
              data-color={color}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ColorPicker;
