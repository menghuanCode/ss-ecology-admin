// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 发送验证码 GET /api/auth/v1/captcha */
export async function getLoginCaptcha() {
  return request('/api/auth/v1/captcha');
}

/** 登录 POST /api/auth/v1/login */
export async function login() {
  return request('/api/auth/v1/login');
}
