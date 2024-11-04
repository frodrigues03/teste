import React, { useEffect, useState } from 'react';
import { fetchPosts } from '../services/apiService';
import { PostData } from '../types/PostData';

const PostList: React.FC = () => {
  const [posts, setPosts] = useState<PostData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const postData = await fetchPosts();
        setPosts(postData);
      } catch (error) {
        console.error('Erro ao buscar posts:', error);
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, []);

  if (loading) return <p>Carregando...</p>;

  return (
    <div>
      <h2>Lista de Posts</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
