import Head from 'next/head';

import {
  MainWrapper,
  TextWrapper,
  StyledTitle,
  StyledList,
  StyledHeader,
  Done,
  OnGoing,
} from '../components/Styles';

const Roadmap = () => {
  return (
    <>
      <Head>
        <title>Just Time | Roadmap</title>
      </Head>
      <MainWrapper>
        <TextWrapper>
          <StyledTitle>Roadmap</StyledTitle>
          <StyledHeader>2022</StyledHeader>
          <StyledList>
            <Done>Setting up project</Done>
            <Done>Website Launch</Done>
            <Done>Build test smart contract</Done>
            <Done>Build MVP </Done>
            <OnGoing>Testnet V1.0 Launch</OnGoing>
            <OnGoing>Public round</OnGoing>
            <OnGoing>Testnet V2.0 Launch</OnGoing>
          </StyledList>
          <StyledHeader>2023</StyledHeader>
          <StyledList>
            <OnGoing>Start social medias </OnGoing>
            <OnGoing>Whitepaper Release</OnGoing>
            <OnGoing>Offical testnet launch</OnGoing>
            <OnGoing>Promotion & Marketing</OnGoing>
            <OnGoing>Public offering</OnGoing>
            <OnGoing>DEX listing</OnGoing>
            <OnGoing>Smart contract audit</OnGoing>
            <OnGoing>Mobile App</OnGoing>
          </StyledList>
        </TextWrapper>
      </MainWrapper>
    </>
  );
};

export default Roadmap;
