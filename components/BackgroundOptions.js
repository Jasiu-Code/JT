export const options = {
  background: {
    color: {
      value: "#06070E",
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
        quantity: 3,
      },
      repulse: {
        distance: 77,
        duration: 0.5,
      },
    },
  },
  particles: {
    color: {
      value: "#FFFC31",
    },
    links: {
      color: "#FFFC31",
      distance: 150,
      enable: true,
      opacity: 0.9,
      width: 1,
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
      value: 70,
    },
    opacity: {
      value: 0.7,
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
      value: 7,
    },
  },
  detectRetina: true,
};
