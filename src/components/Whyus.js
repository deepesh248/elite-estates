import styles from '../css/whyus.module.css'
import whyChooseImage from '../resource/images/whyus.png'

function Whyus() {
  return (
      <>
          <div className={styles.container}>
          <h2 className={styles.heading}>Why Choose Us?</h2>
          <section className={styles.whyChooseUs}>
      <div className={styles.imageContainer}>
        <img src={whyChooseImage} alt="Why Choose Us" />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.features}>
          <div className={styles.feature}>
            <h3 className={styles.featureTitle}>✅ Prime Locations</h3>
            <p className={styles.featureText}>
              We offer properties in the most sought-after neighborhoods, ensuring easy access to schools, shopping centers, and business hubs.
            </p>
          </div>
          <div className={styles.feature}>
            <h3 className={styles.featureTitle}>🏗️ Quality Construction</h3>
            <p className={styles.featureText}>
              Our projects are built with top-notch materials and cutting-edge engineering to guarantee durability and safety.
            </p>
          </div>
          <div className={styles.feature}>
            <h3 className={styles.featureTitle}>🔒 Secure & Gated Communities</h3>
            <p className={styles.featureText}>
              Enjoy peace of mind with 24/7 security, CCTV surveillance, and gated access for a safe living environment.
            </p>
                      </div>
                      <div className={styles.feature}>
          <h3 className={styles.featureTitle}>🏡 Flexible Payment Plans</h3>
          <p className={styles.featureText}>
            We offer a variety of financing options and easy payment plans to make homeownership a reality for everyone.
          </p>
        </div>
        </div>
      </div>
    </section>
          </div>
    </>
  );
}

export default Whyus;
