import Head from 'next/head';
import { MainWrapper, AboutWrapper, StyledTitle } from '../components/Styles';

const About = () => {
  return (
    <>
      <Head>
        <title>Just Time | About</title>
      </Head>
      <MainWrapper>
        <AboutWrapper>
          <StyledTitle>About</StyledTitle>
        </AboutWrapper>
      </MainWrapper>
    </>
  );
};

export default About;
