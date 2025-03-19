import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PostItem from './PostItem';
import Loader from './Loader';

const UserProfile = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    
    const [userDetails, setUserDetails] = useState(null);
    const [userPosts, setUserPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const userRes = await fetch(`https://dummyjson.com/users/${id}`);
                const userData = await userRes.json();
                setUserDetails(userData);

                const postsRes = await fetch(`https://dummyjson.com/posts/user/${id}`);
                const postsData = await postsRes.json();
                setUserPosts(postsData.posts);

                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };

        fetchData();
    }, [id]);

    if (loading) return <Loader />;

    return (
        <div className="user-profile">
            
            <button onClick={() => navigate(-1)} className="go-back-btn">← Go Back</button>

            {userDetails && (
                <div className="user-details">
                    <img src={userDetails.image} alt={userDetails.username} className="user-avatar" />
                    <h2>{userDetails.firstName} {userDetails.lastName}</h2>
                    <p><strong>Username:</strong> {userDetails.username}</p>
                    <p><strong>Email:</strong> {userDetails.email}</p>
                    <p><strong>Phone:</strong> {userDetails.phone}</p>
                    <p><strong>Birth Date:</strong> {userDetails.birthDate}</p>
                    <p><strong>Gender:</strong> {userDetails.gender}</p>
                    <p><strong>Address:</strong> {userDetails.address.address}, {userDetails.address.city}, {userDetails.address.state}, {userDetails.address.country}</p>
                    <p><strong>Company:</strong> {userDetails.company.name}</p>
                    <p><strong>Role:</strong> {userDetails.role}</p>
                </div>
            )}

            <h1>All posts of {userDetails.firstName} {userDetails.lastName}</h1>
            <div className="posts-container">
                {userPosts.map((post) => (
                    <PostItem key={post.id} post={post} />
                ))}
            </div>
        </div>
    );
};

export default UserProfile;
