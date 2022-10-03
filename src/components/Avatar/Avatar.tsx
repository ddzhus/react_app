import { FC } from 'react';
import styles from './Avatar.module.scss';

type AvatarProps = {
  src: string,
  size: number,
};

export const Avatar: FC<AvatarProps> = ({ src, size }) => (
  <img
    src={src}
    alt="avatar"
    className={styles.avatar}
    width={size}
    height={size}
  />
);
