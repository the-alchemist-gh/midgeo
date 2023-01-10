import { proxy } from 'valtio';

const state = proxy({
  countryCode: ''
}); 

export default state;

// export const updateUserState = (id) => {
//   getUser(id).then((data) => (state.user = data));
// };
