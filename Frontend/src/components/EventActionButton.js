import classes from './EventActionButton.module.css'
import React from 'react';
import { useState } from 'react';

function CreateEvent({onCancel, onAddEvent}) {

    const [ enteredName, setEnteredName] = useState(null)
    const [ enteredStartTime, setEnteredStartTime] = useState(null)
    const [ enteredEndTime, setEnteredEndTime] = useState(null)
    const [ enteredDate, setEnteredDate] = useState(null)
    const [ enteredCity, setEnteredCity] = useState(null)
    const [ enteredDescription, setEnteredDescription] = useState(null)
    const [ enteredCategory, setEnteredenteredCategory] = useState(null)
    const [ enteredBanner, setEnteredenteredBanner] = useState(null)

    function nameChangeHandler(event){
        setEnteredName(event.target.value);
    }

    function startTimeChangeHandler(event){
        setEnteredStartTime(event.target.value);
    }


    function endTimeChangeHandler(event){
        setEnteredEndTime(event.target.value);
    }


    function dateChangeHandler(event){
        setEnteredDate(event.target.value);
    }


    function cityChangeHandler(event){
        setEnteredCity(event.target.value);
    }


    function descriptionChangeHandler(event){
        setEnteredDescription(event.target.value);
    }


    function categoryChangeHandler(event){
        setEnteredenteredCategory(event.target.value);
    }


    function bannerChangeHandler(event){
        setEnteredenteredBanner(event.target.value);
    }


    function onCreateEvent(event){
        event.preventDefault();
        const event_data = {
            name: enteredName,
            start_time: enteredStartTime,
            end_time: enteredEndTime,
            city: enteredCity,
            category: enteredCategory,
            banner_image: enteredBanner,
            description: enteredDescription,
            status: '1',
            date: enteredDate
        };
        console.log(`new event with data `,JSON.stringify(event_data))
        onCancel();
        fetch('http://localhost/event/apis/create_event.php', {
            method: 'POST',
            body: JSON.stringify(event_data),
            headers:{
                'Content-Type': 'Application/json'
            }
        });
        onAddEvent(event_data);
    }

    return (
        <form className={classes.form} onSubmit={onCreateEvent}>
            <p>
                <label htmlFor="name" />
                Name
                <input type="text" id="name" required onChange={nameChangeHandler} />
            </p>
            <p>
                <label htmlFor="time" />
                Start Time
                <input type="time" name="start_time" id="time" onChange={startTimeChangeHandler} />
                End Time
                <input type="time" name="end_time" id="time" onChange={endTimeChangeHandler} />
            </p>
            <p>
                <label htmlFor="date" />
                Date
                <input type="date" name="date" id="date" required onChange={dateChangeHandler} />
            </p>
            <p>
                <label htmlFor="location" />
                city (location)
                <input type="text" id="location" required onChange={cityChangeHandler} />
            </p>
            <p>
                <label htmlFor="description" />
                Description
                <input type="textbox" id="description" onChange={descriptionChangeHandler} />
            </p>
            <p>
                <label htmlFor="category" />
                Category
                <input type="text" id="category" required onChange={categoryChangeHandler} />
            </p>
            <p>
                <label htmlFor="banner" />
                Banner Image
                <input type="file" id="banner" required={false} onChange={bannerChangeHandler} />
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