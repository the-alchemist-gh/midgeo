import { useEffect, useState } from 'react';
// import { getUserDetails } from '../lib/user-utils';
import { useSnapshot } from 'valtio'
import state from '../Components/state'


function useCountryDetails(code) {
  // state.countryCode = "GH"
  const snap = useSnapshot(state)
  const [currentCountry, setCurrentCountry] = useState(code);
  // console.log(snap.countryCode)
  // const user = getUserDetails();
  useEffect(() => {
      setCurrentCountry(code);
  }, [snap.countryCode]);
  console.log(code)
  return currentCountry;
}


export default useCountryDetails;
