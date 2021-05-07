import { Result } from 'antd';
import { urlencoded } from 'express';
import React from 'react';
import styles from './error.less'


const NoFoundPage: React.FC = () => (
  <div className={styles.container}>
    {/* <Result
      icon={'../assets/image/404.png'}
      status="404"
      title="抱歉，网络出错了～"

    /> */}
    <img src={require('../assets/image/404.png')} alt="" />
    <span>抱歉，网络出错了～</span>
  </div> 
  
);

export default NoFoundPage;
