import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { PostProvider } from './context/PostContext';
import Home from './pages/Home';
import PostPage from './pages/PostPage';
import UserPage from './pages/UserPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
    return (
        <PostProvider>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/posts/:id" element={<PostPage />} />
                    <Route path="/user/:id" element={<UserPage />} />
                </Routes>
                <Footer />
            </Router>
        </PostProvider>
    )
}

export default App
