import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AuthState {
  signUpToken: string;
  setSignUpToken: (token: string) => void;
  userEmail: string;
  setUserEmail: (email: string) => void;
  authToken: string;
  setAuthToken: (token: string) => void;
  logOut: () => void;
  expiresAt: number;
  setExpiresAt: (expiresAt: number) => void;
}

export const useAuthState = create<AuthState>()(
  persist(
    (set) => ({
      signUpToken: '',
      setSignUpToken: (token: string) => set({ signUpToken: token }),
      userEmail: '',
      setUserEmail: (email: string) => set({ userEmail: email }),
      authToken: '',
      setAuthToken: (token: string) => set({ authToken: token }),
      logOut: () => set({ authToken: '' }),
      expiresAt: 0,
      setExpiresAt: (expiresAt: number) => set({ expiresAt }),
    }),
    {
      name: 'pakt-dashboard',
    }
  )
);
