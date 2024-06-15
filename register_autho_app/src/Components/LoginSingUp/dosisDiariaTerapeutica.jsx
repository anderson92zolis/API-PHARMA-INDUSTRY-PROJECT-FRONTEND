import React, { useState } from "react";
import axios from "axios";

const Ddt = () => {
  const [formDataMaco, setFormDataMaco] = useState({
    mddProductA: "",
    mbsProductB: "",
    lddProductB: "",
    sharedSurface: "",
    securityFactor: "",
  });

  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Convertir los valores a enteros
    const dataToSend = {
      mddProductA: parseInt(formDataMaco.mddProductA, 10) || 0,
      mbsProductB: parseInt(formDataMaco.mbsProductB, 10) || 0,
      lddProductB: parseInt(formDataMaco.lddProductB, 10) || 0,
      sharedSurface: parseInt(formDataMaco.sharedSurface, 10) || 0,
      securityFactor: parseInt(formDataMaco.securityFactor, 10) || 0,
    };
    console.log(dataToSend);
    
    try {
      const response = await axios.post("http://localhost:8080/api/v1/maco/dataMaco", dataToSend, {
        headers: {
          "Content-Type": "application/json",
        },
      });
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
          <label htmlFor="mddProductA">
            Minimum Daily Dose of Product A (mg/kg/day):
          </label>
          <input
            type="text"
            id="mddProductA"
            value={formDataMaco.mddProductA}
            onChange={(e) => setFormDataMaco({ ...formDataMaco, mddProductA: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="mbsProductB">
            Minimum Batch Size for Product B (mg):
          </label>
          <input
            type="text"
            id="mbsProductB"
            value={formDataMaco.mbsProductB}
            onChange={(e) => setFormDataMaco({ ...formDataMaco, mbsProductB: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="lddProductB">
            Largest Daily Dose of Product B (mg/kg/day):
          </label>
          <input
            type="text"
            id="lddProductB"
            value={formDataMaco.lddProductB}
            onChange={(e) => setFormDataMaco({ ...formDataMaco, lddProductB: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="sharedSurface">
            Shared Surface between Products (cm²):
          </label>
          <input
            type="text"
            id="sharedSurface"
            value={formDataMaco.sharedSurface}
            onChange={(e) => setFormDataMaco({ ...formDataMaco, sharedSurface: e.target.value })}
          />
        </div>

        <div>
          <label htmlFor="securityFactor">
            Security Factor (0.01 for oral products):
          </label>
          <input
            type="text"
            id="securityFactor"
            value={formDataMaco.securityFactor}
            onChange={(e) => setFormDataMaco({ ...formDataMaco, securityFactor: e.target.value })}
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Ddt;
