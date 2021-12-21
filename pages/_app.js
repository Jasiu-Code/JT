import Particles from "react-tsparticles";
import Layout from "../components/Layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const particlesInit = (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <>
      <Layout>
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            background: {
              color: {
                value: "#FFB100",
              },
            },
            fpsLimit: 60,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 7,
                },
                repulse: {
                  distance: 77,
                  duration: 0.1,
                },
              },
            },
            particles: {
              color: {
                value: "#5E7CE2",
              },
              links: {
                color: "#DD0426",
                distance: 150,
                enable: true,
                opacity: 0.3,
                width: 2,
              },
              collisions: {
                enable: true,
              },
              move: {
                direction: "none",
                enable: true,
                outMode: "bounce",
                random: false,
                speed: 1,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  value_area: 1000,
                },
                value: 100,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                options: {
                  character: {
                    value: ["Share", "Create", "Enjoy"],
                    font: "Verdana",
                    style: "",
                    weight: "400",
                    fill: true,
                  },
                },
                type: "char",
              },
              size: {
                random: true,
                value: 10,
              },
            },
            detectRetina: true,
          }}
        />
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
