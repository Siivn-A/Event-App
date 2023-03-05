import classes from './FilterActionButton.module.css'
import React from 'react';
import { useState } from 'react';

function FilterEvent({onCancel, onAddFilter}) {

    
    const [ enteredDate, setEnteredDate] = useState(null)
    const [ enteredCity, setEnteredCity] = useState(null)
    const [ enteredCategory, setEnteredenteredCategory] = useState(null)


    function dateChangeHandler(event){
        setEnteredDate(event.target.value);
    }


    function cityChangeHandler(event){
        setEnteredCity(1);
        setEnteredenteredCategory(0);
    }


    function categoryChangeHandler(event){
        setEnteredCity(0);
        setEnteredenteredCategory(1);
    }


    function removeFilterHandler(event){
        setEnteredDate(null);
        setEnteredCity(0);
        setEnteredenteredCategory(0);
    }



    function onFilterEvents(event){
        event.preventDefault();
        const filter_data = [
            enteredDate,
            enteredCity,
            enteredCategory
        
        ];
        console.log(`new event with data `,JSON.stringify(filter_data))
        onCancel();
        onAddFilter(filter_data);
    }

    return (
        <form className={classes.form} onSubmit={onFilterEvents}>
            
            <p>
                <label htmlFor="date">
                Date </label>
                <input type="date" name="date" id="date" onChange={dateChangeHandler} />
            </p>
            <div>
                <input type="radio" onChange={cityChangeHandler} value="city" name="filter" /> City
                <input type="radio" onChange={categoryChangeHandler} value="category" name="filter" /> Category
                <input type="radio" onChange={removeFilterHandler} value="remove" name="filter" /> Remove Filter
            </div>
            <p className={classes.actions}>
                <label htmlFor="submit" />
                <button type="button" onClick={onCancel}>Cancel </button>
                <button> Filter Events </button>
            </p>
        </form>
    );
};

export default FilterEvent;