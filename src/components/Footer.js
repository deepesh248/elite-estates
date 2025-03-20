import styles from "../css/footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faX } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          <div className={styles.flex}>
            <div className={styles.footerSection}>
              <h4 className={styles.footerTitle}>Company</h4>
              <ul className={styles.footerList}>
                <li>
                  <a href="##" className={styles.footerLink}>
                    About Us
                  </a>
                </li>
                <li>
                  <a href="##" className={styles.footerLink}>
                    Policies
                  </a>
                </li>
                <li>
                  <a href="##" className={styles.footerLink}>
                    T&C
                  </a>
                </li>
                <li>
                  <a href="##" className={styles.footerLink}>
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div className={styles.footerSection}>
              <h4 className={styles.footerTitle}>Contact Us</h4>
              <ul className={styles.footerList}>
                <li>
                  <a href="##" className={styles.footerLink}>
                    Contact us
                  </a>
                </li>
                <li>
                  <a href="##" className={styles.footerLink}>
                    Partner With Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.flex}>
            <div className={styles.footerSection}>
              <h4 className={styles.footerTitle}>Follow Us</h4>
              <div className={styles.socialIcons}>
                <a href="##">
                  <FontAwesomeIcon
                    icon={faFacebook}
                    className={styles.socialIcon}
                  />
                </a>
                <a href="##">
                  <FontAwesomeIcon icon={faX} className={styles.socialIcon} />
                </a>
                <a href="##">
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className={styles.socialIcon}
                  />
                </a>
                <a href="##">
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className={styles.socialIcon}
                  />
                </a>
                <a href="##">
                  <FontAwesomeIcon
                    icon={faYoutube}
                    className={styles.socialIcon}
                  />
                </a>
              </div>
            </div>
            <div className={styles.footerSection}>
              <h4 className={styles.footerTitle}>Explore</h4>
              <ul className={styles.footerList}>
                <li>
                  <a href="##" className={styles.footerLink}>
                    News
                  </a>
                </li>
                <li>
                  <a href="##" className={styles.footerLink}>
                    Home Loans
                  </a>
                </li>
                <li>
                  <a href="##" className={styles.footerLink}>
                    Sitemap
                  </a>
                </li>
                <li>
                  <a href="##" className={styles.footerLink}>
                    International
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
