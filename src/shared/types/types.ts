export interface IconProps {
  width?: string;
  height?: string;
  stroke?: string;
  fill?: string;
}

export interface IUserData {
  email: string;
  password: string;
}
export interface IUserRecoveryData {
  email: string;
}

export interface AuthState {
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

export interface Product {
  id: number;
  product_images: any;
  name: string;
  price: number;
  discount: any;
  male: number;
}

export interface ScrollState {
  isDragging: boolean;
  startY: number;
  scrollTop: number;
  setIsDragging: (isDragging: boolean) => void;
  setStartY: (startY: number) => void;
  setScrollTop: (scrollTop: number) => void;
}

export interface FavoriteState {
  favorites: Product[];
  addFavorite: (product: Product) => void;
  removeFavorite: (productId: number) => void;
  clearFavorites: () => void;
}
