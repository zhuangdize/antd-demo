import { get, pageGet, post } from '@/utils/request';
import { MenuItem, UserInfo } from '../model/type';

/**
 * 获取用户信息，传入uid查询指定用户，不传查询当前用户
 * @param uid 用户id
 */
export function getUserInfo(uid?: number) {
  return get<UserInfo>('/api/v1/user/info', {
    params: {
      uid,
    },
  });
}
