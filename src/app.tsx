import type { Settings as LayoutSettings } from '@ant-design/pro-layout';
import { PageLoading } from '@ant-design/pro-layout';
import { notification } from 'antd';
import type { RequestConfig, RunTimeLayoutConfig } from 'umi';
import { history, Link } from 'umi';
import RightContent from '@/components/RightContent';
import Footer from '@/components/Footer';
import type { RequestOptionsInit, ResponseError } from 'umi-request';
import { currentUser as queryCurrentUser } from './services/ant-design-pro/api';
import Icon, { BookOutlined } from '@ant-design/icons';
import { storage } from '@/utils/storage';

// const PassWordSvg = () => (
//   <svg
//     viewBox="0 0 40 40"
//     width="30px"
//     height="30px"
//     version="1.1"
//   >
//     <path
//       fill="#9090a8"
//       d="M 19.4953 3.53275 C 20.2142 4.12447 20.8593 4.79098 21.4348 5.51886 C 22.247 6.54619 22.8846 7.64581 23.3689 8.75075 C 23.5413 9.14419 23.6828 9.51281 23.7964 9.8498 L 23.8795 10.1084 C 23.8909 10.1469 23.9018 10.1855 23.9132 10.2277 L 23.9499 10.3692 L 23.9475 10.3895 C 24.4385 13.1131 24.0374 15.1365 22.7304 16.4458 C 21.8463 17.3159 20.6549 17.7458 19.2868 17.8373 C 18.4132 17.8957 17.6237 17.8135 17.0333 17.6865 C 16.5001 17.6239 16.1077 17.7778 15.8108 18.1456 C 15.5226 18.518 15.4235 19.0499 15.5358 19.3936 C 15.8682 20.4131 15.9154 21.1972 15.6679 21.8052 C 14.9681 23.3562 13.5442 24.15 11.4534 24.15 C 11.0773 24.15 10.6766 24.1229 10.1891 24.0673 L 9.88563 24.0306 L 9.74971 24.0074 C 8.0957 23.7497 6.54533 22.9139 5.12894 21.6831 C 4.12424 20.81 3.44631 20.0023 2.94547 19.2866 C -0.52555 13.8913 0.506436 7.80425 4.65017 3.98453 C 8.77238 0.160002 14.7331 -0.377784 19.4953 3.53275 Z M 6.20233 4.86347 L 5.98414 5.04986 L 5.7737 5.23913 L 5.57781 5.42587 C 2.287 8.63882 1.36986 13.4635 4.17482 18.0738 L 4.3476 18.3501 L 4.308 18.375 L 4.8657 19.0001 C 5.23053 19.402 5.69195 19.8933 6.0893 20.2557 L 6.20135 20.3559 C 7.31406 21.3295 8.49607 22.0027 9.72139 22.2516 L 10.1411 22.3247 C 12.3163 22.6673 13.6061 22.2434 14.1126 21.11 L 14.1252 21.0283 C 14.1543 20.8395 14.1258 20.5366 13.9923 20.0726 L 13.9372 19.8909 C 13.6236 19.0026 13.8546 17.8434 14.4892 17.0465 C 15.0999 16.2623 15.9886 15.8806 17.0637 15.9437 L 17.2811 15.9623 L 17.3018 15.9777 L 17.6644 16.0364 L 17.7442 16.0476 C 18.4503 16.1411 19.1898 16.1478 19.8805 16.0118 C 20.5617 15.8776 21.1294 15.6132 21.5498 15.1982 C 22.4126 14.3403 22.6724 12.8305 22.2957 10.741 C 22.178 10.3505 22.0256 9.92535 21.7651 9.34872 C 21.3528 8.43621 20.8264 7.5325 20.1723 6.6886 C 19.6487 6.01314 19.0613 5.40129 18.4054 4.86678 C 14.5337 1.64381 9.72072 1.936 6.20233 4.86347 Z"
//     />
//     <path
//       fill="#9090a8"
//       d="M 5 12.6501 C 5 13.3953 5.60171 14 6.34314 14 C 7.08458 14 7.68629 13.3953 7.68629 12.6501 C 7.68629 11.9049 7.08458 11.3002 6.34314 11.3002 C 5.59985 11.3002 5 11.9049 5 12.6501 Z M 6.56669 8.60037 C 6.56669 9.34554 7.16841 9.95028 7.90984 9.95028 C 8.65127 9.95028 9.25298 9.34554 9.25298 8.60037 C 9.25298 7.85521 8.65127 7.25047 7.90984 7.25047 C 7.16841 7.25047 6.56669 7.85521 6.56669 8.60037 Z M 10.5961 6.34991 C 10.5961 7.09507 11.1978 7.69981 11.9393 7.69981 C 12.6807 7.69981 13.2824 7.09507 13.2824 6.34991 C 13.2824 5.60474 12.6807 5 11.9393 5 C 11.1978 5 10.5961 5.60474 10.5961 6.34991 Z M 15.0745 7.47514 C 15.0745 8.2203 15.6762 8.82505 16.4177 8.82505 C 17.1591 8.82505 17.7608 8.2203 17.7608 7.47514 C 17.7608 6.72998 17.1591 6.12523 16.4177 6.12523 C 15.6762 6.12523 15.0745 6.72998 15.0745 7.47514 Z M 17.3137 11.0755 C 17.3137 11.8207 17.9154 12.4254 18.6569 12.4254 C 19.3983 12.4254 20 11.8207 20 11.0755 C 20 10.3304 19.3983 9.72561 18.6569 9.72561 C 17.9154 9.72561 17.3137 10.3304 17.3137 11.0755 L 17.3137 11.0755 Z"
//     />
//   </svg>
// );
// const PassWordIcon = (props) => <Icon component={PassWordSvg} {...props} />;

const isDev = process.env.NODE_ENV === 'development';
const loginPath = '/user/login';

/** 获取用户信息比较慢的时候会展示一个 loading */
export const initialStateConfig = {
  loading: <PageLoading />,
};

/**
 * @see  https://umijs.org/zh-CN/plugins/plugin-initial-state
 * */
export async function getInitialState(): Promise<{
  settings?: Partial<LayoutSettings>;
  currentUser?: API.CurrentUser;
  fetchUserInfo?: () => Promise<API.CurrentUser | undefined>;
}> {
  const fetchUserInfo = async () => {
    try {
      const currentUser = await queryCurrentUser();
      return currentUser;
    } catch (error) {
      history.push(loginPath);
    }
    return undefined;
  };
  // 如果是登录页面，不执行
  if (history.location.pathname !== loginPath) {
    const currentUser = await fetchUserInfo();
    return {
      fetchUserInfo,
      currentUser,
      settings: {},
    };
  }
  return {
    fetchUserInfo,
    settings: {},
  };
}

// https://umijs.org/zh-CN/plugins/plugin-layout
export const layout: RunTimeLayoutConfig = ({ initialState }) => {
  return {
    rightContentRender: () => <RightContent />,
    disableContentMargin: true,
    waterMarkProps: {
      content: initialState?.currentUser?.name,
    },
    footerRender: () => <Footer />,
    onPageChange: () => {
      // const { location } = history;
      // // 如果没有登录，重定向到 login
      // if (!initialState?.currentUser && location.pathname !== loginPath) {
      //   history.push(loginPath);
      // }
    },
    links: isDev
      ? [
          <Link to="/welcome">
            {/* <PassWordIcon style={{ paddingTop: '10px' }} /> */}
            {/* <div className="app-notice-icon"></div> */}
          </Link>,
          <Link to="/welcome">
            <BookOutlined />
            <span>业务组件文档</span>
          </Link>,
        ]
      : [],
    menuHeaderRender: undefined,
    // 自定义 403 页面
    // unAccessible: <div>unAccessible</div>,
    ...initialState?.settings,
  };
};

const codeMessage = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  405: '请求方法不被允许。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。',
};

/** 异常处理程序
 * @see https://beta-pro.ant.design/docs/request-cn
 */
const errorHandler = (error: ResponseError) => {
  const { response } = error;
  if (response && response.status) {
    // const errorText = codeMessage[response.status] || response.statusText;
    // const { status, url } = response;
    // notification.error({
    //   message: `请求错误 ${status}: ${url}`,
    //   description: errorText,
    // });
  }

  if (!response) {
    notification.error({
      description: '您的网络发生异常，无法连接服务器',
      message: '网络异常',
    });
  }
  throw error;
};

const tokenInterceptor = (url: string, options: RequestOptionsInit) => {
  const token = { 'x-auth-token': storage.get('token') };
  return {
    url: `${url}`,
    options: { ...options, interceptors: true, headers: token },
  };
};

// https://umijs.org/zh-CN/plugins/plugin-request
export const request: RequestConfig = {
  errorHandler,
  requestInterceptors: [tokenInterceptor],
};
