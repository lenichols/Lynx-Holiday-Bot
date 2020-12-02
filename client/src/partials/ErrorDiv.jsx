import React from 'react'

export default function ErrorDiv() {
  return (
    <div className="ErrorDiv">
      <p className="my-0"><span>&#9924;</span> List must be longer than 3 entries</p>
      <p className="my-0"><span>&#9924;</span> List must have an even number of entries</p>
      <p className="text-right"><span>&#127877;</span> Secret Santa</p>
    </div>
  )
}