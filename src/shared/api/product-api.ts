import axios from 'axios';
import { Product } from '@/shared/api/types';

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});

export const findAllTopProducts = async () => {
  const { data } = await instance.get<Product[]>('/top');
  return data;
};

export const findAllOnSaleProducts = async () => {
  const { data } = await instance.get<Product[]>('/on_sale');
  return data;
};

// export const findAllTopProducts = async (): Promise<Product[] | undefined> => {
//   const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/top`);
//   if (res.ok) {
//     return res.json();
//   }
// };

export default instance;
