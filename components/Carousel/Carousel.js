import Image from "next/image";
import { useEffect, useReducer, useRef } from "react";
import { CarouselData } from "./CarouselData";
import {
  Content,
  SlidesWrapper,
  SlideWrap,
  StyledDescription,
  StyledSubtitle,
  StyledTitle,
  Wrapper,
} from "./CarouselStyles";

const useTilt = (active) => {
  const ref = useRef(null);
  useEffect(() => {
    if (!ref.current || !active) {
      return;
    }
    const state = {
      rect: undefined,
      mouseX: undefined,
      mouseY: undefined,
    };
    let el = ref.current;
    const handleMouseMove = (e) => {
      if (!el) {
        return;
      }
      if (!state.rect) {
        state.rect = el.getBoundingClientRect();
      }
      state.mouseX = e.clientX;
      state.mouseY = e.clientY;
      const px = (state.mouseX - state.rect.left) / state.rect.width;
      const py = (state.mouseY - state.rect.top) / state.rect.height;
      el.style.setProperty("--px", px);
      el.style.setProperty("--py", py);
    };
    el.addEventListener("mousemove", handleMouseMove);
    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
    };
  }, [active]);

  return ref;
};

const initialState = {
  slideIndex: 0,
};
const slidesReducer = (state, event) => {
  if (event.type === "NEXT") {
    console.log("next");
    return {
      ...state,
      slideIndex: (state.slideIndex + 1) % CarouselData.length,
    };
  }
  if (event.type === "PREV") {
    console.log("prev");
    return {
      ...state,
      slideIndex:
        state.slideIndex === 0 ? CarouselData.length - 1 : state.slideIndex - 1,
    };
  }
};

const Slide = ({ slide, offset, index }) => {
  const active = offset === 0 ? true : null;
  const ref = useTilt(active);
  return (
    <SlideWrap
      ref={ref}
      active={active}
      style={{
        "--offset": offset,
        "--dir": offset === 0 ? 0 : offset > 0 ? 1 : -1,
      }}
    >
      <Content active={active}>
        <StyledTitle>
          <p>{slide.title}</p>
        </StyledTitle>
        <StyledSubtitle>
          <p>{slide.subtitle}</p>
        </StyledSubtitle>
        <StyledDescription>
          <p>{slide.description}</p>
        </StyledDescription>
      </Content>
      <Image height="400px" width="300px" src={slide.image} alt="." />
    </SlideWrap>
  );
};

const KeyDown = () => {};

const Carousel = (props) => {
  const [state, dispatch] = useReducer(slidesReducer, initialState);
  return (
    <Wrapper
      onKeyDown={(event) => {
        if (event.key == "ArrowLeft") {
          dispatch({ type: "NEXT" });
        }
        if (event.key == "ArrowRight") {
          dispatch({ type: "PREV" });
        }
      }}
    >
      <h1>{props.title}</h1>
      <SlidesWrapper>
        <button
          onClick={() => {
            dispatch({ type: "NEXT" });
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
            dispatch({ type: "PREV" });
          }}
        >
          ›
        </button>
      </SlidesWrapper>
    </Wrapper>
  );
};

export default Carousel;
