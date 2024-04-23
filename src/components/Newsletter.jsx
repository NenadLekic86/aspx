import React, { useState } from 'react';

function Newsletter() {
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);

  function handleInput(event) {
    setEmail(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (email === '' || !/\S+@\S+\.\S+/.test(email)) {
      setIsEmailValid(false);
    } else {
      setIsEmailValid(true);
      alert(`Thank you for subscribing with ${email}`);
      setEmail('');
    }
  }

  return (
    <>
      <div className='newsletter mt-20 mb-14 relative'>
        <p className='subtitle newsletter uppercase text-sm text-white/[0.32]'>Keep up with us.</p>
        {!isEmailValid ? <p>Please enter a valid email address</p> : null}
        <form onSubmit={handleSubmit} className='my-6'>
          <input
            type="email"
            placeholder="Enter your email address..."
            value={email}
            onChange={handleInput}
          />
          <button
            type="submit"
            className='btn-main uppercase ms-4'
          >
            Sign up
          </button>
        </form>
      </div>
    </>
  );
}

export default Newsletter;