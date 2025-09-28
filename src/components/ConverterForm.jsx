import React, { useState } from "react";
import CurrencyDropdown from "./CurrencyDropdown";

const BASE_URL =
  "https://v6.exchangerate-api.com/v6/18bcd1faca385d6790f975c6/latest";

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
    <form onSubmit={handleConvert} className="text-center mt-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 p-4">
            <CurrencyDropdown
              name="from"
              value={fromCurr}
              onChange={(e) => setFromCurr(e.target.value)}
            />
            <input
              type="number"
              min="1"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="form-control text-center my-3 pink-box"
            />
          </div>

          <div className="col-md-6 p-4">
            <CurrencyDropdown
              name="to"
              value={toCurr}
              onChange={(e) => setToCurr(e.target.value)}
            />
            <div className="form-control text-center my-3 pink-box fw-bold">
              {message ? message : "Converted Amount"}
            </div>
          </div>
        </div>

        <button type="submit" className="btn btn-danger convert-btn mt-3">
          Convert
        </button>
      </div>
    </form>
  );
};

export default ConverterForm;
