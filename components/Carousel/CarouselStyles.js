import styled from "styled-components";

export const Wrapper = styled.div`
  color: var(--white);
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  margin-top: auto;
  h1 {
    margin-bottom: 20px;
    background: rgba(0, 0, 0, 0.1);
  }
`;

export const SlidesWrapper = styled.div`
  position: relative;
  display: grid;
  overflow:hidden;
  align-items: center;
  justify-content: center;
  width:90vw;
  button {
    appearance: none;
    background:transparent;
    border: none;
    color: var(--white);
    position: absolute;
    font-size: 15rem;
    width: 40%;
    height: 100%;
    transition: opacity 0.3s;
    opacity: 0.7;
    z-index: 5;
    &:hover {
      opacity: 1;
    }
    &:focus {
      outline: none;
    }
    &:first-child {
      left: 0;
    }
    &:last-child {
      right: 0;
  }
`;

export const SlideWrap = styled.div`
  grid-area: 1/-1;
  border: solid 2px black;
  display: grid;
  align-items: center;
  transition: transform 0.5s ease-in-out;
  opacity: ${(props) => (props.active ? 1 : 0.7)};
  transform-style: preserve-3d;
  transform: perspective(1000px) translateX(calc(120% * var(--offset)))
    rotateY(calc(-45deg * var(--dir))) ;
    --x: calc(var(--px) - 0.5);
    --y: calc(var(--py) - 0.5);
    
   &:hover{
    transition: ${(props) => (props.active ? "none" : "")};
    transform: ${(props) =>
      props.active
        ? "rotateY(calc(var(--x) * 45deg)) rotateX(calc(var(--y) * -45deg))"
        : ""}
      
    }
    }
   }
}


`;

export const Content = styled.div`
  position: absolute;
  color: white;
  transform-style: preserve-3d;
  transform: translateZ(2rem);
  transition: opacity 0.3s linear;
  text-shadow: 0 0.1rem 1rem #000;
  opacity: 0.5;
  opacity: ${(props) => (props.active ? 1 : 0)};
`;
export const StyledTitle = styled.div`
  font-size: 2rem;
  font-weight: normal;
  letter-spacing: 0.2ch;
  text-transform: uppercase;
  margin: 0;
`;
export const StyledSubtitle = styled.div`
  font-size: 2rem;
  font-weight: normal;
  letter-spacing: 0.2ch;
  text-transform: uppercase;
  margin: 0;
  &::before {
    content: "-";
  }
`;
export const StyledDescription = styled.div`
  margin: 0;
  font-size: 0.8rem;
  letter-spacing: 0.2ch;
`;
