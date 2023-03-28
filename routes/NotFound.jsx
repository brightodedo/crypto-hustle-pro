import React from 'react'
import { Link } from 'react-router-dom'

function 
NotFound() {
  return (
    <main>
        <p>There's nothing here!</p>
        <Link to="/">
          Back to Home
        </Link>
      </main>
  )
}

export default 
NotFound