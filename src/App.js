import React, { useState } from 'react';
import BlogPostList from './BlogPostList';
import BlogPostForm from './BlogPostForm';

const samplePostsData = [
  {
    id: '1',
    title: 'Getting Started with React',
    summary: 'Learn the basics of React and build your first application.',
    content: 'This is the full content for Getting Started with React.',
    author: 'Jane Doe',
    date: '2023-01-01',
    url: '/posts/1',
  },
  {
    id: '2',
    title: 'CSS Grid vs. Flexbox',
    summary: 'A comparison of two powerful layout systems in CSS.',
    content: 'This is the full content for CSS Grid vs. Flexbox.',
    author: 'John Smith',
    date: '2023-02-15',
    url: '/posts/2',
  },
  {
    id: '3',
    title: 'Accessibility in Web Development',
    summary: 'Tips for making your web applications more accessible.',
    content: 'This is the full content for Accessibility in Web Development.',
    author: 'Alex Lee',
    date: '2023-03-10',
    url: '/posts/3',
  }
];

const App = () => {
  const [posts, setPosts] = useState(samplePostsData);
  const [showForm, setShowForm] = useState(false);
  const [editPost, setEditPost] = useState(null);

  const handleCreate = () => {
    setEditPost(null);
    setShowForm(true);
  };

  const handleEdit = (post) => {
    setEditPost(post);
    setShowForm(true);
  };

  const handleFormSubmit = (formData) => {
    if (editPost) {
      setPosts(posts.map(p => p.id === editPost.id ? { ...p, ...formData } : p));
    } else {
      setPosts([
        ...posts,
        { ...formData, id: (posts.length + 1).toString(), summary: formData.content.slice(0, 60) + '...', url: `/posts/${posts.length + 1}` }
      ]);
    }
    setShowForm(false);
    setEditPost(null);
  };

  return (
    <div>
      <h1>Blog Posts</h1>
      <button onClick={handleCreate} style={{ marginBottom: 20, background: '#007BFF', color: '#fff', border: 'none', borderRadius: 4, padding: '10px 24px', cursor: 'pointer', fontSize: 16 }}>Create New Post</button>
      {showForm ? (
        <BlogPostForm post={editPost} onSubmit={handleFormSubmit} />
      ) : (
        <BlogPostList posts={posts} onEdit={handleEdit} onCreate={handleCreate} />
      )}
    </div>
  );
};

export default App;