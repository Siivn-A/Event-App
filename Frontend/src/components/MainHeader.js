import { MdPostAdd } from 'react-icons/md';
import { BiFilterAlt } from 'react-icons/bi'
import { BsCalendar2Event } from 'react-icons/bs'
import React from 'react';
import classes from './MainHeader.module.css';
import Login from './Login';

function MainHeader({ onCreateEvent, onApplyFilter, onAuthLogin, onAuthLogout }) {
  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>
        <BsCalendar2Event className={classes.logo} />
        All Events
      </h1>
      <p>
        <Login getAuthLogin={onAuthLogin} getAuthLogout={onAuthLogout}/>
        <button className={classes.button} onClick={onApplyFilter}>
          <BiFilterAlt size={25} />
        </button>
        <button className={classes.button} onClick={onCreateEvent}>
          <MdPostAdd size={25} />
        </button>
      </p>
    </header>
  );
}

export default MainHeader;