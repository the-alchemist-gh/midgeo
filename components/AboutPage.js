import React from 'react';
import useCountryDetails from '../hooks/useCountryDetails'

function AboutPill() {
    console.log(useCountryDetails())
  return (
        
      
    <h1>You are Browsing from {useCountryDetails()}</h1>

    
  );
}

export default AboutPill;
