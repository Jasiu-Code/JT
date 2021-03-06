import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background: ${({theme})=> theme.colors.black};
  color: ${({theme})=> theme.colors.white};
  text-align: center;
  position: fixed;
  bottom: 0;
  height: 25px;
  width: 100%;
  opacity: 0.6;
  z-index: 5;;
  @media screen and (max-width: 768px) {
    margin-bottom: 70px;
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      Copryright {new Date().getFullYear()} Just Time
    </FooterWrapper>
  );
};

export default Footer;
