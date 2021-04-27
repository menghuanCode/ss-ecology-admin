import { Button, Form, Input, Tabs } from 'antd';
import Icon from '@ant-design/icons';
import imgURL from '../../../assets/image/123.png';
import './personalCenter.less';
//图标
const PhoneSvg = () => (
  <svg viewBox="0 0 21 21" width="21px" height="21px">
    <path
      fill="#d9d9d9"
      d="M 4.40625 7 C 4.40625 3.68615 7.0924 1 10.4063 1 C 13.7201 1 16.4063 3.68615 16.4063 7 C 16.4063 10.3138 13.7201 13 10.4063 13 C 7.0924 13 4.40625 10.3138 4.40625 7 Z M 3 17.15 C 3 15.576 4.2592 14.3 5.8125 14.3 L 15.1875 14.3 C 16.7408 14.3 18 15.576 18 17.15 C 18 18.724 16.7408 20 15.1875 20 L 5.8125 20 C 4.25906 20 3 18.7208 3 17.15 Z"
    />
  </svg>
);
const CodeSvg = () => (
  <svg width="21px" height="21px" viewBox="0 0 21 21" version="1.1">
    <path
      d="M19,5.33516064 C18.9396731,4.78055274 18.5031449,4.32618054 17.9204941,4.21152749 C16.7392903,4.03765133 15.5726141,3.78618042 14.4291058,3.45897713 C13.3092933,3.02897568 12.2592793,2.45431369 11.3096294,1.75171937 C10.8116508,1.41609354 10.140289,1.41609354 9.64231037,1.75171937 C8.74334866,2.5302126 7.66923761,3.10985216 6.49917363,3.44790003 C5.41575794,3.86734997 4.27126324,4.13222536 3.10390571,4.23368169 C2.5084732,4.32376899 2.0625221,4.79309262 2.03622999,5.35731484 C2.03622999,5.35731484 2,8.17712866 2,10.659091 C2,15.1522389 7.66223034,19.5 10.4940849,19.5 C13.3252001,19.5 18.1245651,16.4330284 18.8920494,10.7269382 C19.0842902,7.35673107 18.9512004,5.34623774 18.9512004,5.34623774 L19,5.33446833 L19,5.33516064 Z M15.9167537,8.80575398 L10.0016527,14.0292981 C9.73547321,14.2667634 9.32881002,14.3041486 9.01826722,14.1192995 L8.86299582,13.9953745 L5.5993389,10.8169396 C5.29450376,10.5068481 5.31585552,10.0240829 5.6470294,9.73865335 C5.97820328,9.45322383 6.49379047,9.47321635 6.79862561,9.7833079 L9.48629958,12.4231189 L14.8128479,7.70496735 C15.027212,7.52032681 15.3304941,7.45679356 15.6084509,7.53829995 C15.8864077,7.61980634 16.096811,7.83396962 16.1604038,8.10011654 C16.2239966,8.36626346 16.1311177,8.64395997 15.9167537,8.8286005 L15.9167537,8.80575398 L15.9167537,8.80575398 Z"
      fill="#D9D9D9"
    />
  </svg>
);
const PassWordSvg = () => (
  <svg width="21px" height="21px" viewBox="0 0 21 21" version="1.1">
    <g
      id="编组"
      transform="translate(10.500000, 11.000000) scale(-1, 1) translate(-10.500000, -11.000000) translate(3.000000, 2.000000)"
      fill="#D9D9D9"
    >
      <path d="M7.5442801,2.06855321 C9.28870998,2.06855321 10.7262685,3.34595456 10.9445797,5 L13,5 C12.7569743,2.20007971 10.388504,0 7.49897023,0 C4.60943644,0 2.24302565,2.20007971 2,5 L4.14604007,5 C4.36023217,3.34595456 5.79985022,2.06855321 7.5442801,2.06855321 Z M12.7152183,6 L2.28274174,6 C1.02203182,6 0,7.02962836 0,8.29970885 L0,15.7002911 C0,16.9703716 1.02203182,18 2.28274174,18 L12.7172583,18 C13.9800082,18 15,16.9703716 15,15.7002911 L15,8.301764 C15,7.03168351 13.9759282,6 12.7152183,6 Z M8.56417489,11.3976957 L8.56417489,13.0127135 C8.56417489,13.5589988 8.09238364,14 7.51269394,14 C6.93088858,14 6.46121298,13.5570123 6.46121298,13.0127135 L6.46121298,11.4215336 C6.17771509,11.1652761 6,10.8077076 6,10.4084227 C6,9.63170441 6.67277856,9 7.5,9 C8.32722144,9 9,9.63170441 9,10.4084227 C8.99576869,10.7938021 8.83074753,11.1434247 8.56417489,11.3976957 L8.56417489,11.3976957 Z" />
    </g>
  </svg>
);
const PassWordIcon = (props) => <Icon component={PassWordSvg} {...props} />;
const PhoneIcon = (props) => <Icon component={PhoneSvg} {...props} />;
const CodeIcon = (props) => <Icon component={CodeSvg} {...props} />;
// 表单

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 0, span: 16 },
};
/* eslint-disable no-template-curly-in-string */
const onFinish = (values: any) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};

// 头像
const ImageAvatar = () => {
  return (
    <div className="ImageAvatar-box">
      <img className="Image-Avatar" src={imgURL}></img>
      {/* <Avatar size={64} icon={<UserOutlined />} /> */}
      <div className="Image-Avatar-btn">
        <span
          className="Image-Avatar-btn-modify"
          onClick={() => {
            console.log('更换头像');
          }}
        >
          修改
        </span>
      </div>
    </div>
  );
};

const PersonalCenter = () => {
  const { TabPane } = Tabs;
  return (
    <>
      <Tabs tabPosition="left" animated={false}>
        <TabPane tab="基本设置" key="1" style={{ paddingLeft: '48px' }}>
          <ImageAvatar />
          <div className="center-Basic-Information">
            <span>基本信息</span>
          </div>
          <div className="center-Basic-Information-box">
            <p>手机号码</p>
            <p>手机号码123</p>
          </div>
          <div className="center-Basic-Information-box">
            <p>电子昵称</p>
            <p>手机号码123</p>
          </div>
          <div className="center-Basic-Information-box">
            <p>用户昵称</p>
            <p>手机号码123</p>
          </div>
        </TabPane>
        <TabPane tab="修改密码" key="2" style={{ paddingLeft: '48px' }}>
          <div className="center-Basic-Information">
            <span>设置密码</span>
          </div>
          <Form
            {...layout}
            name="nest-messages"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              rules={[
                {
                  required: true,
                  message: '请输入手机号',
                },

                {
                  max: 11,
                  message: '最长11位!',
                },

                {
                  pattern: /^1[3|4|5|6|7|8|9]\d{9}$/,
                  message: '请输入正确的手机号',
                },
              ]}
              name="phone"
            >
              <Input
                placeholder="请输入手机号"
                prefix={<PhoneIcon />}
                size="large"
                maxLength={11}
              />
            </Form.Item>

            <div className="input-affix-code-box">
              <Form.Item
                name="code"
                rules={[
                  { required: true, message: '请输入验证码' },
                  {
                    pattern: /^[1-9]\d*$/,
                    message: '请输入正确的验证码',
                  },
                  {
                    max: 6,
                    message: '最长6位!',
                  },
                ]}
              >
                <Input
                  placeholder="请输入验证码"
                  prefix={<CodeIcon />}
                  className="ant-input-affix-code"
                  bordered
                  maxLength={6}
                  size="large"
                />
              </Form.Item>
              <button
                type="button"
                className="center-obtain-code"
                onClick={() => {
                  console.log(1123);
                }}
              >
                获取验证码
              </button>
            </div>
            <Form.Item rules={[{ required: true, message: '请输入新密码' }]} name="password">
              <Input.Password placeholder="请输入新密码" prefix={<PassWordIcon />} size="large" />
            </Form.Item>
            <Form.Item
              rules={[
                { required: true, message: '请再次输入新密码' },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error('两次输入密码不一致!'));
                  },
                }),
              ]}
              name="passwordto"
              dependencies={['password']}
            >
              <Input.Password
                placeholder="请再次输入新密码"
                prefix={<PassWordIcon />}
                size="large"
              />
            </Form.Item>
            <Form.Item {...tailLayout}>
              <Button
                type="primary"
                htmlType="submit"
                style={{
                  width: '362px',
                  height: '52px',
                  background: '#703beb',
                  borderRadius: '8px',
                }}
              >
                保持
              </Button>
            </Form.Item>
          </Form>
        </TabPane>
      </Tabs>
    </>
  );
};

export default PersonalCenter;