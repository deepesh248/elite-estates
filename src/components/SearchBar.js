import React, { useState } from 'react';
import style from '../css/searchBar.module.css';

function SearchBar() {
  const [city, setCity] = useState('');
  const [bhk, setBhk] = useState('');
  const [minBudget, setMinBudget] = useState('0 Lakh');
  const [maxBudget, setMaxBudget] = useState('10 Crore');

  const cities = ['Delhi', 'Mumbai', 'Bangalore', 'Hyderabad', 'Chennai', 'Kolkata', 'Pune'];
  const bhkOptions = ['1 BHK', '2 BHK', '3 BHK', '4 BHK+'];
  const budgetOptions = ['0 Lakh', '5 Lakh', '10 Lakh', '20 Lakh', '50 Lakh', '1 Crore', '2 Crore', '5 Crore', '10 Crore'];

  const handleSearch = () => {
    console.log({ city, bhk, minBudget, maxBudget });
  };

  const handleMinBudgetChange = (e) => {
    const value = e.target.value;
    if (budgetOptions.indexOf(value) <= budgetOptions.indexOf(maxBudget)) {
      setMinBudget(value);
    }
  };

  const handleMaxBudgetChange = (e) => {
    const value = e.target.value;
    if (budgetOptions.indexOf(value) >= budgetOptions.indexOf(minBudget)) {
      setMaxBudget(value);
    }
  };

  return (
      <>
          <div className={style.heading}>Find Your Dream Home</div>

        <div className={style.searchContainer}>
      <select value={city} onChange={(e) => setCity(e.target.value)} className={style.inputField}>
        <option disabled value="">Select City</option>
        {cities.map((c) => (
          <option key={c} value={c}>{c}</option>
        ))}
      </select>

      <input
        type="text"
        placeholder="Search Keywords (e.g., flat, villa, independent house)"
        className={style.inputField}
      />

      <select value={bhk} onChange={(e) => setBhk(e.target.value)} className={style.inputField}>
        <option disabled value="">Select BHK</option>
        {bhkOptions.map((b) => (
          <option key={b} value={b}>{b}</option>
        ))}
      </select>

      <div>
        <label className={style.budgetLabel}>Budget Range</label>
        <div className={style.budgetSelect}>
          <select value={minBudget} onChange={handleMinBudgetChange} className={style.inputField}>
            {budgetOptions.map((b) => (
              <option key={b} value={b}>{b}</option>
            ))}
          </select>
          <span>to</span>
          <select value={maxBudget} onChange={handleMaxBudgetChange} className={style.inputField}>
            {budgetOptions.map((b) => (
              <option key={b} value={b}>{b}</option>
            ))}
          </select>
        </div>
      </div>

      <button onClick={handleSearch} className={style.searchButton}>
        Search
      </button>
    </div>
      </>
  );
}

export default SearchBar;