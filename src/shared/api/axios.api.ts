'use client';
import axios from 'axios';
import { getTokenFromLocalStorage } from '../helpers/storage.helpers';
import { Endpoint } from '../lib/endpoints';

export const instance = axios.create({
  baseURL: Endpoint.AUTH.BASE,
});
instance.interceptors.request.use(
  (config) => {
    const token = getTokenFromLocalStorage();
    config.headers['Authorization'] = `Bearer ` + token || '';
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
