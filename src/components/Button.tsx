import React from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

// Styles
import styles from './Button.module.css';

interface Props {
  link?: string;
  large?: boolean;
  submit?: boolean;
  onClick?: (e: any) => void;
}

const Button: React.FC<Props> = ({ link, large, submit, onClick, children }) => {
  const button = submit ? (
    <button className={clsx(styles.Button, { [styles.Large]: large })} type="submit">
      {children}
    </button>
  ) : link ? (
    <button className={clsx(styles.Button, { [styles.Large]: large })}>
      <Link to={link}>{children}</Link>
    </button>
  ) : (
    <button className={clsx(styles.Button, { [styles.Large]: large })} onClick={onClick}>
      {children}
    </button>
  );
  return button;
};

Button.defaultProps = {
  submit: false
};

export default Button;
