// @ts-ignore
/* eslint-disable */

declare namespace API {
  // AI账号列表请求
  type AiAccountParams = {
    page: number; // 页码第几页
    page_size?: number; // 每页加载的数据条数默认20 不超过100
    keyword?: string; // 搜索关键字
    order_by?: string; // 排序字段名称
    sort_by?: string; // 排序方向 asc升序 desc降序
    query_id?: string; //
  };
  // AI账号列表数据
  type AiAccountResponseData = {
    captcha?: string;
    created_at?: string;
    end_at?: string;
    id?: number;
    phone?: string;
    state?: string;
    usage?: string;
    username?: string;
  };

  // AI账号编辑请求
  type AiAccountEditParams = {
    id: number;
  };
  // AI账号编辑数据
  type AiAccountEditResponseData = {
    captcha?: string;
    end_at?: string; // 结束时间
    phone?: string; // 手机号
    usage?: string; // 用途
    username?: string;
  };
  // AI账号创建请求
  type AiAccountCreateParams = {
    captcha?: string;
    end_at?: string; // 结束时间
    phone?: string; // 手机号
    usage?: string; // 用途
    username?: string;
  };
  // AI账号启用请求
  type AiAccountEnableParams = {
    id: number;
  };
  // AI账号禁用请求
  type AiAccountDisableParams = {
    id: number;
  };
  // AI账号删除请求
  type AiAccountDeleteParams = {
    id: number;
  };
}
