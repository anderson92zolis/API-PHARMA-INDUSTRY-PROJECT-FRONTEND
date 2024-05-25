import React, { useState } from "react";
import axios from "axios";

const Ddt = () => {
  const [formDataMaco, setFormDataMaco] = useState({
    mDDProductA: "",
    mBSProductB: "",
    lDDProductB:"" ,
    sharedSurface:"" ,
    maco: "",
    securityFactor: "",
    message: "",

  });


  const [mDDProductA, setMDDProductA] = useState("");
  const [mBSProductB, setMBSProductB] = useState("");
  const [lDDProductB, setLDDProductB] = useState("");
  const [sharedSurface, setSharedSurface] = useState("");
  const [maco, setMaco] = useState("");
  const [securityFactor, setSecurityFactor] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Enviar los datos al backend
      const response = await axios.post("http://localhost:8080/api/data", formDataMaco);
      setMessage("Datos enviados exitosamente al backend.");
    } catch (error) {
      setMessage("Error al enviar los datos al backend.");
    }
  };

  return (
    <div>
      <h2>Ingrese los Datos</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="mDDProductA">
            Minimum Daily Dose of Product A (mg/kg/day):
          </label>
          <input
            type="text"
            id="mDDProductA"
            value={mDDProductA}
            onChange={(e) => setMDDProductA(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="mBSProductB">
            Minimum Batch Size for Product B (mg):
          </label>
          <input
            type="text"
            id="mBSProductB"
            value={mBSProductB}
            onChange={(e) => setMBSProductB(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="lDDProductB">
            Largest Daily Dose of Product B (mg/kg/day):
          </label>
          <input
            type="text"
            id="lDDProductB"
            value={lDDProductB}
            onChange={(e) => setLDDProductB(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="sharedSurface">
            Shared Surface between Products (cm²):
          </label>
          <input
            type="text"
            id="sharedSurface"
            value={sharedSurface}
            onChange={(e) => setSharedSurface(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="maco">Maximum Allowed Carry Over (mg/cm²):</label>
          <input
            type="text"
            id="maco"
            value={maco}
            onChange={(e) => setMaco(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="securityFactor">
            Security Factor (0.01 for oral products):
          </label>
          <input
            type="text"
            id="securityFactor"
            value={securityFactor}
            onChange={(e) => setSecurityFactor(e.target.value)}
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Ddt;
