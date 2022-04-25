import React from 'react'
import Button from '@mui/material/Button';
import { Routes, Route, Link } from "react-router-dom";
function Header() {
  return (
    <div>
        
      <h1>WELCOME TO MY PAGE</h1>
      <Button variant="contained" color="success">
        Success
      </Button>
    </div>
  )
}

export default Header