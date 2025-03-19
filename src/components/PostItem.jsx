import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const PostItem = ({ post }) => {
    const navigate = useNavigate();

    const handleUserClick = () => {
        navigate(`/user/${post.userId}`);
    };

    return (
        <div className="post-card">
            <div className="user">
                <div className="userId" onClick={handleUserClick} style={{ cursor: 'pointer' }}>
                    <i class="fa-solid fa-circle-user"></i>
                    <p>user{post.userId}</p>
                </div>
                <Link to={`/posts/${post.id}`}>See post →</Link>
            </div>
            <h3 className='post-title'>{post.title}</h3>
            <p className='post-body'>{post.body.slice(0, 200)}...</p>
            <div className="tags">
                {post.tags.map((tag, idx) => (
                    <span key={idx} className="tag">#{tag}</span>
                ))}
            </div>
            <div className="post-info">
                <span><i class="fa-regular fa-heart"></i> {post.reactions.likes}</span>
                <span><i class="fa-regular fa-eye"></i> {post.views}</span>
            </div>
        </div>
    );
};

export default PostItem;
