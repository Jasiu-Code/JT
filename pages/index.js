import Head from "next/head";
import styled from "styled-components";
import Template from "../components/Template";

const Wrapper = styled.div`
  color: var(--light);
  align-items: center;
  margin-top: 10vh;
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>S Y G | Home</title>
      </Head>
      <Template>
        <Wrapper>
          <h1>Keep it simple</h1>
          <h1>Keep it decentralized</h1>

          <h2>
            {" "}
            Fully decentralized crowdfunding platform where all investors gets
            benefits
          </h2>
          <h2>NFT & Tokens</h2>
        </Wrapper>
      </Template>
    </>
  );
}
