import React from 'react';

// Styles
import styles from './Comment.module.css';

interface Props {
  key: string | number;
  postId?: string | number;
  id?: string | number;
  email: string;
  name?: string;
  body: string;
}

const Comment: React.FC<Props> = ({ postId, id, email, name, body }) => {
  return (
    <div className={styles.Comment__Container}>
      <div className={styles.Comment__Body}>{body}</div>
      <div className={styles.Comment__Info}>
        <p className={styles.Comment__Info_Email}>from: {email}</p>
      </div>
    </div>
  );
};

export default Comment;
