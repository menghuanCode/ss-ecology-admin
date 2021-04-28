// 举报配置接口
// 评论/回复举报详情请求
export interface ReportDetailsParams {
  id: number;
}
//  评论/回复举报详情数据
export interface ReportDetailsResponseData {
  id?: number;
  name?: string;
  count?: number;
}
// 文章举报详情请求
export interface ReportArticleDetailsParams {
  path_article_id: string;
}
//  文章举报详情数据
export interface ReportArticleDetailsResponseData {
  id?: number;
  name?: string;
  count?: number;
}
// 举报配置列表请求
export interface ReportParams {
  page: number;
  page_size?: number;
}
//  举报配置列表数据
export interface ReportResponseData {
  id?: number;
  content?: string;
  created_at?: string;
}
// 举报配置创建请求
export interface ReportParams {
  content?: string;
  img_url?: string;
  description?: string;
}
