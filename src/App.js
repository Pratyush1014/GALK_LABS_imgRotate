import { useState } from "react";
import logo from "./wheel.svg";
import "./App.css";

function App() {
  const [angle, setAngle] = useState(0);

  const onDegreeChange = () => {
    let newangle = (angle + 15) % 360;
    setAngle(newangle);
  };

  document.addEventListener("keydown", function (event) {
    if (event.key === "Shift") {
      onDegreeChange();
    }
  });
  return (
    <div className="App" >
      <header className="App-header">
        <img
          style={{ transform: `rotate(${angle}deg)` }}
          src={logo}
          className="App-logo"
          alt="logo"
        />
      </header>
    </div>
  );
}

export default App;
