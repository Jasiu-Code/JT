import styled from "styled-components";

const StyledLogo = styled.div`
  margin-left: 7vw;
  h1 {
    font-weight: 700;
    font-size: clamp(28px, calc(10px + 2vw), 44px);
    white-space: nowrap;
    color: var(--white);
  }
`;

const Logo = () => {
  return (
    <StyledLogo>
      <h1>S Y G</h1>
    </StyledLogo>
  );
};

export default Logo;
