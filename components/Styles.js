import styled from "styled-components";
import { motion } from "framer-motion";

export const MotionDiv = styled(motion.div)`
  z-index: 3;
`;

export const MainWrapper = styled.div`
  user-select: none; /* supported by Chrome and Opera */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  flex: 1;
  align-self: flex-start;
  height: calc(100vh - 95px);
  margin-top: 70px;
  margin-bottom: 25px;
  overflow-y: scroll;
  width: 100%;
  scroll-snap-type: y mandatory;
  text-align: center;
  z-index: 5;
  @media screen and (max-width: 768px) {
    height: calc(100vh - 185px);
    margin-bottom: 115px;
  }
`;
export const SectionWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  scroll-snap-align: start;
  max-height: 100%;
  min-height: 100%;
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
  font-size: ${({ theme }) => theme.fontSize.extraLarge};
  font-weight: 900;
`;
export const StyledText = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.large};
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
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;
export const StyledButton = styled.button`
  font-size: ${({ theme }) => theme.fontSize.large};
  padding: 5px 10px;
  border-radius: 20px;
  /* margin-top: 100px; */
  border: 5px solid ${({ theme }) => theme.colors.orange};
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
    content: "✅";
    display: inline-block;
    self-align: center;
  }
`;
export const OnGoing = styled.li`
  ::before {
    content: "🔄";
    display: inline-block;
    margin-left: 1rem;
  }
`;
export const TextWrapper = styled.div`
  max-width: 960px;
  margin: 0 auto;
  height: 100%;
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;
export const StyledList = styled.ul`
  height: 100%;
  display: flex;
  font-size: ${({ theme }) => theme.fontSize.medium};
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
  list-style: none;
  margin: 0 auto;
`;

export const StyledHeader = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.large};
  border-bottom: solid 2px ${({ theme }) => theme.colors.orange};
`;
export const StyledTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.extraLarge};
  margin: 20px 0;
`;

export const WhitepaperWrapper = styled.div`
  background: ${({ theme }) => theme.colors.white};
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
  background: ${({ theme }) => theme.colors.white};
  max-width: 960px;
  margin: 0 auto;
  height: 100%;
  overflow: scroll;
`;
export const NotFoundWrapper = styled.div`
  color: ${({ theme }) => theme.colors.white};
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const goToApp = () => {
  window.open("https://jt-marketplace.vercel.app/");
};
