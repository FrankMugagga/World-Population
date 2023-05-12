import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Continents from './features/countries/continents';
import Countries from './features/countries/country/Country';
import DetailsCountry from './features/countries/countryDetails/DetailsCountry';
import NotFound from './features/countries/Notfound';
import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Continents />} />
        <Route path="/countries/:continent" element={<Countries />} />
        <Route path="/countryDetail/:country" element={<DetailsCountry />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
