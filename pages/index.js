import Head from "next/head";
import styled from "styled-components";
import Carousel from "../components/Carousel/Carousel";
import { CarouselData } from "../components/Carousel/CarouselData";

const Wrapper = styled.div`
  color: var(--white);
  align-items: center;
  margin-top: 10vh;
  color: white;
  z-index: 1;
  background: rgba(0, 0, 0, 0.6);
`;

const CaruWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;
export default function Home() {
  return (
    <>
      <Head>
        <title>S Y G | Home</title>
      </Head>
      <Wrapper>
        <h1>Keep it simple</h1>
        <h1>Keep it decentralized</h1>

        <h2>
          Fully decentralized crowdfunding platform where all investors gets
          benefits
        </h2>
        <h2>NFT & Tokens</h2>
      </Wrapper>
      <h1>KARUZELA !</h1>
      <CaruWrapper>
        <Carousel title="Example projects" />
        <Carousel title="Example projects" />
      </CaruWrapper>
    </>
  );
}
