import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">SocialSpace</Link>
      <p>Vivek_Masuna</p>
    </nav>
  );
};

export default Navbar;
