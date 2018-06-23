import Bars from '../../icons/bars.svg?sprite';

function Menu() {
  return (
    <div className="menu">
      <a href="/" className="menu__trigger">
        <Bars className="menu__icon" />
      </a>
    </div>
  );
}

export default Menu;
