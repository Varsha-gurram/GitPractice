import React, { useState, useRef, useEffect } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

const ProfileDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  const dropdownRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem('loggedInUser'));
    setUser(currentUser);
  }, []);

  useEffect(() => {
    const handleClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
    setUser(null);
    setIsOpen(false);
    navigate('/login');
  };

  return (
    <div ref={dropdownRef} style={{ position: 'relative', margin: '15px' }}>
      <FaUserCircle
        size={28}
        style={{ cursor: 'pointer', color: '#333' }}
        onClick={() => setIsOpen(prev => !prev)}
      />
      {isOpen && (
        <div style={styles.dropdown}>
          {user ? (
            <>
              <Link to="/settings" style={styles.link}>Settings</Link>
              <button onClick={handleLogout} style={{ ...styles.link, border: 'none', background: 'none', textAlign: 'left' }}>Logout</button>
            </>
          ) : (
            <>
              <Link to="/login" style={styles.link}>Login</Link>
              <Link to="/signup" style={styles.link}>Sign Up</Link>
              <Link to="/settings" style={styles.link}>Settings</Link>
            </>
          )}
        </div>
      )}
    </div>
  );
};

const styles = {
  dropdown: {
    position: 'absolute',
    top: '35px',
    right: 0,
    backgroundColor: '#fff',
    border: '1px solid #ccc',
    borderRadius: '6px',
    boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
    zIndex: 1000,
    minWidth: '140px',
    display: 'flex',
    flexDirection: 'column',
  },
  link: {
    padding: '10px',
    textDecoration: 'none',
    color: '#333',
    borderBottom: '1px solid #eee',
    fontSize: '14px',
    cursor: 'pointer',
  },
};

export default ProfileDropdown;
