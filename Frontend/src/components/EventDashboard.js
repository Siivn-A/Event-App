import Event from "./Event"
import classes from './EventDashboard.module.css'
import CreateEvent from './EventActionButton';
import Modal from './EventModal';
import { useState, useEffect } from 'react';
import React from 'react';
import FilterEvent from "./FilterActionButton";
function EventList({isCreatingEvent, onStopCreateEvent, isFilteringEvent, onStopFilteringEvent, requireLogin}){
    // get list of all events from api response. later
    // const events = [1,2,3]
    // console.log(events)

    const [ events, setEvents] = useState([])
    const [ filter, setFilter ] = useState([null, null, null])
    useEffect(
      ()=>{
        async function getAllEvents(){        
          const body={
            "filter_date": filter[0],
            "filter_city": filter[1],
            "filter_category": filter[2]

          }
          
          console.log("filter body in call: ", body)
          const response = await fetch('http://localhost/event/apis/all_events.php', {
            method: 'POST',
            body: JSON.stringify(body),
            headers:{
                'Content-Type': 'Application/json'
            }
          });

          const resp_data = await response.json();
          console.log("resp data", resp_data)
          setEvents(resp_data)
        }
        getAllEvents();
      }, [filter]
    )

  function addEventHandler(event_details){
    setEvents((existingEvents) => [event_details, ...existingEvents].filter(event => ((event['name'] || '').trim() !== "")));
  }

  
  function addFilterHandler(filters){
    console.log("filter body: ", filters)
    setFilter([...filters]);
  }

    return (
    <>
        {
        isCreatingEvent && 
            <Modal onClose={onStopCreateEvent}>
            <CreateEvent onAddEvent = {addEventHandler} onCancel={onStopCreateEvent} />
            </Modal> 
        }

        {
        isFilteringEvent && 
            <Modal onClose={onStopFilteringEvent}>
            <FilterEvent onAddFilter = {addFilterHandler} onCancel={onStopFilteringEvent} />
            </Modal> 
        }
        { requireLogin &&
        <ul className={classes.list_e}>
          {events.map(
            (event_data) =>
              <Event key={event_data['id']} {...event_data} />
            )}
        </ul>
        }
        { !requireLogin &&
        <h1>Login to see all the Events</h1>
        }
        </>
        )
}


export default EventList