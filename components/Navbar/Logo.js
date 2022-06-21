import Image from 'next/image';
import { StyledLogo } from './NavbarStyles';

const Logo = () => {
  return (
    <StyledLogo>
      <Image
        layout='fill'
        objectFit='contain'
        objectPosition='left'
        src='/Logo.png'
        alt='Logo JT'
        priority
      />
    </StyledLogo>
  );
};

export default Logo;
