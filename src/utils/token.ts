import { LOGIN_TOKEN_KEY } from '@/constants';

export function setToken(token: string) {
  localStorage.setItem(LOGIN_TOKEN_KEY, token);
}

export function getToken() {
  return localStorage.getItem(LOGIN_TOKEN_KEY);
}

export function clearToken() {
  localStorage.removeItem(LOGIN_TOKEN_KEY);
}
