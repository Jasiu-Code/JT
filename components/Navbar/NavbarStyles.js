import styled from 'styled-components';

export const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 70px;
  width: 100%;
  position: fixed;
  top: 0px;
  background: rgba(0, 0, 0, 0.5);
  color: ${({theme})=> theme.colors.white};
  font-size: ${({theme}) => theme.fontSize.medium};
  border-bottom: 1px solid ${({theme})=> theme.colors.white};
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
  display:flex;
  justify-content: center;
  a {
    padding: 5px 40px;
  }
  a:not(:last-of-type) {
    border-right: solid 2px ${({theme})=> theme.colors.white};
  }
  .active {
    color: ${({theme})=> theme.colors.orange};
    font-weight: bold;
  }
  @media screen and (max-width: 768px) {
    height: 70px;
    width: 100%;
    position: fixed;
    bottom: 0px;
    background: ${({theme})=> theme.colors.black};
    border-top: solid 1px ${({theme})=> theme.colors.white};
    z-index: 9;
    align-items: center;
  }
  @media screen and (max-width: 1024px){
    a {
      padding: 2px 10px;
    }
  }
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
  height: clamp(120px, calc(120px + 10vw), 220px);
  min-width: 180px;
  position: relative;
`;
