import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPersonSwimming,
  faSquareParking,
  faDumbbell,
  faShieldHalved,
  faVolleyball,
  faWifi,
  faPlug,
  faFireExtinguisher,
} from "@fortawesome/free-solid-svg-icons";
import styles from "../css/amenities.module.css";

const amenities = [
  { name: "Swimming Pool", icon: <FontAwesomeIcon icon={faPersonSwimming} /> },
  { name: "Gym & Fitness Center", icon: <FontAwesomeIcon icon={faDumbbell} /> },
  { name: "24/7 Security", icon: <FontAwesomeIcon icon={faShieldHalved} /> },
  { name: "Parking Spaces", icon: <FontAwesomeIcon icon={faSquareParking} /> },
  { name: "High-Speed Wi-Fi", icon: <FontAwesomeIcon icon={faWifi} /> },
  { name: "Sports Facilities", icon: <FontAwesomeIcon icon={faVolleyball} /> },
  { name: "Power Backup", icon: <FontAwesomeIcon icon={faPlug} /> },
  {
    name: "Fire Safety Measures",
    icon: <FontAwesomeIcon icon={faFireExtinguisher} />,
  },
];

export default function Amenities() {
  return (
    <>
      <div>
        <h1 className={styles.heading}>
                  Amenities We Provide 
                </h1>
      <div className={styles.amenitiesGrid}>
      {amenities.map((amenity, index) => (
        <a href="##" key={index} className={styles.amenityCard}>
          <div className={styles.amenityIcon}>{amenity.icon}</div>
          <div className={styles.amenityText}>{amenity.name}</div>
        </a>
      ))}
    </div>
      </div>
    </>
  );
}
