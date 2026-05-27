import { useState } from 'react';

function LoginForm({ setToken, authMode }) {

  const [name, setName] = useState('');

  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {

    e.preventDefault();

    // FAKE TOKEN

    const fakeToken = "loggedin";

    localStorage.setItem(
      'token',
      fakeToken
    );

    setToken(fakeToken);

  };

  return (

    <div className="login-form-container">

      <h2>

        {authMode === 'login'
          ? 'Login'
          : 'Create Account'}

      </h2>

      <form onSubmit={handleLogin}>

        {authMode === 'register' && (

          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
          />

        )}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <button type="submit">

          {authMode === 'login'
            ? 'Login'
            : 'Create Account'}

        </button>

      </form>

    </div>

  );

}

export default LoginForm;