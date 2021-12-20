import styled from "styled-components";

const StyledLogo = styled.div`
  margin-left: 7vw;
  h1 {
    font-weight: 700;
    font-size: 26px;
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
