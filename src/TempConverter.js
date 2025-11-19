// TempConverter.jsx
import React, { useState } from "react";

export default function TempConverter() {
  const [value, setValue] = useState("");
  const [scale, setScale] = useState("C"); // C or F

  const toC = (f) => ((Number(f) - 32) * 5) / 9;
  const toF = (c) => (Number(c) * 9) / 5 + 32;

  const handleChange = (e) => {
    const v = e.target.value;
    if (v === "" || /^-?\d*\.?\d*$/.test(v)) {
      setValue(v);
    }
  };

  const celsius = scale === "C" ? value : (value === "" ? "" : toC(value).toFixed(2));
  const fahrenheit = scale === "F" ? value : (value === "" ? "" : toF(value).toFixed(2));

  return (
    <div style={{ padding: 20, maxWidth: 420, margin: "auto", textAlign: "center" }}>
      <h3>Temperature Converter</h3>

      <div style={{ marginBottom: 12 }}>
        <label>
          <input type="radio" checked={scale === "C"} onChange={() => setScale("C")} /> Celsius
        </label>
        {" "}
        <label>
          <input type="radio" checked={scale === "F"} onChange={() => setScale("F")} /> Fahrenheit
        </label>
      </div>

      <input
        placeholder={scale === "C" ? "Enter °C" : "Enter °F"}
        value={value}
        onChange={handleChange}
        style={{ padding: 8, width: "80%", borderRadius: 6, border: "1px solid #ccc" }}
      />

      <div style={{ marginTop: 16 }}>
        <p><b>Celsius:</b> {celsius === "" ? "-" : `${celsius} °C`}</p>
        <p><b>Fahrenheit:</b> {fahrenheit === "" ? "-" : `${fahrenheit} °F`}</p>
      </div>
    </div>
  );
}
