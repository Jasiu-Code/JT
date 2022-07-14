import Image from 'next/image';
import { useEffect, useReducer, useRef } from 'react';
import {
  Content,
  SlidesWrapper,
  SlideWrap,
  StyledDescription,
  StyledTitle,
  Wrapper,
} from './CarouselStyles';
import { goToApp } from '../Styles';
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
      el.style.setProperty('--px', px);
      el.style.setProperty('--py', py);
    };
    el.addEventListener('mousemove', handleMouseMove);
    return () => {
      el.removeEventListener('mousemove', handleMouseMove);
    };
  }, [active]);
  return ref;
};
const initialState = {
  slideIndex: 0,
};
const slidesReducer = (state, event) => {
  if (event.type === 'NEXT') {
    return {
      ...state,
      slideIndex: state.slideIndex === -3 ? 0 : state.slideIndex - 1,
    };
  }
  if (event.type === 'PREV') {
    return {
      ...state,
      slideIndex: (state.slideIndex + 1) % 4,
    };
  }
};

const Slide = ({ slide, offset }) => {
  const active = offset === 0 ? true : null;
  const ref = useTilt(active);
  return (
    <SlideWrap
      ref={ref}
      active={active}
      style={{
        '--offset': offset,
        '--dir': offset === 0 ? 0 : offset > 0 ? 1 : -1,
      }}
    >
      <Content active={active} onClick={goToApp}>
        <StyledTitle>
          <p>{slide.title}</p>
        </StyledTitle>
        <StyledDescription>
          <p>{slide.description}</p>
        </StyledDescription>
      </Content>
      <Image
        height='330px'
        width='250px'
        src={slide.image}
        alt='.'
        onClick={goToApp}
      />
    </SlideWrap>
  );
};

const Carousel = ({ data }) => {
  const [state, dispatch] = useReducer(slidesReducer, initialState);
  console.log({ data });
  return (
    <Wrapper
      onKeyDown={(event) => {
        if (event.key == 'ArrowLeft') {
          dispatch({ type: 'PREV' });
        }
        if (event.key == 'ArrowRight') {
          dispatch({ type: 'NEXT' });
        }
      }}
    >
      <SlidesWrapper>
        <button
          onClick={() => {
            dispatch({ type: 'PREV' });
          }}
        >
          ‹
        </button>
        {[...data, ...data, ...data].map((slide, index) => {
          let offset = data.length + (state.slideIndex - index);
          return <Slide slide={slide} offset={offset} key={index} />;
        })}
        <button
          onClick={() => {
            dispatch({ type: 'NEXT' });
          }}
        >
          ›
        </button>
      </SlidesWrapper>
    </Wrapper>
  );
};

export default Carousel;
