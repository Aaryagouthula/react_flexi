import React from 'react';
import { Link } from 'react-router-dom';

const BlogPostList = ({ posts, onEdit, onCreate }) => {
  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {onCreate && (
        <li key="add-post" style={{ marginBottom: '32px', background: '#e9f5ff', padding: '24px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.04)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <button onClick={onCreate} style={{ background: '#007BFF', color: '#fff', border: 'none', borderRadius: 4, padding: '10px 28px', cursor: 'pointer', fontSize: 16, fontWeight: 500 }}>
            + Add New Post
          </button>
        </li>
      )}
      {(!posts || posts.length === 0) ? (
        <li><p>No blog posts found.</p></li>
      ) : (
        posts.map(post => (
          <li key={post.id} style={{ marginBottom: '32px', background: '#fff', padding: '24px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
            <h2 style={{ margin: '0 0 8px 0', color: '#333' }}>{post.title}</h2>
            <p style={{ color: '#666', margin: '0 0 8px 0' }}>{post.summary}</p>
            <p style={{ color: '#999', fontSize: '14px', margin: 0 }}>Published on {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
            <div style={{ marginTop: 12 }}>
              {post.url && (
                <Link to={post.url} style={{ color: '#007BFF', textDecoration: 'underline', fontWeight: 500, marginRight: 16 }}>Read More</Link>
              )}
              {onEdit && (
                <button onClick={() => onEdit(post)} style={{ background: '#28a745', color: '#fff', border: 'none', borderRadius: 4, padding: '6px 16px', cursor: 'pointer', fontSize: 14 }}>Edit</button>
              )}
            </div>
          </li>
        ))
      )}
    </ul>
  );
};

export default BlogPostList;
