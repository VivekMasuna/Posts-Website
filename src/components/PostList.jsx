// import React from 'react';
// import PostItem from './PostItem';
// import { usePostContext } from '../context/PostContext';
// import Loader from './Loader';

// const PostList = () => {
//     const { state } = usePostContext();

//     if (state.loading) return <Loader />;
//     if (state.error) return <h2>Error: {state.error}</h2>;

//     return (
//         <div className="posts-container">
//             {state.posts.map((post) => (
//                 <PostItem key={post.id} post={post} />
//             ))}
//         </div>
//     );
// };

// export default PostList;

import React, { useState } from 'react';
import PostItem from './PostItem';
import { usePostContext } from '../context/PostContext';
import Loader from './Loader';

const PostList = () => {
    const { state } = usePostContext();
    const [visiblePosts, setVisiblePosts] = useState(10);

    if (state.loading) return <Loader />;
    if (state.error) return <h2>Error: {state.error}</h2>;

    const handleSeeMore = () => {
        setVisiblePosts((prev) => prev + 10);
    };

    return (
        <div className='all-posts'>
            <div className="posts-container">
                {state.posts.slice(0, visiblePosts).map((post) => (
                    <PostItem key={post.id} post={post} />
                ))}
            </div>
            {visiblePosts < state.posts.length && (
                <div className="see-more-container">
                    <button onClick={handleSeeMore} className="see-more-btn">
                        See more...
                    </button>
                </div>
            )}
        </div>
    );
};

export default PostList;
