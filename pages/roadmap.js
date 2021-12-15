import Head from "next/head";
import styled from "styled-components";
import Template from "../components/Template";
const Wrapper = styled.div`
  color: var(--light);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ul {
    list-style: none;
  }
`;

const Done = styled.li`
  ::after {
    content: "✅";
    display: inline-block;
    margin-left: 2rem;
  }
`;

const StyledYear = styled.h2`
  width: 80vw;
  display: flex;
  justify-content: center;
  border-bottom: solid 2px var(--light);
  margin-top: 2em;
`;

const Roadmap = () => {
  return (
    <>
      <Head>
        <title>S Y G | Roadmap</title>
      </Head>
      <Template>
        <Wrapper>
          <h1>Roadmap</h1>
          <StyledYear>2021</StyledYear>
          <ul>
            <Done>Project plannings</Done>
            <li>Building Team</li>
            <li>Website Launch</li>
            <li>Website Launch</li>
            <li>Website Launch</li>
            <li>Whitepaper Release</li>
            <li>Testnet V1.0 Launch</li>
            <li> Vc</li>
            <li>private inwestors</li>
            <li>Testnet V2.0 Launch</li>
          </ul>
          <StyledYear>2022</StyledYear>
          <ul>
            <li>Security Audit</li>
            <li>PRoject </li>
            <li>cos3</li>
            <li>cos3</li>
            <li>cos3</li>
            <li>cos3</li>
          </ul>
        </Wrapper>
      </Template>
    </>
  );
};

export default Roadmap;
