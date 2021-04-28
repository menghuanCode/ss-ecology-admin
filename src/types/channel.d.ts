// 分享管理相关接口
// 渠道禁用 请求
export interface ChannelDisableParams {
  id: number;
}
// 渠道启用 请求
export interface ChannelEnableParams {
  id: number;
}
// 渠道详情 请求
export interface ChannelDetailsParams {
  id: number;
}
// 渠道详情  数据
export interface ChannelDetailsResponseData {
  id?: string;
  name?: string;
  username?: string;
  remarks?: string;
  qr_code_url?: string;
  state?: string;
  created_at?: string;
  total_user_count?: number;
  user_count?: number;
  channel_settlement?: {
    id?: string;
    row_index?: number;
    user_count?: number;
    username?: string;
    remarks?: string;
    before_created_at?: string;
    created_at?: string;
  }[];
}

// 渠道编辑/渠道结算 请求
export interface ChannelEditIDParams {
  id: number;
}
// 渠道编辑/渠道结算 数据
export interface ChannelEditResponseData {
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
// 渠道列表 请求
export interface ChannelParams {
  page: number;
  page_size?: number;
  keyword?: string;
  is_enabled?: string;
}
// 渠道列表 数据
export interface ChannelResponseData {
  id?: string;
  name?: string;
  username?: string;
  remarks?: string;
  qr_code_url?: string;
  state?: string;
  created_at?: string;
  total_user_count?: number;
  user_count?: number;
  channel_settlement?: {
    id?: string;
    row_index?: number;
    user_count?: number;
    username?: string;
    remarks?: string;
    before_created_at?: string;
    created_at?: string;
  }[];
}
// 渠道创建 请求
export interface ChannelCreateParams {
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
