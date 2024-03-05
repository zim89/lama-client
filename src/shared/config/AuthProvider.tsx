'use client';
import axios from 'axios';
import { createContext, useContext, useEffect, useState } from 'react';
import { Endpoint } from '../lib/endpoints';

type contextData = {
  email: string;
  userId: string;
  showEmail: boolean;
};

export const Context = createContext<contextData | null>(null);

export const useAuth = () => {
  return useContext(Context);
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [email, setEmail] = useState<string>('');
  const [userId, setUserId] = useState<string>('');
  const [showEmail, setShowEmail] = useState<boolean>(false);
  useEffect(() => {
    const token = localStorage.getItem('access');
    if (token !== null) {
      const tokenInfo = token?.split('.')[1];
      const tokenInfoDecoded = window.atob(tokenInfo as string);
      const dataUser = JSON.parse(tokenInfoDecoded);
      const id = dataUser.user_id;

      setUserId(id);
      setShowEmail(true);
      axios
        .get(Endpoint.AUTH.USERS + id + '/', {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          setEmail(response.data.email);
        });
    } else {
      setShowEmail(false);
    }
  }, [setEmail, setUserId, setShowEmail]);
  return (
    <Context.Provider value={{ email, userId, showEmail }}>
      {children}
    </Context.Provider>
  );
};
