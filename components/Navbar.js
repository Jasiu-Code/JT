import Link from "next/link";
import styled from "styled-components";
import ActiveLink from "./ActiveLink";
import Logo from "./Logo";
import { FaBars } from "react-icons/fa";

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
  color: var(--dark);
  background: var(--light);
`;

const NavMenu = styled.div`
  display: block;
  a {
    padding: 5px 2em;
  }
  a:not(:last-of-type) {
    border-right: solid 1px black;
  }
  .active {
    font-weight: bold;
  }

  @media screen and (max-width: 768px) {
    display: none;
  } ;
`;

const StyledBtn = styled.button`
  margin-right: 5vw;
  padding: 0.5em 1.3em;
  background: none;
  border: solid 1px black;
  box-shadow: var(--dark) 4px 4px 0 0, var(--light) 4px 4px 0 1px;
  border-radius: 1px;
  font-weight: 500;
  background: var(--light);
  color: var(--dark);
  :hover {
    cursor: pointer;
    background: var(--dark);
    color: var(--light);
    box-shadow: var(--light) 4px 4px 0 0, var(--dark) 4px 4px 0 1px;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: var(--dark);
  @media screen and (max-width: 768px) {
    display: flex;
    font-size: 1.8rem;
    margin-right: 5vw;
    cursor: pointer;
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
          <ActiveLink activeClassName="active" href="/">
            <a>Home</a>
          </ActiveLink>
          <ActiveLink activeClassName="active" href="/roadmap">
            <a>Roadmap</a>
          </ActiveLink>
          <ActiveLink activeClassName="active" href="/whitepaper">
            <a>Whitepaper</a>
          </ActiveLink>
          <ActiveLink activeClassName="active" href="/about">
            <a>About</a>
          </ActiveLink>
        </NavMenu>
        <StyledBtn onClick={click}>Go To App</StyledBtn>
        <Bars />
      </StyledNav>
    </MarginB>
  );
};

export default Navbar;
