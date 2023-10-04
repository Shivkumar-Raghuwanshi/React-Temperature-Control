import React, { useState } from "react";
import "./App.css"

const App = () => {

  const [temperatureValue, setTemperatureValue] = useState(27);
  const [temperatureColor, setTemperatureColor] = useState("cold")

  const increaseTemperature = () => {
    if (temperatureValue === 100) return;

    const newTemperature = temperatureValue + 1;
    if (temperatureValue >= 27 && temperatureValue <= 47) {
      setTemperatureColor("hot");
    }
    if (temperatureValue > 48) {
      setTemperatureColor("danger");
    }
    setTemperatureValue(newTemperature);
  };

  const decreaseTemperature = () => {
    if (temperatureValue === 0) return;
    const newTemperature = temperatureValue - 1;
    if (temperatureValue < 27) {
      setTemperatureColor("cold");
    }
    setTemperatureValue(newTemperature);
  };

  return (
    <div className="app-container">
      <div className="temperature-display-container">
        <div className={`temperature-display ${temperatureColor}`}>{temperatureValue}°C</div>
      </div>
      <div className="button-container">
        <button
          onClick={() => increaseTemperature()}>+</button>
        <button
          onClick={() => decreaseTemperature()}>-</button>
      </div>
    </div>
  );
}


export default App;