// import { getLoginUrl } from '@/services';
import { clearToken } from './token';

// 跳转登录页面
export async function login() {
  // const { data } = await getLoginUrl();
  // const { oauthUrl } = data;

  // localStorage.setItem(LAST_VISITED_URL, location.href);

  // location.href = oauthUrl;
}

export function logout() {
  clearToken();
  login();
}
