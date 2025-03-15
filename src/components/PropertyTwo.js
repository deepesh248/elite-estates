import style from "../css/propertyTwo.module.css";

function PropertyTwo(props) {
  return (
    <>
      <a href="##" className={style.container}>
        <div className={style.image}><img src={props.img} alt="" /></div>
        <div className={style.content}>
          <h1>{props.house}</h1>
          <h2>{props.bhk}</h2>
          <h2>{props.location}</h2>
          <h2>{props.price}</h2>
        </div>
      </a>
    </>
  );
}

export default PropertyTwo;
