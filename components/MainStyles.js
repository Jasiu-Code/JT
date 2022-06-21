import styled from 'styled-components';

export const MainWrapper = styled.div`
  max-width: 960px;
  width: 90%;
  ${'' /* min-height: calc(100vh - 90px); */}
  height: calc(100vh - 90px);
  ${'' /* background: var(--orange); */}
  align-self: center;
  z-index: 5;
  overflow-y: scroll;
  text-align: center;
  scroll-snap-type: y mandatory;
`;
