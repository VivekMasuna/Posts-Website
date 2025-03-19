import React from 'react';
import PostList from '../components/PostList';

const Home = () => {
    return (
        <div className="home">
            <h1>All Posts</h1>
            <PostList />
        </div>
    );
};

export default Home;
