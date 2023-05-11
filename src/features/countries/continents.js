import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getContinents } from './continentsSlice';
import '../../style/style.css';

function Continents() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContinents());
  }, [dispatch]);

  const { continent, loading, error } = useSelector((state) => state.continents);
  const worldPopulation = useSelector((state) => state.continents.worldPopulation);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }
  return (
    <div className="continent">
      <div className="continent_head">
        <div className="backCont">
          <Link to="/"><img className="back_key" alt="back arrow" src="https://svgsilh.com/svg/97591-ffffff.svg" /></Link>
          2018
        </div>
        <div>World Population</div>
        <div className="seting">
          <img className="microphoneContinent" alt="microphone" src="https://svgsilh.com/svg/468291-ffffff.svg" />
          <img className="settingsContinent" alt="settings" src="https://svgsilh.com/svg/98446-ffffff.svg" />
        </div>
      </div>
      <div className="worldImageCont">
        <img className="world_image" alt="world" src="https://svgsilh.com/svg/306338.svg" />
        <h1 className="popn">
          World Population
          <br />
          {worldPopulation}
        </h1>
      </div>
      <div>
        <div className="stat">
          STATS BY CONTINENT
        </div>
        <ul className="continent_grid">
          {continent.map((c) => (
            <li className="continents" key={c.name}>
              <Link className="direction" to={`/countries/${c.name}`}><img className="direction_key" alt="direction key" src="https://svgsilh.com/svg/24826-ffffff.svg" /></Link>
              <img className="cont_img" src={c.mapUrl} alt={`${c.name} map`} />
              <div className="continent_pop">
                <div>{c.name}</div>
                <div>{c.population}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Continents;
