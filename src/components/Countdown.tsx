import { useState, useEffect, useCallback } from 'react';

const Countdown = ({ targetDate }: { targetDate: Date }) => {
  const calculateTimeLeft = useCallback(() => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }, [targetDate]);

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [calculateTimeLeft]);

  return (
    <div className="flex text-xl space-x-4">
      <div className="text-center">
        <div className="text-4xl font-extralight">{timeLeft.days}{" "}:</div>
        <div className="text-lg font-Font-1">Días</div>
      </div>
      <div className="text-center">
        <div className="text-4xl font-extralight">{timeLeft.hours}{" "}:</div>
        <div className="text-lg font-Font-1">Horas</div>
      </div>
      <div className="text-center">
        <div className="text-4xl font-extralight">{timeLeft.minutes}{" "}:</div>
        <div className="text-lg font-Font-1">Min</div>
      </div>
      <div className="text-center">
        <div className="text-4xl font-extralight">{timeLeft.seconds}</div>
        <div className="text-lg font-Font-1">Seg</div>
      </div>
    </div>
  );
};

export default Countdown;
