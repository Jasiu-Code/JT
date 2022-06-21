import Head from 'next/head';
import Carousel from '../components/Carousel/Carousel';
import { CarouselData } from '../components/Carousel/CarouselData';
import Clock from '../components/Clock/Clock';
import ClockSmall from '../components/Clock/ClockSmall';
import {
  MainWrapper,
  SectionWrapper,
  SectionWrapper2,
  StyledQuote,
  StyledText,
  StyledButton,
  goToApp,
} from '../components/Styles';

export default function Home() {
  return (
    <MainWrapper>
      <Head>
        <title>Just Time | Home</title>
        <link rel='icon' href='/Logo.png' />
      </Head>
      <SectionWrapper>
        <StyledQuote>
          Time is not returnable
          <br /> nor refundable. <br />
        </StyledQuote>
        <Clock />
        <ClockSmall />
        <StyledQuote>
          But is tradeable, <br />
          before it comes.
        </StyledQuote>
        <StyledButton onClick={goToApp}>TRADE NOW</StyledButton>
      </SectionWrapper>
      <SectionWrapper2>
        <StyledText>
          At JTT we believe that there is a way to balance
          <br /> demand and supply of time-based services <br />
          in a way that is mutually beneficial
          <br /> for customers and vendors.
        </StyledText>
        <Carousel title='' data={CarouselData} />
      </SectionWrapper2>
    </MainWrapper>
  );
}
