import styled from "styled-components";

const Wrapper = styled.div`
  position: fixed;
  background: inherit;
  bottom: 0;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  color: rgba(238, 238, 228, 0.4);
  height: 20px;
`;

const Footer = () => {
  return <Wrapper>Copryright 2021 Share Your Gains</Wrapper>;
};

export default Footer;
