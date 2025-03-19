import React, { createContext, useReducer, useContext, useEffect } from 'react';

const PostContext = createContext();

const initialState = {
    posts: [],
    loading: true,
    error: null
};

const postReducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_SUCCESS':
            return { ...state, posts: action.payload, loading: false };
        case 'FETCH_ERROR':
            return { ...state, error: action.payload, loading: false };
        default:
            return state;
    }
};

export const PostProvider = ({ children }) => {
    const [state, dispatch] = useReducer(postReducer, initialState);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const res = await fetch('https://dummyjson.com/posts');
                const data = await res.json();
                dispatch({ type: 'FETCH_SUCCESS', payload: data.posts });
            } catch (error) {
                dispatch({ type: 'FETCH_ERROR', payload: error.message });
            }
        };

        fetchPosts();
    }, []);

    return (
        <PostContext.Provider value={{ state, dispatch }}>
            {children}
        </PostContext.Provider>
    );
};

export const usePostContext = () => useContext(PostContext);
