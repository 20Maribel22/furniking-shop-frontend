import React from "react";
import "./Countdown.css";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";

function Countdown() {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");

  let interval = useRef();

  const startTimer = () => {
    const countdownDate = new Date("May 30, 2024 00:00:00").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
  });

  return (
    <div className="timer">
      <div className="timer__container">
        <p className="timer__date">{timerDays}</p>
        <p className="timer__text">Days</p>
      </div>
      <div className="timer__container">
        <p className="timer__date">{timerHours}</p>
        <p className="timer__text">HRS</p>
      </div>
      <div className="timer__container">
        <p className="timer__date">{timerMinutes}</p>
        <p className="timer__text">MIN</p>
      </div>
      <div className="timer__container">
        <p className="timer__date">{timerSeconds}</p>
        <p className="timer__text">secs</p>
      </div>
    </div>
  );
}

export default Countdown;
