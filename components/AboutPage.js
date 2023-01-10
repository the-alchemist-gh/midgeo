import React from 'react';
import useCountryDetails from '../hooks/useCountryDetails'

function AboutPill() {
    console.log(useCountryDetails())
  return (
    <h1>You have Been Redirected to this page</h1>
  );
}

export default AboutPill;
