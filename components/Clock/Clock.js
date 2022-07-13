import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Base = styled.div`
  position: relative;
  height: 240px;
  width: 240px;
  border: 6px solid ${({theme}) => theme.colors.white};
  box-shadow: 2px 2px 10px ${({theme}) => theme.colors.white};
  border-radius: 50%;
  z-index: 2;

  &:before {
    content: '';
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 180px;
    height: 180px;
    border-radius: 50%;
    border: 5px solid ${({theme}) => theme.colors.white};
    box-shadow: 0px 0px 3px ${({theme}) => theme.colors.white};
    background: rgba(0, 0, 0, 0);
    z-index: 1;
  }
  &:after {
    content: '';
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: ${({theme}) => theme.colors.white};
    z-index: 2;
  }
`;
const Hand = styled.div`
  position: absolute;
  background: ${({theme}) => theme.colors.white};
  z-index: 2;
  left: 50%;
`;
const HourMarks = styled(Hand)`
  top: 5px;
  transform-origin: 0px 109px;
  height: 10px;
  width: 10px;
  border-radius: 50%;
  z-index: 1;
`;
const Hour = styled(Hand)`
  top: 40px;
  transform-origin: 0px 74px;
  height: 65px;
  width: 13px;
  border-radius: 50% 50% 0% 0%;
`;
const Minute = styled(Hand)`
  top: 30px;
  transform-origin: 0px 84px;
  height: 75px;
  width: 10px;
  border-radius: 50% 50% 0% 0%;
`;
const Second = styled(Hand)`
  top: 20px;
  transform-origin: 0px 94px;
  height: 85px;
  width: 7px;
  border-radius: 50% 50% 0% 0%;
  background: ${({theme}) => theme.colors.orange};
`;
const Wrapper = styled(motion.div)`
  position: relative;
  opacity: 1;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Clock = () => {
  const [second, setSecond] = useState(0);
  const [minute, setMinute] = useState(0);
  const [hour, setHour] = useState(0);

  useEffect(() => {
    const x = setInterval(() => {
      setSecond(new Date().getSeconds());
      setMinute(new Date().getMinutes());
      setHour(new Date().getHours());
    }, 1000);
    return () => clearInterval(x);
  }, [second]);

  return (
    <Wrapper
      drag
      dragConstraints={{
        top: -300,
        left: -300,
        right: 300,
        bottom: 300,
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <Base>
        <Second
          style={{ transform: `rotate(${second * 6}deg) translate(-50%)` }}
        />
        <Minute
          style={{
            transform: `rotate(${
              (minute + second / 60) * 6
            }deg) translate(-50%)`,
          }}
        />
        <Hour
          style={{
            transform: `rotate(${
              (hour + minute / 60) * 30
            }deg) translate(-50%)`,
          }}
        />
        <HourMarks
          style={{
            transform: `rotate(0deg) translate(-50%)`,
            height: `10px`,
            width: `25px`,
          }}
        />
        <HourMarks style={{ transform: `rotate(30deg) translate(-50%)` }} />
        <HourMarks style={{ transform: `rotate(60deg) translate(-50%)` }} />
        <HourMarks
          style={{
            transform: `rotate(90deg) translate(-50%)`,
            height: `10px`,
            width: `25px`,
          }}
        />
        <HourMarks style={{ transform: `rotate(120deg) translate(-50%)` }} />
        <HourMarks style={{ transform: `rotate(150deg) translate(-50%)` }} />
        <HourMarks
          style={{
            transform: `rotate(180deg) translate(-50%)`,
            height: `10px`,
            width: `25px`,
          }}
        />
        <HourMarks style={{ transform: `rotate(210deg) translate(-50%)` }} />
        <HourMarks style={{ transform: `rotate(240deg) translate(-50%)` }} />
        <HourMarks
          style={{
            transform: `rotate(270deg) translate(-50%)`,
            height: `10px`,
            width: `25px`,
          }}
        />
        <HourMarks style={{ transform: `rotate(300deg) translate(-50%)` }} />
        <HourMarks style={{ transform: `rotate(330deg) translate(-50%)` }} />
      </Base>
    </Wrapper>
  );
};

export default Clock;
