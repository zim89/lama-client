import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { AuthState, FavoriteState, ScrollState } from '../types/types';

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

export const useScrollStore = create<ScrollState>((set) => ({
  isDragging: false,
  startY: 0,
  scrollTop: 0,
  setIsDragging: (isDragging) => set({ isDragging }),
  setStartY: (startY) => set({ startY }),
  setScrollTop: (scrollTop) => set({ scrollTop }),
}));

export const useStore = create<FavoriteState>((set) => ({
  favorites: [],
  addFavorite: (product) =>
    set((state) => ({ favorites: [...state.favorites, product] })),
  removeFavorite: (productId) =>
    set((state) => ({
      favorites: state.favorites.filter((product) => product.id !== productId),
    })),
  clearFavorites: () => set({ favorites: [] }),
}));
