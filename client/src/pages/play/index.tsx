import { GetServerSideProps } from 'next';
import React from 'react';
import { getTextRequest } from '../../api/textService';
import PlayPage from '../../containers/PlayPage';
import MainLayout from '../../layouts/MainLayout';
import { Text } from '../../types/text';

export interface PlayProps {
  data: Text;
  words: Array<String>;
}

const Play = ({ data, words }: PlayProps) => {
  return <PlayPage data={data} words={words} />;
};

Play.getLayout = (page: React.ReactNode) => {
  return <MainLayout>{page}</MainLayout>;
};

export const getServerSideProps: GetServerSideProps = async () => {
  // const { data } = await getTextRequest();
  const data = {
    createdAt: '2020-01-01',
    updatedAt: '2020-01-01',
    text: 'random',
    id: 1,
  };
  const text = [
    'Whenever',
    "I'm",
    'alone',
    'with',
    'you,',
    'you',
    'make',
    'me',
    'feel',
    'like',
    'I',
    'am',
    'home',
    'again.',
    'Whenever',
    "I'm",
    'alone',
    'with',
    'you,',
    'you',
    'make',
    'me',
    'feel',
    'like',
    'I',
    'am',
    'whole',
    'again.',
  ];

  return {
    // props: { data, words: data.text.replace(/\n/g, " ").split(" ") },
    props: { data, words: text },
  };
};

export default Play;
