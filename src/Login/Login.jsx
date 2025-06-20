import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [loginData, setLoginData] = useState({ usernameOrEmail: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    const matchedUser = storedUsers.find(user =>
      user.username.toLowerCase() === loginData.usernameOrEmail.toLowerCase() &&
      user.password === loginData.password
    );
    if (matchedUser) {
      alert('Login successful! Welcome, ' + matchedUser.username);
      localStorage.setItem('loggedInUser', JSON.stringify(matchedUser));
      navigate('/Layout');
    } else {
      alert('Invalid credentials. Please try again.');
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.formWrapper}>
        <div style={styles.formContent}>
          <p style={styles.tit}>skillCensui.Ai</p>
          <p>Login to your account</p>
          <form style={styles.form} onSubmit={handleSubmit}>
            <div style={styles.inputGroup}>
              <label htmlFor="usernameOrEmail" style={styles.label}>Username or Email:</label>
              <input
                type="text"
                id="usernameOrEmail"
                name="usernameOrEmail"
                value={loginData.usernameOrEmail}
                onChange={handleChange}
                required
                style={styles.input}
              />
            </div>
            {/* <p>{loginData.usernameOrEmail}</p> */}
            <div style={styles.inputGroup}>
              <label htmlFor="password" style={styles.label}>Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                value={loginData.password}
                onChange={handleChange}
                required
                style={styles.input}
              />
            </div>
            {/* <p>{loginData.password}</p> */}
            <button type="submit" style={styles.button}>Login</button>
          </form>
          <p style={{ marginTop: '20px', textAlign: 'center' }}>
            <Link to="/Signup" style={{ color: '#1976d2', textDecoration: 'none' }}>
              Don't have an account? Go to SignUp...
            </Link><br />
            <Link to="/reset" style={{ color: '#1976d2', textDecoration: 'none', marginLeft: '10px' }}>
              Forgot Password?
            </Link>
          </p>
          <div>

          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: '40px',
    minHeight: 'calc(100vh - 280px)',
    overflow: 'hidden',
  },
  formWrapper: {
    backgroundImage: `url('/Assets/LoginbgImg.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '400px',
    height: "450px",
    marginTop: '50px',
    marginBottom: '50px',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  formContent: {
    borderRadius: '10px',
    padding: '20px',
    width: '100%',
  },
  tit: {
    fontWeight: 'bold',
    height: '30px',
    width: '130px',
    color: 'black',
    alignContent: 'center',
    justifyContent: 'center',
    display: 'flex',
    padding: '10px',
    borderRadius: '20px',
    margin: '0 auto 20px auto',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    marginBottom: '5px',
    fontSize: '14px',
    color: '#555',
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    borderRadius: '20px',
    marginTop: '10px',
    border: '1px solid #ccc',
  },
  button: {
    marginTop: '15px',
    padding: '10px',
    backgroundColor: '#1976d2',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    cursor: 'pointer',
  },
};

export default Login;
