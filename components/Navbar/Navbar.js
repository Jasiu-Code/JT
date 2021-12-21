import Link from "next/link";
import styled from "styled-components";
import Logo from "./Logo";
import NavbarLinks from "./NavbarLinks";

const MarginB = styled.div`
  padding-bottom: 70px;
`;

const StyledNav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--white);
  background: rgba(0, 0, 0, 0.8);
  border-bottom: solid 1px var(--light);
  z-index: 100;
  font-size: clamp(16px, calc(8px + 1vw), 22px);
`;

const NavMobile = styled.nav`
  position: fixed;
  bottom: 20px;
  left: 0;
  width: 100%;
  height: 70px;
  display: none;
  background: rgba(0, 0, 0, 0.9);
  border-top: solid 1px var(--white);
  border-bottom: solid 1px var(--white);
  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    a {
      padding: 2px 10px;
    }
    a:not(:last-of-type) {
      border-right: solid 1px var(--white);
    }
  } ;
`;

const NavMenu = styled.div`
  display: block;
  a {
    padding: 5px 2em;
  }
  a:not(:last-of-type) {
    border-right: solid 1px var(--white);
  }
  .active {
    font-weight: bold;
  }

  @media screen and (max-width: 768px) {
    display: none;
  } ;
`;

const StyledBtn = styled.button`
  margin-right: 7vw;
  padding: 0.5em 1.3em;
  background: none;
  border: solid 1px var(--black);
  box-shadow: var(--black) 4px 4px 0 0, var(--white) 4px 4px 0 1px;
  border-radius: 3px;
  font-weight: 600;
  font-size: clamp(16px, calc(5px + 1vw), 20px);
  background: var(--white);
  color: var(--black);
  white-space: nowrap;
  :hover {
    cursor: pointer;
    background: var(--black);
    color: var(--white);
    box-shadow: var(--white) 4px 4px 0 0, var(--black) 4px 4px 0 1px;
  }
`;
const click = () => {
  console.log("click");
};

const Navbar = () => {
  return (
    <MarginB>
      <StyledNav>
        <Link href="/">
          <a>
            <Logo />
          </a>
        </Link>
        <NavMenu>
          <NavbarLinks />
        </NavMenu>
        <NavMobile>
          <NavbarLinks />
        </NavMobile>
        <StyledBtn onClick={click}>Log In</StyledBtn>
      </StyledNav>
    </MarginB>
  );
};

export default Navbar;
