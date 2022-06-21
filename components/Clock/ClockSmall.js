import { useEffect, useState } from 'react';
import styled from 'styled-components';

const Base = styled.div`
  background: rgba(0, 0, 0, 0);
  position: relative;
  height: 120px;
  width: 120px;
  //240
  border: 2px solid var(--white);
  box-shadow: 2px 2px 10px var(--white);
  border-radius: 50%;
  z-index: 2;
  &:before {
    content: '';
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90px;
    height: 90px;
    border-radius: 50%;
    border: 2px solid var(--white);
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
    width: 10px;
    height: 10px;
    border-radius: 50%;
    border: 2px solid var(--white);
    background: var(--white);
    z-index: 2;
  }
`;
const Hand = styled.div`
  position: absolute;
  background: var(--white);
  z-index: 2;
  left: 50%;
`;
const HourMarks = styled(Hand)`
  top: 4px;
  transform-origin: 0px 55px;
  height: 5px;
  width: 5px;
  border-radius: 50%;
  z-index: 1;
`;
const Hour = styled(Hand)`
  top: 31px;
  transform-origin: 0px 27px;
  height: 22px;
  width: 6px;
  border-radius: 50% 50% 0% 0%;
`;
const Minute = styled(Hand)`
  top: 21px;
  transform-origin: 0px 37px;
  height: 33px;
  width: 6px;
  border-radius: 50% 50% 0% 0%;
`;
const Second = styled(Hand)`
  top: 11px;
  transform-origin: 0px 47px;
  height: 40px;
  width: 4px;
  border-radius: 50% 50% 0% 0%;
  background: var(--orange);
`;
const Wrapper = styled.div`
  position: relative;
  ${'' /* align-self: flex-end; */}
  border-radius: 100%;
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

const ClockSmall = () => {
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
    <Wrapper>
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
            height: `5px`,
            width: `12px`,
          }}
        />
        <HourMarks style={{ transform: `rotate(30deg) translate(-50%)` }} />
        <HourMarks style={{ transform: `rotate(60deg) translate(-50%)` }} />
        <HourMarks
          style={{
            transform: `rotate(90deg) translate(-50%)`,
            height: `5px`,
            width: `12px`,
          }}
        />
        <HourMarks style={{ transform: `rotate(120deg) translate(-50%)` }} />
        <HourMarks style={{ transform: `rotate(150deg) translate(-50%)` }} />
        <HourMarks
          style={{
            transform: `rotate(180deg) translate(-50%)`,
            height: `5px`,
            width: `12px`,
          }}
        />
        <HourMarks style={{ transform: `rotate(210deg) translate(-50%)` }} />
        <HourMarks style={{ transform: `rotate(240deg) translate(-50%)` }} />
        <HourMarks
          style={{
            transform: `rotate(270deg) translate(-50%)`,
            height: `5px`,
            width: `12px`,
          }}
        />
        <HourMarks style={{ transform: `rotate(300deg) translate(-50%)` }} />
        <HourMarks style={{ transform: `rotate(330deg) translate(-50%)` }} />
      </Base>
    </Wrapper>
  );
};

export default ClockSmall;
