import Link from 'next/link';
import Logo from './Logo';
import NavbarLinks from './NavbarLinks';
import { StyledNav, NavMain, StyledBtn } from './NavbarStyles';
import { goToApp } from '../Styles';

const Navbar = () => {
  return (
    <StyledNav>
      <Link href='/'>
        <a>
          <Logo />
        </a>
      </Link>
      <NavMain>
        <NavbarLinks />
      </NavMain>
      <StyledBtn onClick={goToApp}>Go to App</StyledBtn>
    </StyledNav>
  );
};

export default Navbar;
