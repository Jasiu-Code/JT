import styled from "styled-components";

const Wrapper = styled.div`
  position: absolute;
  bottom: 0;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;
  color: rgba(238, 238, 228, 0.3);
  background: inherit;
  height: 20px;
`;

const Footer = () => {
  return <Wrapper>Copryright 2021 Share Your Gains</Wrapper>;
};

export default Footer;