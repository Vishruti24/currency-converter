import React from "react";
import countryList from "../assets/countryList";

const CurrencyDropdown = ({ name, value, onChange }) => {
  return (
    <div className="d-flex flex-column align-items-center mb-3">
      <img
        src={`https://flagsapi.com/${countryList[value]}/flat/64.png`}
        alt={value}
        className="mb-2"
        style={{ width: "150px" }}
      />
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="form-select w-50"
      >
        {Object.keys(countryList).map((curr) => (
          <option key={curr} value={curr}>
            {curr}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CurrencyDropdown;
