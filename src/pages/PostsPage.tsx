import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Components
import { Layout } from '../layout';
import { Card, Loading } from '../components';

interface MatchParams {
  match: Params;
}

interface Params {
  params: id;
}

interface id {
  id: string;
}

interface Person {
  name: string;
}

type Posts = {
  userId: string | number;
  id: string | number;
  title: string;
  body: string;
};

type Comment = [{ postId: string | number; id: string | number; name: string; body: string; email: string }];

const initialPerson: Person = {
  name: ''
};

const initialPost: Posts = {
  userId: '',
  id: '',
  title: '',
  body: ''
};
const initialComment: Comment = [
  {
    postId: '',
    id: '',
    name: '',
    body: '',
    email: 'string'
  }
];
const PostsPage: React.FC<MatchParams> = ({ match }) => {
  const [loading, setLoading] = useState(true);
  const [person, setPerson] = useState(initialPerson);
  const [posts, setPosts] = useState([initialPost]);
  const [comments, setComments] = useState([initialComment]);

  useEffect(() => {
    const fetchPerson = async () => {
      const personResult = await axios(`https://jsonplaceholder.typicode.com/users/${match.params.id}`);
      setPerson(personResult.data);
    };
    const fetchComments = async (postId) => {
      const commentResults = await axios(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
      setComments((comments) => [...comments, ...commentResults.data]);
    };
    const fetchPostsAndComments = async () => {
      const postResults = await axios(`https://jsonplaceholder.typicode.com/users/${match.params.id}/posts`);
      setPosts(postResults.data);
      postResults.data.forEach((post) => {
        fetchComments(post.id);
      });
      setLoading(false);
    };
    fetchPerson();
    fetchPostsAndComments();
  }, []);
  return (
    <Layout>
      <div>
        {!loading ? (
          posts.map((post, index) => <Card key={index} user={person} post={post} comments={comments} />)
        ) : (
          <Loading />
        )}
      </div>
    </Layout>
  );
};

export default PostsPage;
