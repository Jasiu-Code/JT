import styled from 'styled-components';

export const StyledNav = styled.nav`
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  border-bottom: 1px solid ${({theme})=> theme.colors.white};
  color: ${({theme})=> theme.colors.white};
  display: flex;
  font-size: ${({theme}) => theme.fontSize.medium};
  height: 70px;
  justify-content: space-evenly;
  margin-bottom: 70px;
  padding: 10px;
  position: fixed;
  top: 0px;
  width: 100%;
  z-index: 9;
  @media screen and (min-width: 768px) {
    animation: nav-load 0.3s ease-in-out 0.3s;
    animation-fill-mode: forwards;
    transform: translateY(-100%);
    @keyframes nav-load {
      0% {
        transform: translateY(-100%);
      }
      100% {
        transform: translateY(0%);
      }
    }
  }
`;
export const NavMain = styled.div`
  display: block;
  a {
    padding: 5px 2em;
  }
  a:not(:last-of-type) {
    border-right: solid 2px ${({theme})=> theme.colors.white};
  }
  .active {
    color: ${({theme})=> theme.colors.orange};
    font-weight: bold;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavMobile = styled.nav`
  background: ${({theme})=> theme.colors.black};
  border-top: solid 1px ${({theme})=> theme.colors.white};
  bottom: 0px;
  display: none;
  height: 70px;
  position: fixed;
  width: 100%;
  z-index: 9;
  .active {
    color: ${({theme})=> theme.colors.orange};
    font-weight: bold;
  }
  @media screen and (max-width: 768px) {
    align-items: center;
    display: flex;
    justify-content: center;
    a {
      padding: 2px 10px;
    }
    a:not(:last-of-type) {
      border-right: solid 1px ${({theme})=> theme.colors.white};
    }
  } ;
`;
export const StyledBtn = styled.button`
  background: ${({theme})=> theme.colors.black};
  border-radius: 25px;
  border: 3px solid ${({theme})=> theme.colors.orange};
  text-transform: uppercase;
  color: ${({theme})=> theme.colors.orange};
  cursor: pointer;
  font-size: ${({theme})=> theme.fontSize.small};
  font-weight: 600;
  padding: 0.3em 0.8em;
  transition: 0.3s ease-in-out;
  :hover {
    background: ${({theme})=> theme.colors.white};
    border: 3px solid ${({theme})=> theme.colors.orange};
    color: ${({theme})=> theme.colors.orange};
  }
`;
export const StyledLogo = styled.div`
  display: flex;
  height: clamp(150px, calc(120px + 10vw), 220px);
  min-width: 200px;
  position: relative;
`;
