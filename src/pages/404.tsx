import React from 'react';
import styles from './error.less'

const NoFoundPage: React.FC = () => (
  <div className={styles.container}>
    <img src={require('../assets/image/404.png')} alt="" />
    <span>抱歉，网络出错了～</span>
  </div> 
)
 

export default NoFoundPage;
