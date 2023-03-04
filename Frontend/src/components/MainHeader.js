import { MdPostAdd } from 'react-icons/md';
import { BsCalendar2Event } from 'react-icons/bs'
import React from 'react';
import classes from './MainHeader.module.css';

function MainHeader({ onCreateEvent }) {
  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>
        <BsCalendar2Event className={classes.logo} />
        All Events
      </h1>
      <p>
        <button className={classes.button} onClick={onCreateEvent}>
          <MdPostAdd size={25} />
        </button>
      </p>
    </header>
  );
}

export default MainHeader;