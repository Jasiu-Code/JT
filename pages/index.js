import Head from "next/head";
import styled from "styled-components";
import Carousel from "../components/Carousel/Carousel";
import { CarouselData } from "../components/Carousel/CarouselData";
import { CarouselData2 } from "../components/Carousel/CarouselData2";

const Wrapper = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  padding: 2rem;
  z-index: 5;
`;

const ContentWrapper = styled.div`
  color: var(--white);
  color: white;
  z-index: 1;
  font-size: clamp(20px, 50px, 1.3vw);
`;

const CaruWrapper = styled.div`
  ${"" /* display: flex; */}
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;
export default function Home() {
  return (
    <Wrapper>
      <Head>
        <title>S Y G | Home</title>
      </Head>
      <ContentWrapper>
        <h1>Keep it simple</h1>
        <h1>Keep it decentralized</h1>

        <h2>
          Fully decentralized crowdfunding platform
          <br /> where all investors gets benefits
        </h2>
        <h2>NFT & Tokens</h2>
      </ContentWrapper>
      <CaruWrapper>
        <Carousel title="Example projects" data={CarouselData} />
        {/* <Carousel title="Example projects2" data={CarouselData2} /> */}
      </CaruWrapper>
    </Wrapper>
  );
}
