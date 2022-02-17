import React, { useState } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';
import './AuthPage.css';

export default function AuthPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);
  return (
    <div>
    <main className="AuthPage">
      <h1>Welcome to Bottlecaps! Your one stop shop for your favorite Bottlecaps! Sign up or Login to continue!</h1>
      <div><br></br>
      <button onClick={() => setShowLogin(!showLogin)}>{showLogin ? 'SIGN UP' : 'LOG IN'}</button>
      </div>

      { showLogin ?
        <LoginForm setUser={setUser} />
        :
        <SignUpForm setUser={setUser} />
      }
    </main>
    </div>
  );
}