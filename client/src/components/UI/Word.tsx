import { CSS } from '@stitches/react/types/css-util';
import { FC } from 'react';
import { styled } from '../../styles/stiches.config';

interface WordProps {
  content: String | React.ReactNode;
  css: Partial<CSS>;
}

export const Word: FC<WordProps> = ({ content, ...other }) => {
  return <StyledWord {...other}>{content}</StyledWord>;
};

const StyledWord = styled('span', {
  margin: 0,
});
