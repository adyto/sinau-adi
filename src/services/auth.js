import callAPI from './api';
const ROOT_API = process.env.REACT_APP_API_BASE;

export async function setLogin(data) {
  console.log(data);
  const url = `http://159.223.57.121:8090/auth/login`;
  return callAPI({
    url,
    method: 'POST',
    data,
  });
}

export async function setRegister(data) {
  console.log(data);
  const url = `http://159.223.57.121:8090/auth/register`;
  return callAPI({
    url,
    method: 'POST',
    data,
  });
}
