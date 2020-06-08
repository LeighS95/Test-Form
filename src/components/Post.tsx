import React, { useState } from 'react';
import clsx from 'clsx';

// Styles
import styles from './Post.module.css';
import Button from './Button';

interface Props {
  body: string;
  title: string;
  userId?: string | number;
  id?: string | number;
  user: string;
}

const Post: React.FC<Props> = ({ body, title, userId, id, user, children }) => {
  const [visible, setVisible] = useState(false);

  const showComments = () => {
    setVisible(!visible);
  };
  return (
    <div className={styles.Post__Container}>
      <div className={styles.Post__Info}>
        <h3>{title}</h3>
        <p>By: {user}</p>
      </div>
      <div className={styles.Post__Content}>
        <p>{body}</p>
      </div>
      {children ? (
        <div className={styles.Post__Comments_Container}>
          <Button onClick={showComments}>See Comments</Button>
          <div className={clsx(styles.Post__Comments_Dropdown, { [styles.visible]: visible })}>{children}</div>
        </div>
      ) : null}
    </div>
  );
};

export default Post;
