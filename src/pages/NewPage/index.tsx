// import React from 'react';
import { Button } from 'antd';
// import UserIcon from './components/userIcon';

import React, { useState } from 'react';
import './index.less';
import { Modal } from 'antd';
import PersonalCenter from './components/personalCenter';

interface Values {
  title: string;
  description: string;
  modifier: string;
}
interface CollectionCreateFormProps {
  visible: boolean;
  onCreate: (values: Values) => void;
  onCancel: () => void;
}
interface UserIconFormProps {
  isDisplay: boolean;
  setDisplay: (values: boolean) => void;
}

const CollectionCreateForm: React.FC<CollectionCreateFormProps> = (
  { visible, onCancel },
  ...props
) => {
  return (
    <Modal
      visible={visible}
      title="个人中心"
      okText="Create"
      cancelText="Cancel"
      centered
      width={1019}
      onCancel={onCancel}
      footer={
        [] // 设置footer为空，去掉 取消 确定默认按钮
      }
    >
      <PersonalCenter />
    </Modal>
  );
};

const UserIcon: React.FC<UserIconFormProps> = ({ isDisplay, setDisplay }) => {
  const [visible, setVisible] = useState(false);

  const onCreate = (values: any) => {
    console.log('Received values of form: ', values);
    setVisible(false);
  };
  return (
    <div className="user-icon-box" style={{ display: isDisplay ? 'block' : 'none' }}>
      <div className="user-icon-header">
        <div className="user-icon-avatar"><img></img></div>
        <div className="user-icon-nickname">
          <p>财神爷</p>
          <p>您的个人中心</p>
        </div>
      </div>
      <div className="user-icon-center">
        <div className="center-icon-Information">
          <span>个人信息</span>
        </div>
        <div className="center-icon-Information-box">
          <p>手机号码</p>
          <p>17638827698</p>
        </div>
        <div className="center-icon-Information-box">
          <p>电子邮箱</p>
          <p>未绑定</p>
        </div>
      </div>
      <div className="user-icon-footer">
        <div className="user-icon-btn user-icon-divide">
          <div
            className="user-btn-hover"
            onClick={() => {
              setVisible(true);
              setDisplay(false);
            }}
          >
            <div className="user-icon user-center"></div>
            <div className="user-text">用户中心</div>
          </div>
        </div>
        <div className="user-icon-btn">
          <div className="user-btn-hover">
            <div className="user-icon user-abort"></div>
            <div
              onClick={() => {
                console.log(123);
              }}
              className="user-text"
            >
              退出登录
            </div>
          </div>
        </div>
      </div>
      <CollectionCreateForm
        visible={visible}
        onCreate={onCreate}
        onCancel={() => {
          setVisible(false);
        }}
      />
    </div>
  );
};
const NewPage = () => {
  const [isDisplay, setDisplay] = useState(false);
 
  return (
    <div>
      <Button
        type="primary"
        onClick={() => {
          setDisplay(true);
        }}
      >
        个人中心
      </Button>
      <UserIcon setDisplay={setDisplay} isDisplay={isDisplay} />
    </div>
  );
};

export default NewPage;
