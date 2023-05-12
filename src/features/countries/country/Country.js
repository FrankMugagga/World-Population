import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getCountry } from './country.Slice';
import { getContinents } from '../continentsSlice';
import '../../../style/country.css';

const Country = () => {
  const { continent } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountry(continent));
    dispatch(getContinents());
  }, [dispatch, continent]);
  const countryData = useSelector((state) => state.countries.country);
  const contine = useSelector((state) => state.continents.continent);

  const [searchQuery, setSearchQuery] = useState('');
  const filteredCountries = countryData.filter(
    (country) => country.name.official.toLowerCase().includes(searchQuery.toLocaleLowerCase()),
  );

  return (
    <div className="fullCont">
      <div className="continentsCont">
        <header className="CountriesHeader">
          <div className="backKey">
            <Link className="direct" to="/"><img className="direction_k" alt="back arrow" src="https://svgsilh.com/svg/97591-ffffff.svg" /></Link>
            <div className="year">2018</div>
          </div>
          <div className="contHead">
            {continent}
            &apos;s Population
          </div>
          <div className="setM">
            <img className="microphone" alt="microphone" src="https://svgsilh.com/svg/468291-ffffff.svg" />
            <img className="settings" alt="settings" src="https://svgsilh.com/svg/98446-ffffff.svg" />
          </div>
        </header>
        <h2>
          {contine && contine.map((contin) => (
            <div key={contin.name}>
              {contin.name === continent && (
              <p className="imgCont">
                <img className="contImage" src={contin.mapUrl} alt={`${contin.name} map`} />
                <div className="popCont">
                  Total Population
                  <br />
                  {contin.population}
                </div>
              </p>
              )}
            </div>
          ))}
        </h2>
        <div className="stat">
          COUNTRY BREAKDOWN - 2018&nbsp;
          <input
            name="searchQuery"
            className="searchQuery"
            placeholder="search by country"
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <section className="">
          <ul className="breakdown">
            {filteredCountries.map((country) => (
              <li className="countryList" key={country.capital}>
                <div className="countryDet">
                  <div className="forwardIcon">
                    <Link className="directionCont" to={`/countryDetail/${country.cca2}`}>
                      <img className="direction_k" alt="direction key" src="https://svgsilh.com/svg/24826-ffffff.svg" />
                    </Link>
                  </div>
                  <div className="couflag">{country.flag}</div>
                  <div className="countNam">{country.name.official}</div>
                  <div className="cpop">{country.population}</div>
                </div>

              </li>
            ))}
          </ul>
        </section>

      </div>

    </div>

  );
};

export default Country;
