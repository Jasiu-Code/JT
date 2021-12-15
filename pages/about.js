import Head from "next/head";
import styled from "styled-components";
import Template from "../components/Template";
const Wrapper = styled.div`
  color: var(--light);
`;
const About = () => {
  return (
    <>
      <Head>
        <title>S Y G | About</title>
      </Head>
      <Template>
        <Wrapper>
          <h1>About</h1>
        </Wrapper>
      </Template>
    </>
  );
};

export default About;
