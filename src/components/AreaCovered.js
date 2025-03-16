import style from "../css/areaCovered.module.css";
import delhi from "../resource/cities/Delhi.jpeg";
import bengaluru from "../resource/cities/Bengaluru.jpeg";
import chennai from "../resource/cities/Chennai.jpeg";
import hyderabad from "../resource/cities/Hyderabad.jpeg";
import kolkata from "../resource/cities/kolkata.jpeg";
import mumbai from "../resource/cities/Mumbai.jpeg";

function AreaCovered() {
  const cities = [
    { name: "Mumbai", img: mumbai },
    { name: "Delhi", img: delhi },
    { name: "Bangalore", img: bengaluru },
    { name: "Chennai", img: chennai },
    { name: "Hyderabad", img: hyderabad },
    { name: "Kolkata", img: kolkata },
  ];
  return (
    <>
      <div className={style.container}>
        <h1 className={style.citiesHeading}>
          Your Next Home Awaits in Top Indian Cities
        </h1>
        <div className={style.citiesFlex}>
          {cities.map((city, index) => (
            <a href="##" key={index} className={style.cityCard}>
              <img src={city.img} alt={city.name} className={style.cityImage} />
              <div className={style.cityOverlay}>
                <h2 className={style.cityName}>{city.name}</h2>
              </div>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}

export default AreaCovered;
