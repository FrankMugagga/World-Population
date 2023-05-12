import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getDetails } from './countryDetailsSlice';
import '../../../style/countryDetail.css';

function CountryDetails() {
  const { country } = useParams();

  const dispatch = useDispatch();
  const { countryDetail, loading, error } = useSelector((state) => state.countryDetails);

  useEffect(() => {
    dispatch(getDetails(country));
  }, [dispatch, country]);

  return (
    <div className="countDetails">
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {countryDetail.length > 0 && (
        <div className="fullLen">
          <header>
            <div className="backKeydet">
              <div>
                <Link className="directiondet" to="/"><img className="direction_keyd" alt="back arrow" src="https://svgsilh.com/svg/97591-ffffff.svg" /></Link>
              </div>
              <div className="countName">
                { countryDetail[0].name.common}
                &apos;s population
              </div>
              <div className="set">
                <img className="microphone" alt="microphone" src="https://svgsilh.com/svg/468291-ffffff.svg" />
                <img className="settings" alt="settings" src="https://svgsilh.com/svg/98446-ffffff.svg" />
              </div>
            </div>

          </header>
          <main className="main">
            <section className="summary">
              <div className="flag">{ countryDetail[0].flag }</div>
            </section>

            <section className="cdetail">
              <ul className="cdetailCont">
                <li className="listing">
                  <div className="detailItem">Population</div>
                  <p className="detailItem2">
                    {countryDetail[0].population}
                  </p>
                </li>
                <li className="listing">
                  <div className="detailItem">Area</div>
                  <p className="detailItem2">
                    {countryDetail[0].area}
                  </p>
                </li>
                <li className="listing">
                  <div className="detailItem">Time zone</div>
                  <p className="detailItem2">
                    {countryDetail[0].timezones}
                  </p>
                </li>
                <li className="listing">
                  <div className="detailItem">
                    Map
                  </div>
                  <a className="detailItem2" href={countryDetail[0].maps.googleMaps}>
                    {countryDetail[0].name.common}
                    &apos;s
                    Google map
                  </a>
                </li>
                <li className="listing">
                  <div className="detailItem">
                    Capital
                  </div>
                  <p className="detailItem2">
                    {countryDetail[0].capital}
                  </p>
                </li>

                <li className="listing">
                  <div className="detailItem">CCN3</div>
                  <p className="detailItem2">
                    {countryDetail[0].ccn3}
                  </p>
                </li>
                <li className="listing">
                  <div className="detailItem">Subregion</div>
                  <p className="detailItem2">
                    {countryDetail[0].subregion}
                  </p>
                </li>

              </ul>

            </section>

          </main>
        </div>
      )}
    </div>
  );
}

export default CountryDetails;
