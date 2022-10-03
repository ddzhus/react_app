import { FC, MouseEvent } from 'react';
import styles from './Button.module.scss';

type ButtonProps = {
  onClick(event: MouseEvent): void;
};

export const Button: FC<ButtonProps> = ({ children, onClick, ...rest }) => (
  <button
    type="button"
    className={styles.button}
    onClick={onClick}
    {...rest}
  >
    { children }
  </button>
);
