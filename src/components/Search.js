import style from "../css/search.module.css";

function Search() {
  return (
    <>
      <div className={style.container}>
        <div>
          <h1>Find your Home</h1>
          <form>
                      <input type="text" />{" "}
                     <div> <label htmlFor=""><select id="buget">
                          
                          <option value="1bhk">5L</option>
                          <option value="2bhk">10L</option>
                          <option value="3bhk">20L</option>
                                      <option value="4bhk">50L</option>
                                      <option value="4bhk">1C+</option>
                        </select></label>
            <select id="flat">
              <option value="1bhk">1BHK</option>
              <option value="2bhk">2BHK</option>
              <option value="3bhk">3BHK</option>
              <option value="4bhk">4BHK+</option>
            </select></div>
                      <div>Budget <select id="buget">
                          
                          <option value="1bhk">5L</option>
                          <option value="2bhk">10L</option>
                          <option value="3bhk">20L</option>
                                      <option value="4bhk">50L</option>
                                      <option value="4bhk">1C+</option>
                        </select></div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Search;
