import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({theme}) => theme.colors.orange};
  z-index: 5;
`;

export const SlidesWrapper = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow:hidden;
  width:90vw;
  max-width:900px;
  button{
    appearance: none;
    background:transparent;
    border: none;
    color: ${({theme}) => theme.colors.white};
    position: absolute;
    font-size: 10rem;
    width: 30%;
    height: 100%;
    transition: opacity 0.3s;
    opacity: 0.5;
    z-index: 5;
    margin-left: auto;
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
      }}
`;

export const SlideWrap = styled.div`
  grid-area: 1/-1;
  border: solid 2px ${({theme}) => theme.colors.orange};
  box-shadow: 0 0 0.6rem ${({theme}) => theme.colors.orange};
  display: grid;
  align-items: center;
  transition: transform 0.4s ease-in-out;
  opacity: ${(props) => (props.active ? 1 : 0.7)};
  transform-style: preserve-3d;
  transform: perspective(1000px) 
  translateX(calc(350px*var(--offset)))  
  scale(calc(1 - (0.2*var(--offset)*var(--dir)))) 
  rotateY(calc(30deg * var(--offset))); 
    --x: calc(var(--px) - 0.5);
    --y: calc(var(--py) - 0.5);
   &:hover{
    transition: ${(props) => (props.active ? 'none' : '')};
    transform: ${(props) =>
      props.active
        ? 'rotateY(calc(var(--x) * 45deg)) rotateX(calc(var(--y) * -45deg))'
        : ''}
    }
`;

export const Content = styled.div`
  position: absolute;
  color: ${({theme}) => theme.colors.white};
  transform-style: preserve-3d;
  transform: translateZ(2rem);
  transition: opacity 0.3s linear;

  opacity: ${(props) => (props.active ? 1 : 0)};
  p {
    text-shadow: 1px 1px 1px black, 4px 4px 5px black;
  }
`;
export const StyledTitle = styled.div`
  font-size: 24px;
  font-weight: normal;
  letter-spacing: 0.2ch;
  text-transform: uppercase;
  margin: 10px;
  display: flex;
  font-weight: bold;
`;

export const StyledDescription = styled.div`
  margin: 10px;
  font-size: 12px;
  letter-spacing: 0.2ch;
  display: flex;
  font-weight: bold;
  text-align: left;
`;
