import { Alert, Space, message, Tabs, Form, Input, Button, Checkbox } from 'antd';
import React, { useState } from 'react';
import ProForm, { ProFormCaptcha, ProFormText } from '@ant-design/pro-form';
import { useIntl, Link, history, FormattedMessage, SelectLang, useModel } from 'umi';
import { login } from '@/services/ant-design-pro/api';
import { getFakeCaptcha } from '@/services/ant-design-pro/login';

import { Eye, ShutEye, Me, Lock, Security } from '@/svg/index';
import Icon from '@ant-design/icons';

import classnames from 'classnames';

import styles from './index.less';

const LoginMessage: React.FC<{
  content: string;
}> = ({ content }) => (
  <Alert
    style={{
      marginBottom: 24,
    }}
    message={content}
    type="error"
    showIcon
  />
);

/** 此方法会跳转到 redirect 参数所在的位置 */
const goto = () => {
  if (!history) return;
  setTimeout(() => {
    const { query } = history.location;
    const { redirect } = query as { redirect: string };
    history.push(redirect || '/');
  }, 10);
};

const Login: React.FC = () => {
  const [submitting, setSubmitting] = useState(false);
  const [userLoginState, setUserLoginState] = useState<API.LoginResult>({});
  const [type, setType] = useState<string>('account');
  const { initialState, setInitialState } = useModel('@@initialState');

  const fetchUserInfo = async () => {
    const userInfo = await initialState?.fetchUserInfo?.();
    if (userInfo) {
      setInitialState({
        ...initialState,
        currentUser: userInfo,
      });
    }
  };

  const handleSubmit = async (values: API.LoginParams) => {
    setSubmitting(true);
    try {
      // 登录
      const msg = await login({ ...values, type });
      if (msg.status === 'ok') {
        message.success('登录成功！');
        await fetchUserInfo();
        goto();
        return;
      }
      // 如果失败去设置用户错误信息
      setUserLoginState(msg);
    } catch (error) {
      message.error('登录失败，请重试！');
    }
    setSubmitting(false);
  };
  const { status, type: loginType } = userLoginState;

  return (
    <div className={styles.container}>
      {/* 装饰 */}
      <div className={styles.decorate}>
        <div className={styles.decorateSquare}></div>
        <div className={styles.decorateTop}></div>
        <div className={styles.decorateMain}></div>
        <div className={styles.decorateBottom}></div>
      </div>
      <div className={styles.content}>
        <div className={styles.box}>
          <div className={styles.header}>
            <Link to="/">
              <img alt="logo" className={styles.logo} src="/logo.svg" />
              <span className={styles.title}>云界生态管理平台</span>
            </Link>
          </div>

          <div className={styles.main}>
            <ProForm
              initialValues={{
                autoLogin: true,
              }}
              submitter={{
                searchConfig: {
                  submitText: '登录',
                },
                render: (_, dom) => dom.pop(),
                submitButtonProps: {
                  loading: submitting,
                  className: styles.submitButton,
                },
              }}
              onFinish={async (values) => {
                handleSubmit(values as API.LoginParams);
              }}
            >
              {status === 'error' && loginType === 'account' && (
                <LoginMessage content="账户或密码错误（admin/ant.design)" />
              )}

              {status === 'error' && loginType === 'mobile' && (
                <LoginMessage content="验证码错误" />
              )}
              <ProFormText
                name="username"
                fieldProps={{
                  prefix: <Icon component={Me} className={styles.icon}></Icon>,
                  className: styles.input,
                }}
                placeholder="请输入用户名"
                rules={[
                  {
                    required: true,
                    message: '请输入用户名!',
                  },
                ]}
              />
              <ProFormText.Password
                name="password"
                fieldProps={{
                  prefix: <Icon component={Lock} className={styles.icon} />,
                  iconRender: (visible) => (
                    <Icon component={visible ? Eye : ShutEye} className={styles.icon} />
                  ),
                  className: styles.input,
                }}
                placeholder="请输入密码"
                rules={[
                  {
                    required: true,
                    message: '请输入密码！',
                  },
                ]}
              />
              <div className={styles.captchaInput}>
                <ProFormCaptcha
                  fieldProps={{
                    prefix: <Icon component={Security} className={styles.icon} />,
                    className: styles.input,
                  }}
                  captchaProps={{
                    size: 'large',
                  }}
                  placeholder="请输入验证码"
                  captchaTextRender={(timing, count) => {
                    if (timing) {
                      return `${count} 获取验证码`;
                    }
                    return '获取验证码';
                  }}
                  name="captcha"
                  rules={[
                    {
                      required: true,
                      message: '请输入验证码！',
                    },
                  ]}
                  onGetCaptcha={async (phone) => {
                    const result = await getFakeCaptcha({
                      phone,
                    });
                    if (result === false) {
                      return;
                    }
                    message.success('获取验证码成功！验证码为：1234');
                  }}
                />
              </div>
            </ProForm>
            <div className={styles.footer}>
              <div className={styles.list}>
                <div className={styles.item}>
                  <Link to="/">帮助</Link>
                </div>
                <div className={styles.item}>
                  <Link to="/">隐私</Link>
                </div>
                <div className={styles.item}>
                  <Link to="/">条款</Link>
                </div>
              </div>
              <div className={styles.copyright}>Copyright &copy;169 2020 云界数阵科技有限公司</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
