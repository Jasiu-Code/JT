import ActiveLink from "./ActiveLink";

const NavbarLinks = () => {
  return (
    <>
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
    </>
  );
};

export default NavbarLinks;
