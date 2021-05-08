import React from 'react';
import styles from './error.less'

const UnauthorizedPage: React.FC = () => (
  <div className={styles.container}>
    <img src={require('../assets/image/403.png')} alt="" />
    <span>抱歉，你没有权限呢～</span>
  </div> 
);

export default UnauthorizedPage;
