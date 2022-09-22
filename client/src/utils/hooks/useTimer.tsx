import { useEffect, useState } from "react";

interface TimerProps {
  onTimeEnd: (time: Time) => void;
  initialTime: Time;
}

export interface Time {
  seconds: number;
  minutes: number;
}

const useTimer = ({ onTimeEnd, initialTime }: TimerProps) => {
  const [time, setTime] = useState<Time>(initialTime);

  useEffect(() => {
    const timer: any = setTimeout(() => {
      if (time.seconds === 0 && time.minutes !== 0) {
        return setTime({ ...time, seconds: 59, minutes: time.minutes - 1 });
      }
      if (time.seconds !== 0) {
        return setTime({ ...time, seconds: time.seconds - 1 });
      }
      if (time.seconds === 0 && time.minutes === 0) {
        onTimeEnd(time);
        return clearTimeout(timer);
      }
      return null;
    }, 1000);
    return () => clearTimeout(timer);
  }, [time, onTimeEnd]);

  return time;
};

export default useTimer;
