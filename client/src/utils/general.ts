import { CSS } from '@stitches/react/types/css-util';
import { Word } from '../components/UI/Word';

export interface WordList {
  AFTER: JSX.Element[];
  BEFORE: JSX.Element[];
}

export type STYLE_TYPES = {
  SUCCESS: CSS;
  CURRENT: CSS;
  ERROR: CSS;
  DEFAULT: CSS;
};

export const STYLES: STYLE_TYPES = {
  SUCCESS: {
    color: 'rgb(76,175,80)',
  },
  CURRENT: {
    textDecoration: 'underline',
  },
  ERROR: {
    background: '#d08383',
    color: '#555',
  },
  DEFAULT: {
    color: 'black',
  },
};
