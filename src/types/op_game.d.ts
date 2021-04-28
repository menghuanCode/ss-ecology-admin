// 运营游戏相关接口
// 游戏活动配置重启 请求
export interface OpGameConfigsRestartIDParams {
  id: number;
  second_id: number;
}
// 游戏活动配置重启数据 请求
export interface OpGameConfigsRestartParams {
  name?: string;
  activity_url?: string;
  img_url?: string;
  bg_url?: string;
  description?: string;
  option_type?: number;
  end_time?: string;
  items?: {
    key_idx?: number;
    value?: string;
    id?: number;
  }[];
  mark?: string;
  remarks?: string;
}
// 游戏活动配置结束 请求
export interface OpGameConfigsStopParams {
  id: number;
  second_id: number;
}
// 游戏活动配置禁用 请求
export interface OpGameConfigsDisableParams {
  id: number;
  second_id: number;
}
// 游戏活动配置启用 请求
export interface OpGameConfigsEnableParams {
  id: number;
  second_id: number;
}
// 游戏活动配置详情 请求
export interface OpGameConfigsDetailsParams {
  id: number;
  second_id: number;
}
// 游戏活动详情 请求
export interface OpGameDetailsParams {
  id: number;
}
// 游戏活动配置详情/游戏活动详情 数据
export interface OpGameConfigsDetailsResponseData {
  id?: string;
  name?: string;
  description?: string;
  img_url?: string;
  bg_url?: string;
  activity_url?: string;
  state?: string;
  updated_at?: string;
  created_at?: string;
  row_index?: number;
  option_type?: number;
  vote_state?: string;
  end_time?: string;
  items?: {
    key_idx?: number;
    value?: string;
    id?: number;
  }[];
  mark?: string;
}
// 游戏活动配置编辑 请求
export interface OpGameConfigsEditIDParams {
  id: number;
  second_id: number;
}
// 游戏活动编辑 请求
export interface OpGameEditIDParams {
  id: number;
}
// 游戏活动配置编辑/游戏活动编辑 数据
export interface OpGameConfigsEditResponseData {
  name?: string;
  activity_url?: string;
  img_url?: string;
  bg_url?: string;
  description?: string;
  option_type?: number;
  end_time?: string;
  items?: {
    key_idx?: number;
    value?: string;
    id?: number;
  }[];
  mark?: string;
  remarks?: string;
}
// 游戏活动配置删除 请求
export interface OpGameConfigsDeleteParams {
  id: number;
  second_id: number;
}
// 游戏活动删除 请求
export interface OpGameDeleteParams {
  id: number;
}
// 游戏活动配置列表 请求
export interface OpGameConfigsParams {
  page: number;
  page_size?: number;
  keyword?: string;
}
// 游戏活动列表 请求
export interface OpGameParams {
  page: number;
  page_size?: number;
  keyword?: string;
  is_enabled?: string;
}
// 游戏活动配置列表/游戏活动列表 数据
export interface OpGameConfigsResponseData {
  id?: string;
  name?: string;
  description?: string;
  img_url?: string;
  bg_url?: string;
  activity_url?: string;
  state?: string;
  updated_at?: string;
  created_at?: string;
  row_index?: number;
  option_type?: number;
  vote_state?: string;
  end_time?: string;
  items?: {
    key_idx?: number;
    value?: string;
    id?: number;
  }[];
  mark?: string;
}
// 游戏活动配置创建 请求
export interface OpGameConfigsCreateIDParams {
  id: number;
}
// 游戏活动配置创建 数据
export interface OpGameConfigsCreateResponseData {
  name?: string;
  activity_url?: string;
  img_url?: string;
  bg_url?: string;
  description?: string;
  option_type?: number;
  end_time?: string;
  items?: {
    key_idx?: number;
    value?: string;
    id?: number;
  }[];
  mark?: string;
  remarks?: string;
}

// 游戏活动禁用 请求
export interface OpGameDisableParams {
  id: number;
}
// 游戏活动启用 请求
export interface OpGameEnableParams {
  id: number;
}
// 游戏活动创建 请求
export interface OpGameCreateResponseData {
  name?: string;
  activity_url?: string;
  img_url?: string;
  bg_url?: string;
  description?: string;
  option_type?: number;
  end_time?: string;
  items?: {
    key_idx?: number;
    value?: string;
    id?: number;
  }[];
  mark?: string;
  remarks?: string;
}
// 游戏活动排序 请求
export interface OpGameSortParams {
  id?: string;
  value?: string;
  row_index?: number;
}
