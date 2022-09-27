export const options = {
  fullScreen: {
    enable: true,
    zIndex: 1,
  },
  particles: {
    number: {
      value: 120,
      density: {
        enable: true,
        value_area: 700,
      },
    },
    color: {
      value: '#ffffff',
    },
    shape: {
      type: 'char',
      character: {
        value: ['Just Time'],
        font: 'Verdana',
        style: '',
        weight: '600',
        fill: false,
      },
    },
    stroke: {
      width: 0.7,
      color: '#ffffff',
    },
    opacity: {
      value: 0.4,
      random: true,
      anim: {
        enable: true,
        speed: 0.3,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 8,
      random: false,
      anim: {
        enable: false,
        speed: 8,
        size_min: 10,
        sync: false,
      },
    },
    line_linked: {
      enable: false,
    },
    move: {
      enable: true,
      speed: 1,
      direction: 'none',
      random: false,
      straight: false,
      out_mode: 'out',
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    events: {
      onhover: {
        enable: true,
        mode: 'grab',
        parallax: {
          enable: false,
          force: 60,
          smooth: 10,
        },
      },
      onclick: {
        enable: false,
        mode: 'repulse',
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 0.3,
        },
      },
      repulse: {
        distance: 200,
      },
    },
  },
  retina_detect: true,
  background: {
    color: '#000000',
    image: '',
    position: '50% 50%',
    repeat: 'no-repeat',
    size: 'cover',
  },
};
