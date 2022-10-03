import { FC } from 'react';
import styles from './UserInfo.module.scss';

type UserInfoProps = {
  title: string,
  info: string,
};

export const UserInfo: FC<UserInfoProps> = ({ title, info }) => (
  <div className={styles.wrapper}>
    <p className={styles.title}>{title}</p>
    <p>{info}</p>
  </div>
);
