
import { useState } from "react";
import { romanToNumber } from "../utils/RomanToNumberConverter";

export default function Task1() {
  const [romanNumber, setRomanNumber] = useState("");

  const [convertedNumber, setConvertedNumber] = useState(null);

  const handleButton = () => {
    const data = romanToNumber(romanNumber);
    setConvertedNumber(data);
  };
  return (
    <>
      <h1>Roman Numeral to Number Converter</h1>
      <div>
        <label htmlFor="romanInput">Enter Roman Numeral:</label>
        <input
          type="text"
          id="romanInput"
          value={romanNumber}
          onChange={(e) => setRomanNumber(e.target.value.toUpperCase())}
          placeholder="E.g., XLII"
        />
        <button onClick={() => handleButton()}>Convert</button>
      </div>
      {convertedNumber && convertedNumber !== null && (
        <div>Result: {convertedNumber}</div>
      )}
    </>
  );
}
