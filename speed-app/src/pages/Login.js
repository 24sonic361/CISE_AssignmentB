import React, { useState } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();  // Initialize useNavigate
  const MySwal = withReactContent(Swal);
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }));
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "username": inputs.username,
      "password": inputs.password
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    // Fetch API for login
    fetch("https://www.melivecode.com/api/login", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);

        if (result.status === "ok") {
          MySwal.fire({
            text: `${result.message}`,
            icon: 'success'
          }).then(() => {
            navigate('/home');  // Navigate after success
          });
        } else {
          MySwal.fire({
            text: `${result.message}`,
            icon: 'error'
          });
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        MySwal.fire({
          text: 'An error occurred. Please try again later.',
          icon: 'error'
        });
      });

    console.log(inputs); // Debugging
  }

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h2 style={styles.title}>Login</h2>
        <label style={styles.label}>Username:</label>
        <input
          style={styles.input}
          type="text"
          name="username"
          value={inputs.username || ""}
          onChange={handleChange}
        />
        <label style={styles.label}>Password:</label>
        <input
          style={styles.input}
          type="password"
          name="password"
          value={inputs.password || ""}
          onChange={handleChange}
        />
        <button type="submit" style={styles.button}>Login</button>

        <div style={styles.linkContainer}>
          <a href="/register" style={styles.link}>Register</a>
        </div>
      </form>
    </div>
  );
}

// Inline CSS for minimal design
const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f5f5f5',
  },
  form: {
    backgroundColor: '#fff',
    padding: '40px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    width: '300px',
    textAlign: 'center',
  },
  title: {
    marginBottom: '20px',
    fontSize: '24px',
    color: '#333',
  },
  label: {
    display: 'block',
    textAlign: 'left',
    marginBottom: '8px',
    fontSize: '14px',
    color: '#333',
  },
  input: {
    width: '100%',
    padding: '10px',
    marginBottom: '20px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '16px',
  },
  button: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#007BFF',
    border: 'none',
    borderRadius: '5px',
    color: '#fff',
    fontSize: '16px',
    cursor: 'pointer',
  },
  linkContainer: {
    marginTop: '20px',
  },
  link: {
    fontSize: '14px',
    color: '#007BFF',
    textDecoration: 'none',
  },
};

export default Login;
