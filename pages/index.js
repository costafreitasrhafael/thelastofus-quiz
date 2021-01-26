import styled from 'styled-components'
import Head from 'next/head'

import db from '../db.json';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer'
import QuizLogo from '../src/components/QuizLogo'
import GitHubCorner from '../src/components/GitHubCorner'
import QuizBackground from '../src/components/QuizBackground'

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
  return (
    <>
      <Head>
        <title>Quiz The Last of US</title>
        <meta name="title" content="Quiz The Last of US" />

        {/* Open Graph / Facebook */}
        <meta property="og:type"  content="website" />
        <meta property="og:url"   content="https://thelastofus-quiz.rhafaelcosta.vercel.app/" />
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
              <p>{db.description}</p>
            </Widget.Content>
          </Widget>

          <Widget>
            <Widget.Content>
              <h1>Quizes da Galera</h1>
              <p>lorem ipsum dolor sit amet...</p>
            </Widget.Content>
          </Widget>
          <Footer />
        </QuizContainer>
        <GitHubCorner projectUrl="https://github.com/costafreitasrhafael" />
      </QuizBackground>
    </>
  )
}
