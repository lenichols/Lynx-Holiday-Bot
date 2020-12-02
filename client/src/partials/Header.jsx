import React from 'react'

export default function Header() {
  return (
    <>
      <header>
        <h1>Secret Santa</h1>
        <h3>LIST</h3>
        <h3>GENERATOR</h3>
        <h5>HOW IT WORKS:</h5>
        <div className="Rules">
          <p>1. Fill in a name</p>
          <p>2. Tap <code>Add</code></p>
          <p>3. Repeat steps 1 and 2 until you're done.</p>
          <p>4.Tap <code>Generate</code> to create your list.</p>
          <p>5.Tap <code>Download</code> or <code>Email</code> when you're done.</p>
        </div>
      </header>
    </>
  )
}