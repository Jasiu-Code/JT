import Head from "next/head";
import styled from "styled-components";
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
      <Wrapper>
        <h1>Roadmap</h1>
        <StyledYear>2021</StyledYear>
        <ul>
          <Done>Setting up project</Done>
          <Done>Website Launch</Done>
          <Done>Build test smart contract</Done>
          <Done>Build MVP </Done>
          <li> s</li>
          <li>Testnet V1.0 Launch</li>
          <li> Vc</li>
          <li>private inwestors</li>
          <li>Testnet V2.0 Launch</li>
        </ul>
        <StyledYear>2022</StyledYear>
        <ul>
          <li>Start social medias </li>
          <li> Whitepaper Release</li>
          <li>Looking for funding</li>
          <li>Offical testnet launch</li>
          <li>Promotion & Marketing</li>
          <li>Public offering</li>
          <li>Plans for 2023</li>
          <li>DEX listing</li>
          <li>Smart contract audit</li>
          <li>Mobile App</li>
          <li>Plans for 2023</li>
        </ul>
      </Wrapper>
    </>
  );
};

export default Roadmap;
