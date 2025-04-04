import React, { useState } from 'react'
import "./searchbar.css"
import { TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';

function Searchbar() {
    const [value,setValue]=useState("")
    const handleChane=  (e)=>{
         setValue(e.target.value)
        console.log(value)
    }
  return (
    <div>
    <TextField className='Searchbar' value={value} onChange={handleChane}  placeholder='Search a album of your choice'/>
    <button className='search'><SearchIcon /></button>
    </div>
  )
}

export default Searchbar