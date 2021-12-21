import Head from "next/head";
import styled from "styled-components";
const Wrapper = styled.div`
  color: var(--light);
`;
const About = () => {
  return (
    <>
      <Head>
        <title>S Y G | About</title>
      </Head>

      <Wrapper>
        <h1>About</h1>
      </Wrapper>
    </>
  );
};

export default About;
