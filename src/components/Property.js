import style from "../css/property.module.css";

function Property(props) {
  return (
    <>
      <div className={style.container} style={{ backgroundImage: `url(${props.imgage})` }}>
        <div className={style.gradient}>
          <a href="##" className={style.content}>
            <h1>{props.houseName}</h1>
            <h2>by {props.by}</h2>
            <div className={style.flexRow}>
              <div>
                <h3>{props.bhk}</h3>
                <h3>{props.location}</h3>
              </div>{" "}
              <h1 className={style.heading}>{props.price}</h1>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}

export default Property;
