// 首页接口
// 日活列表请求
export interface HomeParams {
  page: number;
  page_size?: number;
}
// 日活列表数据
export interface HomeResponseData {
  key?: string;
  value?: number;
}
// 文章数量相关请求
export interface HomeArticleParams {
  page: number;
  page_size?: number;
}
// 文章数量相关数据
export interface HomeArticleResponseData {
  day_login_count?: string;
  user_count?: string;
  register_count?: string;
  follow_count?: string;
  interaction_count?: string;
  share_count?: string;
  article_count?: string;
  article_comment_count?: string;
  article_not_passed_count?: string;
  article_passed_count?: string;
  article_post_count?: string;
  article_update_count?: string;
  like_count?: string;
  user_count_line?: {
    key?: string;
    value?: number;
  }[];
  user_login_line?: {
    key?: string;
    value?: number;
  }[];
  user_register_line?: {
    key?: string;
    value?: number;
  }[];
  user_count_line_total?: number;
  user_login_line_total?: number;
  user_register_line_total?: number;
  article_day_count_line: {
    key?: string;
    value?: {
      like_count?: number;
      comment_count?: number;
      share_count?: number;
      update_count?: number;
    };
  }[];
  code?: number;
}
// 用户数量相关请求
export interface HomeUserParams {
  page: number;
  page_size?: number;
}
// 用户数量相关数据
export interface HomeUserResponseData {
  day_login_count?: string;
  user_count?: string;
  register_count?: string;
  follow_count?: string;
  interaction_count?: string;
  share_count?: string;
  article_count?: string;
  article_comment_count?: string;
  article_not_passed_count?: string;
  article_passed_count?: string;
  article_post_count?: string;
  article_update_count?: string;
  like_count?: string;
  user_count_line?: {
    key?: string;
    value?: number;
  }[];
  user_login_line?: {
    key?: string;
    value?: number;
  }[];
  user_register_line?: {
    key?: string;
    value?: number;
  }[];
  user_count_line_total?: number;
  user_login_line_total?: number;
  user_register_line_total?: number;
  article_day_count_line?: {
    key?: string;
    value?: {
      like_count?: number;
      comment_count?: number;
      share_count?: number;
      update_count?: number;
    };
  }[];
  code?: number;
}
// 话题统计列表请求
export interface HomeTagParams {
  page: number;
  page_size?: number;
}
// 话题统计列表数据
export interface HomeTagResponseData {
  name?: string;
  article_count?: string;
  article_author_count?: string;
  interaction_count?: string;
}
// 圈子统计列表请求
export interface HomeCommunityParams {
  page: number;
  page_size?: number;
}
// 圈子统计列表数据
export interface HomeCommunityResponseData {
  name?: string;
  article_count?: string;
  article_author_count?: string;
  interaction_count?: string;
}

// 日志列表 请求
export interface HomeLogParams {
  page: number;
  page_size?: number;
  keyword?: string;
  begin_time?: string;
  end_time?: string;
  log_type?: string;
}
// 日志列表 数据
export interface HomeLogResponseData {
  id?: string;
  user_id?: string;
  role_id?: string;
  role_name?: string;
  who?: string;
  when?: string;
  where?: string;
  util?: string;
  what?: string;
  op_type?: string;
  op_type_name?: string;
}
// 日志分类列表 请求
export interface HomeLogTypeParams {
  page: number;
  page_size?: number;
  keyword?: string;
}
// 日志分类列表 数据
export interface HomeLogTypeResponseData {
  id?: string;
  key?: string;
  name?: string;
  children?: {}[];
}
