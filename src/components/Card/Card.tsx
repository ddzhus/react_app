import { FC } from 'react';
import styles from './Card.module.scss';

type CardProps = {
  className?: string,
};

export const Card: FC<CardProps> = ({ children, className }) => (
  <div className={`${styles.card} ${className}`}>
    {children}
  </div>
);
