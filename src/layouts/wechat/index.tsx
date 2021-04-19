import type { RouteComponentProps, StaticContext } from 'react-router';
import type { PropsWithChildren, ReducerStateWithoutAction } from 'react';
import React, { useEffect, useReducer, useState } from 'react';
import _ from 'lodash';
import type { AppContextProps } from '@/hooks/context/layouts/wechat';
import { AppContext } from '@/hooks/context/layouts/wechat';
import type {
  WechatLayoutReducerActionType,
  WechatLayoutReducerArgType,
} from '@/hooks/reducer/layouts/wechat';
import { wechatLayoutReducer } from '@/hooks/reducer/layouts/wechat';
import storage from '@/utils/storage';
import type * as H from 'history';
import type { HttpResponseData } from '@/types/reponse';
import type { UserInfoResponseType } from '@/types/user';
import { Toast } from 'antd-mobile';

interface WechatLayoutParams {}
type WechatLayoutStaticContext = StaticContext;
interface WechatLayoutLocationState {}
interface WechatLayoutLocation extends H.Location<WechatLayoutLocationState> {
  query?: {
    code?: string;
    state?: string;
  };
}

interface WechatLayoutProps
  extends RouteComponentProps<
    WechatLayoutParams,
    WechatLayoutStaticContext,
    WechatLayoutLocationState
  > {
  location: WechatLayoutLocation;
}

// const useWechatLogin = (reload: boolean): Array<any> => {
//   const [loading, setLoading] = useState(true);
//   useEffect(() => {
//     setLoading(true)
//   }, [reload])
//   return [loading]
// }

const Index: React.FC<WechatLayoutProps> = (props: PropsWithChildren<WechatLayoutProps>) => {
  const { location } = props;
  const [loading, setLoading] = useState(true);
  const accessToken = storage.get('accessToken');
  const [hasAccessToken, setHasAccessToken] = useState<boolean>(!!accessToken);
  const [app, setApp] = useState<AppContextProps>({
    currentPage: null,
    prevPage: null,
    userInfo: null,
    updateRoutes,
    updateUserInfo,
  });

  /**
   * 更新路由
   * @param location
   */
  function updateRoutes() {
    const currentPage = _.get(app, 'currentPage', null);
    setApp({ ...app, prevPage: currentPage, currentPage: location });
  }

  /**
   * 更新用户信息
   */
  async function updateUserInfo() {
    const { data: userInfo }: HttpResponseData<UserInfoResponseType> = await getUserInfo();
    setApp({ ...app, userInfo });
    setLoading(false);
  }

  // reducer调用示例
  const [wechatLayoutReducerState, wechatLayoutReducerDispatch] = useReducer<
    WechatLayoutReducerActionType,
    WechatLayoutReducerArgType
  >(
    wechatLayoutReducer,
    {
      loaded: false,
    },
    (
      arg: WechatLayoutReducerArgType,
    ): ReducerStateWithoutAction<WechatLayoutReducerActionType> => {},
  );

  // 路由守卫
  useEffect(
    function () {
      updateRoutes();
    },
    [location],
  );

  // 有 accessToken 下的操作
  useEffect(
    function () {
      hasAccessToken && updateUserInfo();
    },
    [hasAccessToken],
  );

  useEffect(() => {
    if (!hasAccessToken) {
      document.title = '微信授权';
      const code = _.get(props, 'location.query.code', null);
      const state = _.get(props, 'location.query.state', null);
      Toast.loading('loading....');
      if (code && state) {
        wechatLayoutReducerDispatch({ type: 'getAccessToken', wxCode: code, wxState: state });
      } else {
        wechatLayoutReducerDispatch({
          type: 'wechatAuthorization',
          routeString: `${props.location.pathname}`,
        });
      }
    }
  }, []);

  if (wechatLayoutReducerState) {
    wechatLayoutReducerState.then((r) => {
      setHasAccessToken(_.get(r, 'loaded', false));
      Toast.hide();
    });
  }

  return (
    <>
      {hasAccessToken && !loading ? (
        <AppContext.Provider value={app}>{props.children}</AppContext.Provider>
      ) : (
        <></>
      )}
    </>
  );
};

export default Index;
