import axios from 'axios';
import { Product } from '@/shared/api/types';

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});

export const fetchTopProducts = async () => {
  const { data } = await instance.get<Product[]>('/top');
  return data;
};

export const fetchOnSaleProducts = async () => {
  const { data } = await instance.get<Product[]>('/on_sale');
  return data;
};
