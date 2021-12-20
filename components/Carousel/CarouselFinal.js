import { useReducer } from "react";
import styled from "styled-components";
import { CarouselData } from "./CarouselData";

const SlidesWrapper = styled.div`
  background: white;
  display: grid;
  align-items: center;
  justify-content: ;
`;
const SlideWrapper = styled.div`
  width: 30vw;
  height: 35vw;
  border: 1px solid;
  background-size: cover;
  background-position: center center;
  grid-area: 1/-1;
  transform: translateX(calc(100% * var(--offset)));
  border-color: ${(props) => (props.active ? "red" : "")};
`;

const initialState = {
  slideIndex: 0,
};
const slidesReducer = (state, event) => {
  if (event.type === "NEXT") {
    return {
      ...state,
      slideIndex: (state.slideIndex + 1) % CarouselData.length,
    };
  }
  if (event.type === "PREV") {
    return {
      ...state,
      slideIndex:
        state.slideIndex === 0 ? CarouselData.length - 1 : state.slideIndex - 1,
    };
  }
};

const Slide = ({ slide, offset }) => {
  const active = offset === 0 ? true : null;
  return (
    <SlideWrapper
      active={active}
      style={{ "--offset": offset, backgroundImage: `url(${slide.image})` }}
    >
      {slide.title}
      {offset}
    </SlideWrapper>
  );
};

const CarouselFinal = () => {
  const [state, dispatch] = useReducer(slidesReducer, initialState);
  return (
    <SlidesWrapper>
      <button
        onClick={() => {
          dispatch({ type: "PREV" });
        }}
      >
        ‹
      </button>

      {[...CarouselData, ...CarouselData, ...CarouselData].map(
        (slide, index) => {
          let offset = CarouselData.length + (state.slideIndex - index);
          return <Slide slide={slide} offset={offset} key={index} />;
        }
      )}

      <button
        onClick={() => {
          dispatch({ type: "NEXT" });
        }}
      >
        ›
      </button>
    </SlidesWrapper>
  );
};

export default CarouselFinal;
