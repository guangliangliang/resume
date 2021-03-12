/*
 * @Description: 
 * @Version: 1.0
 * @Autor: unicom
 * @Date: 2021-01-10 15:48:28
 * @LastEditors: unicom
 * @LastEditTime: 2021-01-10 17:55:46
 */
import { request } from 'umi';

export type LoginParamsType = {
  username: string;
  password: string;
  mobile: string;
  captcha: string;
  type: string;
};

export async function fakeAccountLogin(params: LoginParamsType) {
  return request<API.LoginStateType>('/api/login/account', {
    method: 'POST',
    data: params,
  });
}

export async function getFakeCaptcha(mobile: string) {
  return request(`/api/login/captcha?mobile=${mobile}`);
}

export async function outLogin() {
  return request('/api/login/outLogin');
}
