import { useState, useEffect } from 'react';
import {
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
} from 'date-fns';

import { useLanguageStore } from '../../Zustand/useLanguageStore';
import translations from './translations';

import scss from './CountdownTimer.module.scss';

interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
}

const eventDate = new Date('May 26, 2024 09:00:00');

export const CountdownTimer: React.FC = () => {
  const { language } = useLanguageStore();
  const t = translations[language];

  const formatTime = (time: number): string =>
    time < 0 ? `0${time}` : time.toString();

  const [timeRemaining, setTimeRemaining] = useState<TimeRemaining>({
    days: 0,
    hours: 0,
    minutes: 0,
  });

  useEffect(() => {
    const calculateTimeRemaining = (): TimeRemaining => {
      const currentDate = new Date();
      const difference = eventDate.getTime() - currentDate.getTime();

      //  If the event time has already passed, we return zero values
      if (difference <= 0) {
        return { days: 0, hours: 0, minutes: 0 };
      }

      const days = differenceInDays(eventDate, currentDate);
      const hours = differenceInHours(eventDate, currentDate) % 24;
      const minutes = differenceInMinutes(eventDate, currentDate) % 60;

      return { days, hours, minutes };
    };

    const updateRemainingTime = () => {
      setTimeRemaining(calculateTimeRemaining());
    };

    // Call the function that updates the remaining time at the start to initiate the countdown
    updateRemainingTime();

    const intervalId = setInterval(updateRemainingTime, 1000 * 60); // Updated every minute

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={scss.countdownTimer}>
      <div className={scss.countdownTimer__container}>
        <span className={scss.countdownTimer__text}>{t.day}</span>
        <span className={scss.countdownTimer__text}>{t.hour}</span>
        <span className={scss.countdownTimer__text}>{t.minute}</span>
        <span className={scss.countdownTimer__number}>
          {timeRemaining.days}
        </span>
        <span
          className={`${scss.countdownTimer__semi} ${scss.countdownTimer__number}`}
        >
          {formatTime(timeRemaining.hours)}
        </span>
        <span className={scss.countdownTimer__number}>
          {formatTime(timeRemaining.minutes)}
        </span>
      </div>
    </div>
  );
};

// Code Unused
