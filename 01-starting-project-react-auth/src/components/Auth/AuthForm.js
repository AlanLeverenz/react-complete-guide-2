import { useState, useRef } from 'react';

import classes from './AuthForm.module.css';

const AuthForm = () => {

  const emailInputRef = useRef();
  const passwordInputref = useRef();

  const [isLogin, setIsLogin] = useState(true);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputref.current.value;

    // optional: Add validation

    if (isLogin) {

    } else {
      fetch
        ('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBNxcz0e7Iu1nfjC9P-s3IJOwp05MfS3vM',
          {
            method: 'POST',
            body: JSON.stringify({
              email: enteredEmail,
              password: enteredPassword,
              returnSecurreToken: true
            }),
            headers: {
              'Content-Type': 'application/json'
            }
          }
        );
    }
  };

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' required ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input type='password' id='password' required ref={passwordInputref} />
        </div>
        <div className={classes.actions}>
          <button>{isLogin ? 'Login' : 'Create Account'}</button>
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;