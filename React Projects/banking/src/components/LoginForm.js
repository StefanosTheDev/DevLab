import { useState, useRef } from 'react';
import { useNavigate } from 'react-router';
import { useAuth } from '../context/AuthContext';

function LoginForm() {
  const usernameRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth(); // From Context

  const handleSubmit = async (e) => {
    e.preventDefault();
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;
    try {
      const res = await fetch('http://localhost:9000/users');
      const data = await res.json();

      const user = data.find(
        (u) => u.username === username && u.password === password
      );

      if (user) {
        localStorage.setItem('User', JSON.stringify(user));
        console.log('Login Successful', user.name);
        setError('');
        login(user);
        navigate('/dashboard');
      } else {
        setError('❌ Invalid username or password');
      }
    } catch (err) {
      console.error('Login error:', err);
      setError('⚠️ Unable to reach server');
    }
  };
  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <h2>Login</h2>

      <input type="text" ref={usernameRef} placeholder="Username" required />
      <input
        type="password"
        ref={passwordRef}
        placeholder="Password"
        required
      />

      <button type="submit">Login</button>

      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
}

export default LoginForm;
