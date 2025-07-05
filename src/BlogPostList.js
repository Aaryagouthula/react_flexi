import React from 'react';
import { Link } from 'react-router-dom';

const BlogPostList = ({ posts }) => {
  if (!posts || posts.length === 0) {
    return <p>No blog posts found.</p>;
  }
  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {posts.map(post => (
        <li key={post.id} style={{ marginBottom: '32px', background: '#fff', padding: '24px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
          <h2 style={{ margin: '0 0 8px 0', color: '#333' }}>{post.title}</h2>
          <p style={{ color: '#666', margin: '0 0 8px 0' }}>{post.summary}</p>
          <p style={{ color: '#999', fontSize: '14px', margin: 0 }}>Published on {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
          {post.url && (
            <Link to={post.url} style={{ color: '#007BFF', textDecoration: 'underline', fontWeight: 500 }}>Read More</Link>
          )}
        </li>
      ))}
    </ul>
  );
};

export default BlogPostList;
