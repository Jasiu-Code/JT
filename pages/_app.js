import Layout from './Layout';
// import '../styles/globals.css';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { options } from '../particleJS.config';
import { AnimatePresence } from 'framer-motion';
import { MotionDiv } from '../components/Styles';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../styles/globalStyles';
import { theme } from '../styles/theme';


function MyApp({ Component, pageProps, router }) {
  const particlesInit = async (main) => {
    await loadFull(main);
  };
  return (
    <ThemeProvider theme={theme}>
    <GlobalStyle/>
      <Layout>
        <Particles id='tsparticles' init={particlesInit} options={options} />
        <AnimatePresence exitBeforeEnter>
          <MotionDiv
            key={router.route}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Component {...pageProps} key={router.route} />
          </MotionDiv>
        </AnimatePresence>
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
