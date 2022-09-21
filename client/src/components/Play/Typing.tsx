import { CSS } from "@stitches/react/types/css-util";
import React, {
  ChangeEvent,
  FC,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { PlayProps } from "../../pages/play";
import { styled } from "../../styles/stiches.config";
import { STYLES, WordList } from "../../utils/general";
import Input from "../UI/Input";
import { Title } from "../UI/Title";
import { Word } from "../UI/Word";

interface InputProps extends ChangeEvent<HTMLInputElement> {
  nativeEvent: InputEvent;
}

interface TypingProps extends PlayProps {
  isSubmit: boolean;
  onSubmit: (data: Array<String>) => void;
}

const Typing: FC<TypingProps> = ({ words, isSubmit, onSubmit }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [index, setIndex] = useState(0);
  const [inputValue, setInputValue] = useState("");

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

  console.log("hello");

  const currentWord = () => {
    let hasError = false;
    if (inputRef.current) {
      inputRef.current.style.background = "";
    }

    return words[index].split("").map((letter, i) => {
      let color = STYLES.DEFAULT;

      if (inputValue[i]) {
        if (inputValue[i] === letter) color = STYLES.SUCCESS;
        if (inputValue[i] !== letter) {
          color = STYLES.ERROR;
          if (inputRef.current) {
            inputRef.current.style.background = "#d08383";
          }
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
    if (data === " " && value.trim() === words[index]) {
      if (!words[index + 1]) {
        return onSubmit(words);
      }

      setIndex(index + 1);
      return setInputValue("");
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
      <Title>Practice Racetrack. Go!</Title>
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

const Container = styled("div", {});

const WordsContainer = styled("div", {
  background: "rgb(246,251,255)",
  borderRadius: "6px",
  padding: "10px",
  marginBottom: "40px",
});

const WordsWrapper = styled("div", {
  display: "flex",
  flexWrap: "wrap",
  gap: "3px",

  fontFamily: "$Roboto",
  fontSize: "$4",
  color: "black",
});

const Letter = styled("span", {});
