import Cookies from 'js-cookie';
import { User } from './types/auth';

export const setAuthTokens = (accessToken: string, refreshToken: string) => {
  Cookies.set('accessToken', accessToken, { expires: 7 }); // 7 days
  Cookies.set('refreshToken', refreshToken, { expires: 30 }); // 30 days
};

export const clearAuthTokens = () => {
  Cookies.remove('accessToken');
  Cookies.remove('refreshToken');
};

export const getAccessToken = (): string | undefined => {
  return Cookies.get('accessToken');
};

export const isAuthenticated = (): boolean => {
  return !!getAccessToken();
};

export const setUserData = (user: User) => {
  localStorage.setItem('user', JSON.stringify(user));
};

export const getUserData = (): User | null => {
  if (typeof window === 'undefined') return null;
  
  const userData = localStorage.getItem('user');
  return userData ? JSON.parse(userData) : null;
};

export const clearUserData = () => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('user');
  }
};