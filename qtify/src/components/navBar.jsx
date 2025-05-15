import React from 'react'
import "./navBar.css"
import Searchbar from './searchbar'
import { Button } from '@mui/material'
import logo from'../assets/logo.png'

function navBar() {
  return (
    <nav className="navbar">
        <img src={logo} />
        <Searchbar />
        <Button  id='button'>Give Feedback</Button>
    </nav>
  )
}

export default navBar
// #34C94B