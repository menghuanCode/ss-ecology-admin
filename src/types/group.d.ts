// 群组管理
// 群组编辑 请求
export interface GroupEditParams {
  id: number;
}
// 群组编辑 数据
export interface GroupEditResponseData {
  name?: string;
  level_one_admin: {
    id: string;
    value?: string;
  };
  level_two_admin?: {
    id?: string;
    value?: string;
  };
  members?: {
    id?: string;
    value?: string;
  }[];
  description?: string;
}
// 群组删除 请求
export interface GroupDeleteParams {
  id: number;
}
// 群组列表 请求
export interface GroupParams {
  page: number;
  page_size?: number;
  keyword?: string;
  query_id?: number;
}
// 群组列表 数据
export interface GroupResponseData {
  id?: string;
  created_at?: string;
  name?: string;
  level_one_admin: {
    id: string;
    value?: string;
  };
  level_two_admin?: {
    id?: string;
    value?: string;
  };
  members?: {
    id?: string;
    value?: string;
  }[];
  description?: string;
}
// 群组创建 请求
export interface GroupCreateParams {
  name?: string;
  level_one_admin: {
    id: string;
    value?: string;
  };
  level_two_admin?: {
    id?: string;
    value?: string;
  };
  members?: {
    id?: string;
    value?: string;
  }[];
  description?: string;
}