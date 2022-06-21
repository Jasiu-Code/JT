import styled from 'styled-components';

export const MainWrapper = styled.div`
  animation: page-load 0.3s ease-in;
  animation-fill-mode: forwards;
  height: calc(100vh - 70px);
  margin-top: 70px;
  overflow-y: scroll;
  width: 100%;
  scroll-snap-type: y mandatory;
  text-align: center;
  z-index: 5;
  transform: translateX(-100%);
  @keyframes page-load {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(0%);
    }
  }
  @media screen and (max-width: 768px) {
    max-height: calc(100vh - 140px);
  }
`;
export const SectionWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  padding: 20px;
  scroll-snap-align: start;
  @media screen and (max-width: 768px) {
    max-height: calc(100vh - 140px);
  }
`;
export const SectionWrapper2 = styled(SectionWrapper)`
  justify-content: space-evenly;
`;
export const StyledQuote = styled.h1`
  background-color: #f35b04;
  background-image: linear-gradient(
    45deg,
    #fcfffc 20%,
    #f35b04 30%,
    #fcfffc 70%,
    #f35b04 80%
  );
  background-size: 100%;
  background-repeat: repeat;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: rainbow-text-simple-animation-rev 0.75s ease forwards;
  &:hover {
    animation: rainbow-text-simple-animation 0.5s ease-in forwards;
  }
  @keyframes rainbow-text-simple-animation-rev {
    0% {
      background-size: 650%;
    }
    40% {
      background-size: 650%;
    }
    100% {
      background-size: 100%;
    }
  }
  @keyframes rainbow-text-simple-animation {
    0% {
      background-size: 100%;
    }
    80% {
      background-size: 650%;
    }
    100% {
      background-size: 650%;
    }
  }

  z-index: 3;
  position: relative;
  text-align: center;
  text-transform: uppercase;
  font-size: clamp(32px, calc(8px + 5vw), 72px);
  font-weight: 900;
`;
export const StyledText = styled.h2`
  font-size: clamp(16px, calc(6px + 3vw), 48px);
  padding: 10px;
  border-radius: 15px;
  position: relative;
  text-align: center;
  background-color: #f35b04;
  background-image: linear-gradient(
    45deg,
    #fcfffc 20%,
    #f35b04 30%,
    #fcfffc 70%,
    #f35b04 80%
  );
  background-size: 100%;
  background-repeat: repeat;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: rainbow-text-simple-animation-rev 0.75s ease forwards;
  &:hover {
    animation: rainbow-text-simple-animation 0.5s ease-in forwards;
  }
  @keyframes rainbow-text-simple-animation-rev {
    0% {
      background-size: 650%;
    }
    40% {
      background-size: 650%;
    }
    100% {
      background-size: 100%;
    }
  }
  @keyframes rainbow-text-simple-animation {
    0% {
      background-size: 100%;
    }
    80% {
      background-size: 650%;
    }
    100% {
      background-size: 650%;
    }
  }
`;
export const StyledButton = styled.button`
  font-size: clamp(22px, calc(8px + 3vw), 52px);
  padding: 5px 10px;
  border-radius: 20px;

  margin-top: 100px;
  border: 5px solid var(--orange);
  background-color: #f35b04;
  background-image: linear-gradient(
    45deg,
    #fcfffc 20%,
    #f35b04 30%,
    #fcfffc 70%,
    #f35b04 80%
  );
  background-size: 100%;
  background-repeat: repeat;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: rainbow-text-simple-animation-rev 0.75s ease forwards;
  &:hover {
    animation: rainbow-text-simple-animation 0.5s ease-in forwards;
  }
  @keyframes rainbow-text-simple-animation-rev {
    0% {
      background-size: 650%;
    }
    40% {
      background-size: 650%;
    }
    100% {
      background-size: 100%;
    }
  }
  @keyframes rainbow-text-simple-animation {
    0% {
      background-size: 100%;
    }
    80% {
      background-size: 650%;
    }
    100% {
      background-size: 650%;
    }
  }
`;

export const Done = styled.li`
  ::before {
    content: '✅';
    display: inline-block;
    self-align: center;
  }
`;
export const OnGoing = styled.li`
  ::before {
    content: '🔄';
    display: inline-block;
    margin-left: 1rem;
  }
`;
export const TextWrapper = styled.div`
  max-width: 960px;
  margin: 0 auto;
  height: 100%;
  color: var(--white);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;
export const StyledList = styled.ul`
  height: 100%;
  display: flex;
  font-size: clamp(16px, calc(6px + 2vw), 22px);
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
  list-style: none;
  margin: 0 auto;
`;

export const StyledHeader = styled.h2`
  font-size: clamp(20px, calc(10px + 2vw), 40px);
  border-bottom: solid 2px var(--orange);
`;
export const StyledTitle = styled.h1`
  font-size: clamp(24px, calc(16px + 4vw), 72px);
  margin: 20px 0;
`;

export const WhitepaperWrapper = styled.div`
  background: var(--white);
  max-width: 960px;
  margin: 0 auto;
  height: 100%;
  padding: 20px;
  overflow: scroll;
  p {
    text-align: left;
    padding: 10px 0px;
  }
  h2 {
    padding: 20px 0px;
  }
`;
export const AboutWrapper = styled.div`
  background: var(--white);
  max-width: 960px;
  margin: 0 auto;
  height: 100%;
  overflow: scroll;
`;
export const NotFoundWrapper = styled.div`
  color: var(--white);
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const goToApp = () => {
  window.open('https://www.google.com');
};
