import Link from 'next/link';
import Logo from './Logo';
import NavbarLinks from './NavbarLinks';
import { StyledNav, NavMain, NavMobile, StyledBtn } from './NavbarStyles';
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
      <NavMobile>
        <NavbarLinks />
      </NavMobile>
      <StyledBtn onClick={goToApp}>Go to App</StyledBtn>
    </StyledNav>
  );
};

export default Navbar;
