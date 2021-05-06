// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 获取Ai账号列表 GET  */
export async function aiaccountUser(options?: { [key: string]: any }) {
  return request<API.AiAccountParams>('/v1/sys/ai_accounts', {
    method: 'GET',
    ...(options || {}),
  });
}

