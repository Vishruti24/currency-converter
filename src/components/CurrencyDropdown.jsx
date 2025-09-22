import React from "react";
import countryList from "../assets/countryList"; 

const CurrencyDropdown = ({ name, value, onChange }) => {
  return (
    <div className="dropdown">
      <img
        src={`https://flagsapi.com/${countryList[value]}/flat/64.png`}
        alt={value}
        style={{ width: "40px", marginRight: "8px" }}
      />
      <select name={name} value={value} onChange={onChange}>
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
