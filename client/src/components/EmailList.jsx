import { useState } from 'react';

import React from 'react'

export default function EmailList() {
  const [email, setEmail] = useState("");
  function handleEmailChange(e) {
    setEmail(e.target.value);
  }
  function handleSubmitEmail(e) {
    console.log(email);
  }
  return (
    <div>
      <form>
        <input
          type="text"
          name="email"
          className="App-res"
          placeholder="Please enter email"
          onChange={handleEmailChange}
          value={email}
        />
        <button onClick={handleSubmitEmail}>SEND</button>
      </form>
    </div>
  )
}
