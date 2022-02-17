import React, { useState } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';

export default function AuthPage({ setUser }) {
  const [showSignUp, setShowSignUp] = useState(true);
  return (
    <main>
      <h1>Auth2.0Page</h1>
      <br></br>
      <button onClick={() => setShowSignUp(!showSignUp)}>{showSignUp ? 'Log In' : 'Sign Up'}</button>
      { showSignUp ?
        <SignUpForm setUser={setUser} />
        :
        <LoginForm setUser={setUser} />
      }
    </main>
  );
}