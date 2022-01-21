import axios from 'axios';
import store from '../store';
import Config from 'react-native-config';

export const baseURL = Config.API_URL;
const api = axios.create({
  baseURL
});

// api.interceptors.response.use(
//   response => {

//     return response;
//   },
//   error => {
//     const originalRequest = error.config;

//     if (error.response.data.exp === 'token expired') {
//       originalRequest._retry = true;
//       const { refresh_token } = store.getState().auth;

//       return new Promise(function(resolve, reject) {
//         axios
//           .post(
//             `${baseURL}/api/v1/authentications/drivers:refreshToken`,
//             {
//               refresh_token,
//             },
//           )
//           .then(({ data }) => {
//             store.dispatch(loadSuccess(data));
//             originalRequest.headers.Authorization = `Bearer ${data.id_token}`;
//             resolve(axios(originalRequest));
//           })
//           .catch(err => {
//             // processQueue(err, null);
//             reject(err);
//           })
//       });
//     }

//     return Promise.reject(error);
//   },
// );

// api.interceptors.request.use(config => {
//   const {auth} = store.getState();

//   if (auth && auth.id_token) {
//     config.headers.Authorization = `Bearer ${auth.id_token}`;
//   }

//   return config;
// });

export default api;
