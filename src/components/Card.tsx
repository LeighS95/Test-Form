import React from 'react';
import Button from './Button';

// Styles
import styles from './Card.module.css';
import Comment from './Comment';
import Post from './Post';

interface Props {
  user?: user;
  post?: any;
  buttonText?: string;
  comments?: any;
}

// Mapped to data pulled from API
type user = {
  id?: string;
  name: string;
  username?: string;
  email?: string;
};

// Set format of Post
type post = {
  userId: string | number;
  id: string | number;
  title: string;
  body: string;
};

// Set format of Post Comments
type comments = [
  {
    postId: string | number;
    id: string | number;
    name: string;
    body: string;
  }
];

const Card: React.FC<Props> = ({ user, post, buttonText, comments }) => {
  return (
    <div className={styles.Card__Container}>
      {user !== undefined ? (
        <div className={styles.Card__Title}>
          <h3>{user.name}</h3>
          <p>{user.username}</p>
        </div>
      ) : null}

      {post && user ? (
        <div className={styles.Card__Content}>
          <Post userId={post.userId} title={post.title} body={post.body} user={user.name}>
            {comments !== undefined ? (
              <div className={styles.Card__Content_Commentwrapper}>
                {Object.keys(comments).map((key, index) => {
                  const properties = comments[key];
                  if (properties !== null) {
                    const { postId, body, email } = properties;
                    if (post.id === postId) {
                      return <Comment key={index} email={email} body={body} />;
                    }
                    return;
                  }
                  return;
                })}
              </div>
            ) : null}
          </Post>
        </div>
      ) : null}
      {buttonText && user ? <Button link={`/people/${user.id}/posts`}>{buttonText}</Button> : null}
    </div>
  );
};

export default Card;
