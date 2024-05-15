import React, { useState, useEffect } from 'react';
import Countdown from './Countdown';
import githubLogo from './githubLogo.svg';
import { Link } from 'react-router-dom';


const Birthday = ({ name, day, month}) => {
  // State
  const [countdownData, setCountdownData] = useState({
    seconds: 0,
    hours: 0,
    minutes: 0,
    days: 0,
    isItBday: false,
  });

  if (name === undefined || day === undefined || month === undefined) {
    // This is if not enough params are provided
    name = 'Harsh'; // Name of the Person
    month = 7; // Month of the Birthday
    day = 3; // Day of the Birthday
  }

  // Utility function to calculate countdown data
  const calculateCountdown = () => {
    const currentTime = new Date();
    const currentYear = currentTime.getFullYear();

    // Getting the birthday date
    let birthdayDay = new Date(currentYear, month - 1, day);

    // Adjusting for past or next year if needed
    if (currentTime > birthdayDay || (currentTime.getFullYear() === birthdayDay.getFullYear() + 1)) {
      birthdayDay = new Date(currentYear + 1, month - 1, day);
    }

    // Calculating time remaining
    const timeRemaining = birthdayDay.getTime() - currentTime.getTime();
    const seconds = Math.floor(timeRemaining / 1000) % 60;
    const minutes = Math.floor(timeRemaining / (1000 * 60)) % 60;
    const hours = Math.floor(timeRemaining / (1000 * 60 * 60)) % 24;
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));

    // Checking if it's the birthday
    const isItBday = currentTime.getDate() === day && currentTime.getMonth() === month - 1;

    // Updating state
    setCountdownData({ seconds, minutes, hours, days, isItBday });
  };

  // Effect for updating countdown every second
  useEffect(() => {
    const intervalId = setInterval(calculateCountdown, 1000);

    return () => clearInterval(intervalId); // Cleanup
  }, [day, month]);

  // Getting month name
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  const monthBday = monthNames[month - 1];

  return (
    <div className='page'>
      <Countdown countdownData={countdownData} name={name} />
      {!countdownData.isItBday && (
        <>
          <div className='birthdate'>
            Next-BirthDay-Date: {day} {monthBday} {new Date().getFullYear()}
          </div>
          <div className='credits'>
            <a href='https://github.com/CodeBy-HP'>
              <img src={githubLogo} alt='Github-Logo' className='github-logo' />
            </a>
          </div>
          <Link to='/generate'>Generate Here</Link>
        </>
      )}
    </div>
  );
};

export default Birthday;
