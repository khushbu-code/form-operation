import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
function Home() {
  return (
    <div>
        {/* <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/todos">Todo-List</Link></li>
                <li><Link to="/useeffect">About</Link></li>
            </ul>
        
      </nav> */}
      <nav class="navbar navbar-light bg-light">
  <div class="container-fluid">
    <span class="navbar-brand mb-0 h1"><Link to="/">Home</Link></span>
    <span class="navbar-brand mb-0 h1"><Link to="/todos">Todo-List</Link></span>
    <span class="navbar-brand mb-0 h1"><Link to="/useeffect">Search</Link></span>
  </div>
</nav>
    </div>
  )
}

export default Home