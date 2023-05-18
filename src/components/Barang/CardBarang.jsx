import React, { useEffect, useCallback } from 'react';
import { getBarang } from '../../services/barang';

const CardBarang = () => {
  //   useEffect(async () => {
  //     const response = await getBarang(20, 1);
  //     console.log(response);
  //   }, []);

  //   useEffect(async () => {
  //     const response = await getBarang();
  //     console.log(response);
  //   }, []);
  //   const getBarangAPI = useCallback(async () => {
  //     const response = await getBarang();
  //     console.log(response);
  //   }, [getBarang]);
  //   useEffect(() => {
  //     getBarangAPI();
  //   }, []);
  return <div>CardBarang</div>;
};

export default CardBarang;
