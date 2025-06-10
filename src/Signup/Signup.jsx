import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle, FaLinkedin, FaGithub } from 'react-icons/fa';

const Signup = () => {
  const [formData, setFormData] = useState({ username: '', email: '', password: '', cpassword: '' });
  const [errors, setErrors] = useState({});

  const regexValidators = {
    username: /^[a-zA-Z0-9_]{4,16}$/,
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validateForm = () => {
    const { username, email, password, cpassword } = formData;
    const newErrors = {};
    if (!regexValidators.username.test(username)) newErrors.username = '4-16 chars, alphanumeric/underscore.';
    if (!regexValidators.email.test(email)) newErrors.email = 'Invalid email format.';
    if (!regexValidators.password.test(password)) newErrors.password = 'Password must be strong.';
    if (password !== cpassword) newErrors.cpassword = 'Passwords do not match.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const { username, email, password } = formData;
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

    if (existingUsers.some(user => user.username === username)) {
      alert('User already exists with this email or username.');
      return;
    }

    localStorage.setItem('users', JSON.stringify([...existingUsers, { username, email, password }]));
    alert('Signup successful!');
    setFormData({ username: '', email: '', password: '', cpassword: '' });
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>skillCensui.Ai</h2>
        <p style={styles.subtitle}>Sign up with</p>
        <div style={styles.socialIcons}>
            <a href="https://accounts.google.com" target="_blank" rel="noopener noreferrer" style={styles.google}>
              <FaGoogle color="#fff" size={14} />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" style={styles.linkedin}>
              <FaLinkedin color="#fff" size={14} />
            </a>
            <a href="https://github.com/signup" target="_blank" rel="noopener noreferrer" style={styles.github}>
              <FaGithub color="#fff" size={14} />
          </a>
      </div>

        <p style={styles.subtitle}>or create a new account</p>
        <form onSubmit={handleSubmit} style={styles.form}>
          {['username', 'email', 'password', 'cpassword'].map((field) => (
            <div key={field} style={styles.inputGroup}>
              <label htmlFor={field} style={styles.label}>
                {field === 'cpassword' ? 'Confirm Password' : field.charAt(0).toUpperCase() + field.slice(1)}
              </label>
              <input
                type={field.includes('password') ? 'password' : 'text'}
                name={field}
                id={field}
                value={formData[field]}
                onChange={handleChange}
                required
                style={styles.input}
              />
              {errors[field] && <span style={styles.error}>{errors[field]}</span>}
            </div>
          ))}
          <button type="submit" style={styles.submitButton}>Sign Up</button>
        </form>
        <p style={styles.footer}>
          <Link to="/Login" style={styles.link}>Already have an account? Login</Link>
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    padding: '30px',
  },
  card: {
    padding: '25px',
    borderRadius: '10px',
    width: '100%',
    maxWidth: '350px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    backgroundImage: `url('/Assets/LoginbgImg.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backdropFilter: 'blur(6px)',
  },
  title: {
    fontWeight: 'bold',
    fontSize: '18px',
    textAlign: 'center',
    marginBottom: '10px',
  },
  subtitle: {
    fontSize: '13px',
    textAlign: 'center',
    marginBottom: '10px',
  },
  socialIcons: {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
    marginBottom: '15px',
  },
  google: {
    background: '#DB4437',
    border: 'none',
    borderRadius: '50%',
    width: '34px',
    height: '34px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
  },
  linkedin: {
    background: '#0A66C2',
    border: 'none',
    borderRadius: '50%',
    width: '34px',
    height: '34px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
  },
  github: {
    background: '#000',
    border: 'none',
    borderRadius: '50%',
    width: '34px',
    height: '34px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    fontSize: '12px',
    marginBottom: '4px',
  },
  input: {
    padding: '8px',
    fontSize: '14px',
    borderRadius: '10px',
    border: '1px solid #ccc',
  },
  error: {
    fontSize: '11px',
    color: 'red',
    marginTop: '2px',
  },
  submitButton: {
    marginTop: '12px',
    padding: '10px',
    fontSize: '14px',
    background: '#1976d2',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
  },
  footer: {
    fontSize: '12px',
    textAlign: 'center',
    marginTop: '15px',
  },
  link: {
    color: '#1976d2',
    textDecoration: 'none',
  },
};

export default Signup;
