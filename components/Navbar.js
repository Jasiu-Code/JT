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
  color: var(--light);
  background: rgba(0, 0, 0, 0.6);
  border-bottom: solid 1px var(--light);
  z-index: 100;
`;

const NavMobile = styled.nav`
  position: fixed;
  bottom: 20px;
  left: 0;
  width: 100%;
  height: 30px;
  display: none;
  background: rgba(0, 0, 0, 0.7);
  border-top: solid 1px var(--light);
  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  } ;
`;

const NavMenu = styled.div`
  display: block;
  a {
    padding: 5px 2em;
  }
  a:not(:last-of-type) {
    border-right: solid 1px var(--light);
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
  border: solid 1px black;
  box-shadow: var(--dark) 4px 4px 0 0, var(--light) 4px 4px 0 1px;
  border-radius: 3px;
  font-weight: 600;
  font-size: 16px;
  background: var(--light);
  color: var(--dark);
  :hover {
    cursor: pointer;
    background: var(--dark);
    color: var(--light);
    box-shadow: var(--light) 4px 4px 0 0, var(--dark) 4px 4px 0 1px;
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
        <StyledBtn onClick={click}>App</StyledBtn>
      </StyledNav>
    </MarginB>
  );
};

export default Navbar;
