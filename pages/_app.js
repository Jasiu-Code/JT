import Layout from './Layout';
import '../styles/globals.css';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { options } from '../particleJS.config';

function MyApp({ Component, pageProps }) {
  const particlesInit = async (main) => {
    await loadFull(main);
  };
  return (
    <>
      <Layout>
        <Particles id='tsparticles' init={particlesInit} options={options} />
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
