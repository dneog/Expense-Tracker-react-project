import React from 'react';
import './DayNight.css'
import {  BiSun } from "react-icons/bi";
import {  HiOutlineMoon } from "react-icons/hi";
const DayNight = ({clicked, theme, toggleTheme, onSwitch, income}) => {
  return (
    <div >
    {clicked && income>=10000 && (
        <div onClick={toggleTheme}>
        <span className='toggle'>
            <BiSun size={16} className='pink' />
            <HiOutlineMoon size={16} className='pink' />
            <div className={onSwitch ? 'ball move' : 'ball' }></div>
        </span>
        </div>
    )}
    </div>
  )
}

export default DayNight