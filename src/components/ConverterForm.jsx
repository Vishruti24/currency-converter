import React, { useState } from "react";
import CurrencyDropdown from "./CurrencyDropdown";

const BASE_URL = "https://v6.exchangerate-api.com/v6/18bcd1faca385d6790f975c6/latest";

const ConverterForm = () => {
  const [fromCurr, setFromCurr] = useState("USD");
  const [toCurr, setToCurr] = useState("INR");
  const [amount, setAmount] = useState(1);
  const [message, setMessage] = useState("");

  const handleConvert = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${BASE_URL}/${fromCurr}`);
      const data = await response.json();
      const rate = data.conversion_rates[toCurr];
      const finalAmount = (amount * rate).toFixed(2);

      setMessage(`${amount} ${fromCurr} = ${finalAmount} ${toCurr}`);
    } catch (error) {
      setMessage("Error fetching exchange rate!");
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleConvert} style={{ textAlign: "center" }}>
      <div style={{ marginBottom: "20px" }}>
        <CurrencyDropdown
          name="from"
          value={fromCurr}
          onChange={(e) => setFromCurr(e.target.value)}
        />
        <CurrencyDropdown
          name="to"
          value={toCurr}
          onChange={(e) => setToCurr(e.target.value)}
        />
      </div>

      <input
        type="number"
        min="1"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        style={{ padding: "8px", marginRight: "10px" }}
      />
      <button type="submit">Convert</button>

      <p className="msg" style={{ marginTop: "20px", fontWeight: "bold" }}>
        {message}
      </p>
    </form>
  );
};

export default ConverterForm;
