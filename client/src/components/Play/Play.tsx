import { useRouter } from 'next/router';
import React, { FC, useCallback, useState } from 'react';
import { PlayProps } from '../../pages/play';
import { styled } from '../../styles/stiches.config';
import useTimer, { Time } from '../../utils/hooks/useTimer';
import Typing from './Typing';

const Play: FC<PlayProps> = ({ data, words }) => {
  const router = useRouter();
  const [isSubmit, setIsSubmit] = useState(false);

  const onTimeEnd = (time: Time) => {
    setIsSubmit(true);
  };
  const time = useTimer({ onTimeEnd, initialTime: { seconds: 0, minutes: 1 } });

  const handleSubmit = useCallback((data: Array<String>) => {
    alert(
      `OMG you typed ${data.length} words per ${
        60 - (Math.round(time.minutes * 60) + time.seconds)
      } seconds !!`
    );
    router.push('/main');
  }, []);

  return (
    <Container>
      <TimeContainer>
        Go, Go! {time.minutes.toString().length === 1 && 0}
        {time.minutes}:{time.seconds.toString().length === 1 && 0}
        {time.seconds}
      </TimeContainer>

      <Typing
        data={data}
        words={words}
        isSubmit={isSubmit}
        onSubmit={handleSubmit}
      />
    </Container>
  );
};

export default Play;

const Container = styled('div', {});

const TimeContainer = styled('div', {
  fontSize: '30px',
  fontFamily: '$Roboto',
});
