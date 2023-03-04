import classes from './Event.module.css'
import React from 'react';

function Event(props) {
    return (
        // <div className={classes.create_button}>
        <li className={classes.event}>
            <p className={classes.title}>An Event. number {props.count}</p>
            <p className={classes.subtitle}>Details be like.</p>
        </li>
    );
};

export default Event;