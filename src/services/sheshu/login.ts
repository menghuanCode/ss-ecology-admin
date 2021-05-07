// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 发送验证码 GET /api/auth/v1/captcha */
export async function getLoginCaptcha() {
  return request('/api/auth/v1/captcha');
}

/** 登录接口 POST /api/auth/v1/login */
export async function login(data: API.LoginParams, options?: { [key: string]: any }) {
  return request<Promise<API.LoginResult>>('/api/auth/v1/login', {
    method: 'POST',
    data,
    ...(options || {}),
  });
}
