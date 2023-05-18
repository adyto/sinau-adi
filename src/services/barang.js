import callAPI from './api';
import axios from 'axios';

export async function getBarang() {
  //   const url = `http://159.223.57.121:8090/barang/find-all?limit=20&offset=1`;
  //   return callAPI({
  //     url,
  //     method: 'GET',
  //     token: true,
  //   });
  const response = await axios.get(
    `http://159.223.57.121:8090/barang/find-all?limit=20&offset=1`,
  );
  console.log(response);
}
