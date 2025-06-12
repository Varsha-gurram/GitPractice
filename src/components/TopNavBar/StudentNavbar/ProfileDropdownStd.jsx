import React, { useState, useRef, useEffect } from 'react';
import { FaUserCircle } from 'react-icons/fa';
//import { useNavigate } from 'react-router-dom';

const ProfileDropdownStd = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  const dropdownRef = useRef();
  //const navigate = useNavigate();

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem('loggedInUser'));
    setUser(currentUser);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    //return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
    setUser(null);
    setIsOpen(false);
    //navigate('/login');
  };

  const menuItems = [
    { label: 'My Profile', to: '/profile' },
    { label: 'My Courses', to: '/courses' },
    { label: 'Grades', to: '/grades' },
    { label: 'Messages', to: '/messages' },
    { label: 'Logout', onClick: handleLogout },
  ];

  return (
    <div ref={dropdownRef} style={{ position: 'relative', margin: '15px' }}>
      <FaUserCircle
        size={28}
        style={{ cursor: 'pointer', color: '#333' }}
        onClick={() => setIsOpen((prev) => !prev)}
      />
      {isOpen && (
        <div style={styles.dropdown}>
          {menuItems.map((item, index) => (
            <button
              key={index}
              onClick={() => {
                setIsOpen(false);
                if (item.onClick) {
                  item.onClick();
                } 
                // else if (item.to) {
                //   navigate(item.to);
                // }
              }}
              style={{
                ...styles.link,
                border: 'none',
                background: 'none',
                textAlign: 'left',
              }}
            >
              {item.label}
            </button>
          ))}
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
    minWidth: '160px',
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

export default ProfileDropdownStd;
