import { instance } from '../api/axios.api';
import { Endpoint } from '../lib/endpoints';
import { IUserData, IUserRecoveryData } from '../types/types';

export const AuthService = {
  async login(userData: IUserData): Promise<any | undefined> {
    const { data } = await instance.post<any>(Endpoint.AUTH.LOGIN, userData);
    return data;
  },
  async registration(userData: IUserData): Promise<any | undefined> {
    const { data } = await instance.post<any>(
      Endpoint.AUTH.REGISTRATION,
      userData
    );
    return data;
  },
  async recovery(userData: IUserRecoveryData): Promise<any | undefined> {
    const { data } = await instance.post<any>(Endpoint.AUTH.RECOVERY, userData);
    return data;
  },
};
