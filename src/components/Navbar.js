import style from "../css/navbar.module.css";
import logo from "../resource/logo/logo_elite.png";

function Navbar() {
  return (
    <>
      <div className={style.container}>
        <nav className={style.nav}>
          <div>
            <img className={style.logo} src={logo} alt="" />
          </div>
          <ul className={style.menu}>
            <li><a href="##">Home</a></li>
            <li className={style.buy}>
              <a href="##">Buy{" "}</a>
              <ul className={style.buy_dropdown}>
                <li><a href="##">Residential</a></li>
                <li><a href="##">Commercial</a></li>
                <li><a href="##">Luxury</a></li>
                <li><a href="##">New Listings</a></li>
              </ul>
            </li>
            <li><a href="##">Sell</a></li>
            <li><a href="##">Rent</a></li>
            <li><a href="##">About Us</a></li>
            <li><a href="##">Contact</a></li>
          </ul>
          <div className={style.login}>Login</div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
