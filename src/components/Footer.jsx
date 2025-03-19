import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiHome, FiSearch, FiFileText, FiUser } from 'react-icons/fi';

const Footer = () => {
    const navigate = useNavigate();

    return (
        <footer className="footer">
            <div className="footer-icons">
                <FiHome className="icon" onClick={() => navigate('/')} />
                <FiSearch className="icon" onClick={() => navigate('/search')} />
                <FiFileText className="icon" onClick={() => navigate('/posts')} />
                <FiUser className="icon" onClick={() => navigate('/user')} />
            </div>
        </footer>
    );
};

export default Footer;
