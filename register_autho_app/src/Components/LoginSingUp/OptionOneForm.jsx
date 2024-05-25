import React, { useState } from "react";
import "./index.css";
import "./StyleSL.css";

const OptionOneForm = () => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted value: ${value}`);
  };

  return (
    <div className="container">
      <div className="header">
        <div className="text">10 ppm Criteria</div>
        <div className="underline"></div>
      </div>
      <form onSubmit={handleSubmit}>
        <label>
          Enter Value:
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>

      


    </div>
  );
};

export default OptionOneForm;
