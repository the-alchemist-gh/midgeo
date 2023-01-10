import { useEffect, useState } from 'react';
// import { getUserDetails } from '../lib/user-utils';
import { useSnapshot } from 'valtio'
import state from '../components/state'


function useCountryDetails() {
  const snap = useSnapshot(state)
  const [currentCountry, setCurrentCountry] = useState(snap.countryCode);
  // const user = getUserDetails();
  useEffect(() => {
      setCurrentCountry(snap.countryCode);
  }, [snap.countryCode]);
  return currentCountry;
}


export default useCountryDetails;
