import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  transform-style: preserve-3d;
  animation: rotate 10s linear infinite;

  @keyframes rotate {
    0% {
      transform: perspective(1000px) rotateY(0deg);
    }
    100% {
      transform: perspective(1000px) rotateY(360deg);
    }
  }
`;

const Item = styled.div`
  background: white;
  width: 320px;
  height: 480px;
  position: absolute;
  top: 0;
  left: 0;
  transform-origin: center;
  transform-style: preserve-3d;
`;

const Item1 = styled(Item)`
  background: red;
  transform: rotateY(120deg);
`;
const Item2 = styled(Item)`
  background: blue;
  transform: rotateY(240deg);
`;
const Item3 = styled(Item)`
  background: green;
`;
const Item4 = styled(Item)`
  background: orange;
`;

const Carousel = () => {
  return (
    <Wrapper>
      <Item1>Coś 1</Item1>
      <Item2>Coś 2</Item2>
      <Item3>Coś 3</Item3>
    </Wrapper>
  );
};

export default Carousel;
