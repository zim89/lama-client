'use client';
import axios from 'axios';
import { createContext, useContext, useEffect, useState } from 'react';
import { Endpoint } from '../lib/endpoints';

type contextData = {
  email: string;
  userId: string;
};

export const Context = createContext<contextData | null>(null);

export const useAuth = () => {
  return useContext(Context);
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [email, setEmail] = useState<string>('');
  const [userId, setUserId] = useState<string>('');
  useEffect(() => {
    const token = localStorage.getItem('access');
    const tokenInfo = token?.split('.')[1];
    const tokenInfoDecoded = window.atob(tokenInfo as string);
    const dataUser = JSON.parse(tokenInfoDecoded);
    const id = dataUser.user_id;
    setUserId(id);
    if (token !== null) {
      axios
        .get(Endpoint.AUTH.USERS + id + '/', {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          setEmail(response.data.email);
        });
    }
  }, [setEmail, setUserId]);
  return (
    <Context.Provider value={{ email, userId }}>{children}</Context.Provider>
  );
};
