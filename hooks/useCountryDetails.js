import { useEffect, useState } from 'react';
// import { getUserDetails } from '../lib/user-utils';
import { useSnapshot } from 'valtio'
import state from '../Components/state'


function useCountryDetails() {
  // state.countryCode = "GH"
  let result ={}
  const snap = useSnapshot(state)
  const [currentCountry, setCurrentCountry] = useState("");
  // console.log(snap.countryCode)
  // const user = getUserDetails();
  useEffect(() => {
    fetch('https://midgeo-jc8xj6253-the-alchemist-gh.vercel.app/api/edge')
      .then((r) => r.json())
      .then((data) => {
        result = data;
        setCurrentCountry(data.mycountry);
      });
      
  }, [snap.countryCode]);
  // console.log(currentCountry)
  return currentCountry;
}


export default useCountryDetails;
