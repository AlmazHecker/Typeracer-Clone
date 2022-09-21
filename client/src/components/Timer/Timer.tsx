import React, { FC, useEffect, useState } from "react";
import { styled } from "../../styles/stiches.config";

interface TimerProps {
  onTimeEnd: () => void;
}

const Timer: FC<TimerProps> = ({ onTimeEnd }) => {
  const [time, setTime] = useState({ seconds: 0, minutes: 1 });

  useEffect(() => {
    const timer: any = setTimeout(() => {
      if (time.seconds === 0 && time.minutes !== 0) {
        return setTime({ ...time, seconds: 59, minutes: time.minutes - 1 });
      }
      if (time.seconds !== 0) {
        return setTime({ ...time, seconds: time.seconds - 1 });
      }
      if (time.seconds === 0 && time.minutes === 0) {
        onTimeEnd();
        return clearTimeout(timer);
      }
      return null;
    }, 1000);
    return () => clearTimeout(timer);
  }, [time, onTimeEnd]);

  return (
    <Container>
      Go, Go! {time.minutes.toString().length === 1 && 0}
      {time.minutes}:{time.seconds.toString().length === 1 && 0}
      {time.seconds}
    </Container>
  );
};

export default Timer;

const Container = styled("div", {
  fontSize: "30px",
  marginTop: "90px",
});
