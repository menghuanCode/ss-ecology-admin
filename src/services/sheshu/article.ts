// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 获取话题列表 GET /api/article/v1/sys/tags */
export async function getArticleTags() {
  return request('/api/article/v1/sys/tags');
}

