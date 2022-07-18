import Navbar from './Navbar/Navbar';
import Footer from './Footer';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: -webkit-fill-available;
  height: 100vh;
  background: red;
`;

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <Navbar />
      {children}
      <Footer />
    </Wrapper>
  );
};

export default Layout;
