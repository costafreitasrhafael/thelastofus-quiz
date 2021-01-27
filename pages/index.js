import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import { useRouter } from 'next/router';

import db from '../db.json';
import Input from '../src/components/Input';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import Button from '../src/components/Button';
import QuizLogo from '../src/components/QuizLogo';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');

  return (
    <>
      <Head>
        <title>Quiz The Last of US</title>
        <meta name="title" content="Quiz The Last of US" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://thelastofus-quiz.rhafaelcosta.vercel.app/" />
        <meta property="og:title" content="Quiz The Last of US" />
        <meta property="og:image" content={db.bg} />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://thelastofus-quiz.rhafaelcosta.vercel.app/" />
        <meta property="twitter:title" content="Quiz The Last of US" />
        <meta property="twitter:image" content={db.bg} />

      </Head>
      <QuizBackground backgroundImage={db.bg}>
        <QuizContainer>
          <QuizLogo />
          <Widget>
            <Widget.Header>
              <h1>{db.title}</h1>
            </Widget.Header>
            <Widget.Content>
              {/* eslint-disable-next-line func-names */}
              <form onSubmit={function (infosDoEvento) {
                infosDoEvento.preventDefault();
                router.push(`/quiz?name=${name}`);
                // eslint-disable-next-line no-console
                console.log('Fazendo uma submissão por meio do react');
              }}
              >
                <Input
                  onChange={(event) => {
                    setName(event.target.value);
                  }}
                  placeholder="Digite seu nome"
                />
                <Button type="submit" disabled={name.length === 0}>
                  Jogar
                  { name }
                </Button>
              </form>
            </Widget.Content>
          </Widget>

          <Widget>
            <Widget.Header>
              <h1>Quiz dos brothers</h1>
            </Widget.Header>
            <Widget.Content>
              <ul>
                <li><a href="https://quiz-cavaleiro-zodiaco.vercel.app/">Cavaleiro do Zoodiaco</a></li>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                <li><a href="https://imersao-react-next-js-seven.vercel.app/">Assassin's Creed</a></li>
                <li><a href="https://one-piece-quiz.cassiofb-dev.vercel.app/">One Piece</a></li>
                <li><a href="https://brunoquiz.brunosaibert.vercel.app/">Harry Potter</a></li>
              </ul>
            </Widget.Content>
          </Widget>
          <Footer />
        </QuizContainer>
        <GitHubCorner projectUrl="https://github.com/costafreitasrhafael" />
      </QuizBackground>
    </>
  );
}
