import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Components
import { Layout } from '../layout';
import { Card, Loading } from '../components';

const PeoplePage: React.FC = () => {
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      const results = await axios('https://jsonplaceholder.typicode.com/users');
      setPeople(results.data);
    };
    fetchUsers();
    setLoading(false);
  }, []);

  return (
    <Layout>
      <div>
        {!loading ? (
          people.map((users, index) => <Card key={index} user={users} buttonText="view posts" />)
        ) : (
          <Loading />
        )}
      </div>
    </Layout>
  );
};

export default PeoplePage;
