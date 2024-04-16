
import React, { useState, useEffect } from "react";

export default function Task2() {
  const [birthDate, setBirthDate] = useState({
    year: "",
    month: "",
    day: "",
  });
  const [age, setAge] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBirthDate((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  useEffect(() => {
    const calculateAge = () => {
      const birthYear = parseInt(birthDate.year);
      const birthMonth = parseInt(birthDate.month);
      const birthDay = parseInt(birthDate.day);

      if (
        isNaN(birthYear) ||
        isNaN(birthMonth) ||
        isNaN(birthDay) ||
        birthYear < 1 ||
        birthMonth < 1 ||
        birthMonth > 12 ||
        birthDay < 1 ||
        birthDay > 31
      ) {
        setAge(null);
        return;
      }

      const today = new Date();
      const dob = new Date(birthYear, birthMonth, birthDay);
      const diff = today - dob;

      const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
      const months = Math.floor(
        (diff % (1000 * 60 * 60 * 24 * 365.25)) /
          (1000 * 60 * 60 * 24 * (365.25 / 12))
      );
      const days = Math.floor(
        (diff % (1000 * 60 * 60 * 24 * (365.25 / 12))) / (1000 * 60 * 60 * 24)
      );
      const hours = Math.floor(
        (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setAge({
        years,
        months,
        days,
        hours,
        minutes,
        seconds,
      });
    };

    calculateAge();

    const timer = setInterval(() => {
      calculateAge();
    }, 1000);

    return () => clearInterval(timer);
  }, [birthDate]);

  return (
    <div>
      <h1> Task 2 : Age Calculator</h1>
      <div>
        <label htmlFor="year">Year : </label>
        <input
          type="number"
          id="year"
          name="year"
          value={birthDate.year}
          onChange={handleInputChange}
          placeholder="YYYY"
        />
      </div> <br />
      <div>
        <label htmlFor="month">Month : </label>
        <input
          type="number"
          id="month"
          name="month"
          value={birthDate.month}
          onChange={handleInputChange}
          placeholder="MM"
        />
      </div> <br />
      <div>
        <label htmlFor="day">Day : </label>
        <input
          type="number"
          id="day"
          name="day"
          value={birthDate.day}
          onChange={handleInputChange}
          placeholder="DD"
        />
      </div> <br />
      <div>
        {age ? (
          <div>
            <strong>Age:</strong> {age.years} years, {age.months} months,{" "}
            {age.days} days, {age.hours} hours, {age.minutes} minutes,{" "}
            {age.seconds} seconds
          </div>
        ) : (
          <div>Please enter a valid date of birth.</div>
        )}
      </div>
    </div>
  );
}