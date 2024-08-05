import { useState, useEffect } from "react";

const Countdown = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const target = new Date("12/12/2025 23:59:59");

    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d);

      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHours(h);

      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m);

      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(s);

      return () => clearInterval(interval);
    }, 1000);
  }, []);

  return (
    <div className="mt-10">
      <div className="flex">
        <div className="flex flex-col text-center mr-8">
          <span className="text-white-500 font-medium text-4xl">{days}</span>
          <span className="text-green-success font-medium text-3xl">days</span>
        </div>
        <div className="flex flex-col text-center mr-8">
          <span className="text-white-500 font-medium text-4xl">{hours}</span>
          <span className="text-green-success font-medium text-3xl">hours</span>
        </div>
        <div className="flex flex-col text-center mr-8">
          <span className="text-white-500 font-medium text-4xl">{minutes}</span>
          <span className="text-green-success font-medium text-3xl">minutes</span>
        </div>
        <div className="flex flex-col text-center">
          <span className="text-white-500 font-medium text-4xl">{seconds}</span>
          <span className="text-green-success font-medium text-3xl">seconds</span>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
