import style from "../css/navbar.module.css";
import logo from "../resource/logo/logo_elite.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons'
import {faChevronDown} from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  return (
    <>
      <div className={style.container}>
        <nav className={style.nav}>
          <div>
            <a href="##">
              <img className={style.logo} src={logo} alt="" />
            </a>
          </div>
          <ul className={style.menu}>
            <li>
              <a href="##">Home</a>
            </li>
            <li className={style.buy}>
              <a href="##">Buy <FontAwesomeIcon className={style.arrow} icon={faChevronDown} /></a>
              <ul className={style.buy_dropdown}>
                <li>
                  <a href="##">Residential</a>
                </li>
                <li>
                  <a href="##">Commercial</a>
                </li>
                <li>
                  <a href="##">Luxury</a>
                </li>
                <li>
                  <a href="##">New Listings</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="##">Sell</a>
            </li>
            <li>
              <a href="##">Rent</a>
            </li>
            <li>
              <a href="##">About Us</a>
            </li>
            <li>
              <a href="##">Contact</a>
            </li>
          </ul>
          <div>
            <a className={style.login} href="##">
              Login
            </a>
          </div>
          <div className={style.mobile_sidemenu}> 
            <button onClick={submenu}><FontAwesomeIcon icon={faBarsStaggered} /></button>
            <div id="mobileSubmenu" className={style.mobile_menu_section}><ul className={style.mobile_menu}>
              <li>
                <a href="##">Home</a>
              </li>
              <li>
                <a href="##">Buy </a>
              </li>
              <li>
                <a href="##">Sell</a>
              </li>
              <li>
                <a href="##">Rent</a>
              </li>
              <li>
                <a href="##">About Us</a>
              </li>
              <li>
                <a href="##">Contact</a>
              </li>
              <li><a className={`${style.login} ${style.mobile_login}`} href="##">
              Login
            </a></li>
            </ul></div>
          </div>
        </nav>
      </div>
    </>
  );
}

function submenu() {
  const sub = document.getElementById("mobileSubmenu");
  if (sub.style.display === "block") {
    sub.style.display = "none";
  } else {
    sub.style.display = "block";
  }
}

export default Navbar;
