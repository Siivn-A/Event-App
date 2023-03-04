import classes from './EventActionButton.module.css'
import React from 'react';

function CreateEvent({onCancel}) {

    function onCreateEvent(event){
        event.preventDefault();
        const event_data = {
            desc: 'new event',
            date: '2022-12-12'
        };
        console.log(`new event with data ${event_data}`)
        onCancel();
    }

    return (
        <form className={classes.form} onSubmit={onCreateEvent}>
            <p>
                <label htmlFor="body" />
                <textarea name="description" id="body" required rows={3}></textarea>
            </p>
            <p>
                <label htmlFor="date" />
                <input type="date" name="date" id="body"/>
            </p>
            <p>
                <label htmlFor="name" />
                <input type="text" id="name" required />
            </p>
            <p className={classes.actions}>
                <label htmlFor="submit" />
                <button type="button" onClick={onCancel}>Cancel </button>
                <button> Create Event </button>
            </p>
        </form>
    );
};

export default CreateEvent;