// 表情管理
// 表情列表请求
export interface EmojiParams {
  page: number;
  page_size?: number;
  keyword?: string;
}
// 表情列表数据
export interface EmojiResponseData {
  id?: string;
  hex_code?: string;
  dec_code?: string;
  scope?: string;
  remark?: string;
  zh_name?: string;
  en_name?: string;
  state?: string;
  created_at?: string;
  updated_at?: string;
}
