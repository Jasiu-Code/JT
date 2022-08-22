import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer';
import styled from 'styled-components';

const Wrapper = styled.div`
  background: black;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
