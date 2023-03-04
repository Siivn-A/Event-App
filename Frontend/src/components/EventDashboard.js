import Event from "./Event"
import classes from './EventDashboard.module.css'
import CreateEvent from './EventActionButton';
import Modal from './EventModal';
import { useState } from 'react';
import React from 'react';
function EventList({isCreatingEvent, onStopCreateEvent}){
    // get list of all events from api response. later
    const events = [1,2,3]
    console.log(events)

    const [ eventDetails, setEventDetails] = useState('')
    

  function createEventHandler(event){
    setEventDetails(event.target.value)
  }

    return (
    <>
        {
        isCreatingEvent && 
            <Modal onClose={onStopCreateEvent}>
            <CreateEvent onCreateEvent = {createEventHandler} onCancel={onStopCreateEvent} />
            </Modal> 
        }
        
        <ul className={classes.list_e}>
        <Event count = {events[0]} />
        <Event count = {events[2]} />
        <Event count = {events[1]} />
        </ul>
        </>
        )
}

export default EventList