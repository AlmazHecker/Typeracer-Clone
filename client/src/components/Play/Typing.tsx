import Link from 'next/link';
import React, {
  ChangeEvent,
  FC,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { PlayProps } from '../../pages/play';
import { styled } from '../../styles/stiches.config';
import { STYLES, WordList } from '../../utils/general';
import Button from '../UI/Button';
import Input from '../UI/Input';
import { Title } from '../UI/Title';
import { Word } from '../UI/Word';

interface InputProps extends ChangeEvent<HTMLInputElement> {
  nativeEvent: InputEvent;
}

interface TypingProps extends PlayProps {
  isSubmit: boolean;
  onSubmit: (data: Array<String>) => void;
}

const Typing: FC<TypingProps> = ({ data, words, isSubmit, onSubmit }) => {
  const inputRef = useRef<any>({ style: { background: '' } });
  const [index, setIndex] = useState(0);
  const [inputValue, setInputValue] = useState('');

  const listOfWords = useMemo(() => {
    const wordList: WordList = {
      BEFORE: [],
      AFTER: [],
    };

    words.map((word, i) => {
      if (index < i) {
        wordList.AFTER.push(
          <Word key={i} css={STYLES.DEFAULT} content={word} />
        );
      }
      if (index > i) {
        wordList.BEFORE.push(
          <Word key={i} css={STYLES.SUCCESS} content={word} />
        );
      }
    });

    return wordList;
  }, [index, words]);

  const currentWord = () => {
    let hasError = false;
    const Input = inputRef.current;

    Input.style.background = '';

    if (inputValue.length > words[index].length) {
      Input.style.background = '#d08383';
    }

    let shortValue = inputValue.slice(words[index].length);
    if (shortValue.length > 10) shortValue = shortValue.slice(0, 10);

    const currentTextWord = `${words[index]}${shortValue}`;

    return currentTextWord.split('').map((letter, i) => {
      let color = STYLES.DEFAULT;

      if (inputValue[i]) {
        color = STYLES.SUCCESS;
        if (i < words[index].length && inputValue[i] !== letter) {
          color = STYLES.ERROR;

          Input.style.background = '#d08383';

          hasError = true;
        }
        if (
          words[index].length < currentTextWord.length &&
          i + 1 > words[index].length
        ) {
          color = STYLES.ERROR;

          Input.style.background = '#d08383';

          hasError = true;
        }
        if (hasError) color = STYLES.ERROR;
      }

      return (
        <Letter key={i} css={color}>
          {letter}
        </Letter>
      );
    });
  };

  const handleInputChange = ({
    target: { value },
    nativeEvent: { data },
  }: InputProps) => {
    // if user prints whitespace it will check
    if (data === ' ' && value.trim() === words[index]) {
      if (!words[index + 1]) {
        return onSubmit(words);
      }

      setIndex(index + 1);
      return setInputValue('');
    }

    if (index + 1 === words.length && value.trim() === words[index]) {
      return onSubmit(words);
    }

    setInputValue(value);
  };

  useEffect(() => {
    if (isSubmit) {
      onSubmit(words.slice(0, index));
    }
  }, [isSubmit, index, onSubmit, words]);

  return (
    <Container>
      <Header>
        <Title>Practice Racetrack. Go!</Title>
        <FixText>
          <Description>Нашли опечатку ? </Description>
          <Link href={`/update-text/${data.id}`}>Исправить</Link>
        </FixText>
      </Header>
      <Indicator
        css={{
          width: `${Math.round(
            (listOfWords.BEFORE.length / (words.length - 1)) * 100
          )}%`,
        }}
      />
      <WordsContainer>
        <WordsWrapper>
          {listOfWords.BEFORE}

          <Word content={currentWord()} css={STYLES.CURRENT} />

          {listOfWords.AFTER}
        </WordsWrapper>
      </WordsContainer>

      <Input
        ref={inputRef}
        autoFocus
        onChange={handleInputChange}
        value={inputValue}
      />
    </Container>
  );
};

export default React.memo(Typing);

const Container = styled('div', {});

const WordsContainer = styled('div', {
  background: 'rgb(246,251,255)',
  borderRadius: '6px',
  padding: '10px',
  marginBottom: '40px',
});

const WordsWrapper = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '3px',

  fontFamily: '$Roboto',
  fontSize: '$4',
  color: 'black',
});

const Letter = styled('span', {});

const Description = styled('p', {
  fontFamily: '$Roboto',
});

const Header = styled('header', {
  display: 'flex',

  alignItems: 'center',
  justifyContent: 'space-between',
});

const FixText = styled('div', {
  display: 'flex',
  alignItems: 'center',
  fontFamily: '$Roboto',
  gap: '5px',
  a: {
    color: 'rgb(77,185,243)',
  },
  'a:hover': {
    textDecoration: 'underline',
  },
});

const Indicator = styled('div', {
  height: '20px',
  backgroundColor: 'red',
  transition: 'all 0.4s linear',
});
