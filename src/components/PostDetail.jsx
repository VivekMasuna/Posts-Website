import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import CommentSection from './CommentSection';
import Loader from './Loader';

const PostDetail = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const handleUserClick = () => {
        navigate(`/user/${post.userId}`);
    };

    useEffect(() => {
        const fetchPost = async () => {
            const res = await fetch(`https://dummyjson.com/posts/${id}`);
            const data = await res.json();
            setPost(data);
            setLoading(false);
        };

        fetchPost();
    }, [id]);

    if (loading) return <Loader />;

    return (
        <div className="post-detail">
            {post && (
                <>
                    <button onClick={() => navigate(-1)} className="go-back-btn">← Go Back</button>
                    <h1>{post.title}</h1>
                    <p className='by-user'>by <span onClick={handleUserClick} style={{ cursor: 'pointer' }}>user{post.userId}</span></p>
                    <p className='post-body'>{post.body}</p>
                    <div className="tags">
                        Tags: &nbsp; {post.tags.map((tag, idx) => (
                            <span key={idx} className="tag">#{tag}</span>
                        ))}
                    </div>
                    <div className="post-info">
                        <span><i class="fa-regular fa-heart"></i> {post.reactions.likes}</span>
                        <span><i class="fa-regular fa-eye"></i> {post.views}</span>
                    </div>
                    <hr />
                    <CommentSection postId={id} />
                </>
            )}
        </div>
    );
};

export default PostDetail;
