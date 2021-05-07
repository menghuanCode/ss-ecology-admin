// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 发送验证码 GET /api/auth/v1/captcha */
export async function getLoginCaptcha() {
  return request('/api/auth/v1/captcha');
}
