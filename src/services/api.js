import axios from 'axios';
import Cookies from 'js-cookie';

export default async function callAPI({
  url,
  method,
  data,
  token,
  serverToken,
}) {
  let headers = {};
  if (serverToken) {
    headers = { Authorization: `API_KEY ${serverToken}` };
  } else if (token) {
    const tokenCookies = Cookies.get('token');
    if (tokenCookies) {
      const jwtToken = atob(tokenCookies);
      headers = { Authorization: `API_KEY ${jwtToken}` };
    }
  }
  console.log(token);
  const response = await axios({
    url,
    method,
    data,
    headers,
  }).catch((err) => err.response);

  if (response?.status > 300) {
    const res = {
      error: true,
      message: response.data.message,
      data: null,
    };
    return res;
  }

  const { length } = Object.keys(response.data);
  const res = {
    error: false,
    message: 'success',
    data: length > 1 ? response.data : response.data.data,
  };
  return res;
}