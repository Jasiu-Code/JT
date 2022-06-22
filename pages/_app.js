import Layout from './Layout';
import '../styles/globals.css';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { options } from '../particleJS.config';
import { AnimatePresence } from 'framer-motion';
import { Router } from 'next/router';
import { MotionDiv } from '../components/Styles';

function MyApp({ Component, pageProps, router }) {
  const particlesInit = async (main) => {
    await loadFull(main);
  };
  return (
    <>
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
    </>
  );
}

export default MyApp;
