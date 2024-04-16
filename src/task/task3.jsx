import React, { useState, useEffect } from 'react';

 export default function Task3() {
  const [birthDate, setBirthDate] = useState({
    year: '',
    month: '',
    day: '',
  });
  const [countdown, setCountdown] = useState(null);

  const calculateCountdown = () => {
    const { year, month, day } = birthDate;
    const today = new Date();
    const birthday = new Date(today.getFullYear(), parseInt(month) - 1, parseInt(day));

    if (today > birthday) {
      birthday.setFullYear(today.getFullYear() + 1);
    }

    const diff = birthday - today;
    const months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30.4375));
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    setCountdown({
      months,
      days,
      hours,
      minutes,
      seconds,
    });
  };

  useEffect(() => {
    calculateCountdown();

    const timer = setInterval(() => {
      calculateCountdown();
    }, 1000);

    return () => clearInterval(timer);
  }, [birthDate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBirthDate((prevDate) => ({
      ...prevDate,
      [name]: value,
    }));
  };

  return (
    <div>
      <h1> Task 3 : Next Birthday Countdown</h1>
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
        {countdown ? (
          <div>
            <strong>Time until next birthday : </strong> {countdown.months} months, {countdown.days} days,{' '}
            {countdown.hours} hours, {countdown.minutes} minutes, {countdown.seconds} seconds
          </div>
        ) : (
          <div> Please enter your birthdate </div>
        )}
      </div>
    </div>
  );
}