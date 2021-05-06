import React, { useState, useEffect, useRef } from 'react';
import styles from './index.less';
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
  const displayRef = useRef(null);
  useEffect(() => {
    function handler(event) {
      if (!displayRef.current?.contains(event.target)) {
        setDisplay(false);
      }
    }
    window.addEventListener('click', handler);
    return () => window.removeEventListener('click', handler);
  }, []);

  return (
    <div
      className={styles.userIconBox}
      style={{ display: isDisplay ? 'block' : 'none' }}
      ref={displayRef}
    >
      <div className={styles.userIconHeader}>
        <div className={styles.userIconAvatar}>
          <img></img>
        </div>
        <div className={styles.userIconNickname}>
          <p>财神爷</p>
          <p>您的个人中心</p>
        </div>
      </div>
      <div className={styles.userIconCenter}>
        <div className={styles.userIconInformation}>
          <span>个人信息</span>
        </div>
        <div className={styles.userIconInformationBox}>
          <p>手机号码</p>
          <p>17638827698</p>
        </div>
        <div className={styles.userIconInformationBox}>
          <p>电子邮箱</p>
          <p>未绑定</p>
        </div>
      </div>
      <div className={styles.userIconFooter}>
        <div className={styles.userIconBtn + ' ' + styles.userIconDivide}>
          <div
            className={styles.userIconHover}
            onClick={() => {
              setVisible(true);
              setDisplay(false);
            }}
          >
            <div className={styles.userIcon + ' ' + styles.userCenter}></div>
            <div className={styles.userText}>用户中心</div>
          </div>
        </div>
        <div className={styles.userIconBtn}>
          <div className={styles.userIconHover}>
            <div className={styles.userIcon + ' ' + styles.userAbort}></div>
            <div
              onClick={() => {
                console.log(123);
              }}
              className={styles.userText}
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
export default UserIcon;
