import Menu from './Menu';
import Logo from './Logo';
import Cta from './Cta';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <Menu />
        <Logo />
        <Cta />
      </div>
    </nav>
  );
}

export default Navbar;
