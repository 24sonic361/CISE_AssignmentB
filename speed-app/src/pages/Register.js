import React, { useState } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();  // Initialize useNavigate for redirection
  const MySwal = withReactContent(Swal);
  const [inputs, setInputs] = useState({});
  const [confirmPassword, setConfirmPassword] = useState('');  // Separate state for confirm password

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }));
  }

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if password and confirm password match
    if (inputs.password !== confirmPassword) {
      MySwal.fire({
        text: 'Passwords do not match!',
        icon: 'error'
      });
      return;
    }

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "fname": inputs.fname,
      "lname": inputs.lname,
      "username": inputs.username,
      "password": inputs.password,
      "email": inputs.email,
      "avatar": inputs.avatar || "https://www.melivecode.com/users/cat.png" // Default avatar if not provided
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    // Fetch API for registration
    fetch("https://www.melivecode.com/api/users/create", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);

        if (result.status === "ok") {
          MySwal.fire({
            text: `${result.message}`,
            icon: 'success'
          }).then(() => {
            navigate('/login');  // Redirect to login after successful registration
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
        <h2 style={styles.title}>Register</h2>
        <label style={styles.label}>First Name:</label>
        <input
          style={styles.input}
          type="text"
          name="fname"
          value={inputs.fname || ""}
          onChange={handleChange}
          required
        />
        <label style={styles.label}>Last Name:</label>
        <input
          style={styles.input}
          type="text"
          name="lname"
          value={inputs.lname || ""}
          onChange={handleChange}
          required
        />
        <label style={styles.label}>Username:</label>
        <input
          style={styles.input}
          type="text"
          name="username"
          value={inputs.username || ""}
          onChange={handleChange}
          required
        />
        <label style={styles.label}>Email:</label>
        <input
          style={styles.input}
          type="email"
          name="email"
          value={inputs.email || ""}
          onChange={handleChange}
          required
        />
        <label style={styles.label}>Password:</label>
        <input
          style={styles.input}
          type="password"
          name="password"
          value={inputs.password || ""}
          onChange={handleChange}
          required
        />
        <label style={styles.label}>Confirm Password:</label>
        <input
          style={styles.input}
          type="password"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          required
        />
        <label style={styles.label}>Avatar (URL):</label>
        <input
          style={styles.input}
          type="text"
          name="avatar"
          value={inputs.avatar || ""}
          onChange={handleChange}
        />
        <button type="submit" style={styles.button}>Register</button>

        <div style={styles.linkContainer}>
          <a href="/login" style={styles.link}>Already have an account? Login</a>
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
    backgroundColor: '#28a745',
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

export default Register;
