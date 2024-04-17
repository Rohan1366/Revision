import React from 'react';
import useFetch from '../CustomHooks/useFetch';

const PostsList = () => {
  const { data, isLoading, error } = useFetch('https://jsonplaceholder.typicode.com/posts');

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h2>Posts List</h2>
      <ul>
        {data.map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>: {post.body}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsList;
