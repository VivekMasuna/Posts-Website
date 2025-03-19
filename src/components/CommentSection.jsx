import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GoCommentDiscussion } from "react-icons/go";
import { LiaHeart, LiaUserCircle } from "react-icons/lia";
import { FidgetSpinner } from 'react-loader-spinner'

const CommentSection = ({ postId }) => {
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [newComment, setNewComment] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const fetchComments = async () => {
            try {
                const res = await fetch(`https://dummyjson.com/posts/${postId}/comments`);
                const data = await res.json();
                setComments(data.comments);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching comments:", error);
                setLoading(false);
            }
        };

        fetchComments();
    }, [postId]);

    // const handleAddComment = () => {
    //     if (newComment.trim()) {
    //         const newCommentObj = {
    //             id: comments.length + 1,
    //             body: newComment,
    //             user: { username: "guest" },
    //             likes: 0
    //         };
    //         setComments([...comments, newCommentObj]);
    //         setNewComment("");
    //     }
    // };

    if (loading) {
        return (
            <div className="comments-loader">
                {/* <FidgetSpinner
                    visible={true}
                    height="80"
                    width="80"
                    ariaLabel="fidget-spinner-loading"
                    wrapperStyle={{}}
                    wrapperClass="fidget-spinner-wrapper"
                /> */}
                Loading Comments...
            </div>
        );
    }

    const handleUserClick = (userId) => {
        navigate(`/user/${userId}`);
    };

    return (
        <div className="comments-container">
            <h3 className="comments-header">
                <GoCommentDiscussion className='go-comments' /> Comments: {comments?.length}
            </h3>

            {comments.map((comment) => (
                <div key={comment.id} className="comment-card">
                    <div className="comment-header" onClick={() => handleUserClick(comment.user.id)} style={{ cursor: 'pointer' }}>
                        <LiaUserCircle className="user-icon" />
                        <strong>{comment.user.username}</strong>
                    </div>
                    <p className="comment-body">{comment.body}</p>
                    <div className="comment-footer">
                        <LiaHeart className="like-icon" />
                        <span>{comment.likes}</span>
                    </div>
                </div>
            ))}

            <div className="add-comment">
                <div className="comment-header">
                    <LiaUserCircle className="user-icon" />
                    <strong>guest</strong>
                </div>
                <textarea
                    placeholder="Write a comment..."
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                />
                {/* <button onClick={handleAddComment}>Add Comment</button> */}
                <button>Add Comment</button>
            </div>
        </div>
    );
};

export default CommentSection;
