import './App.css';
import React, { useState } from 'react';
import EventList from './components/EventDashboard';
import MainHeader from './components/MainHeader';

function App() {
  const [ modalIsVisible, setModalIsVisible] = useState(true)

  function hideModalHandler(){
    setModalIsVisible(false);
  }

  function showModalHandler(){
    setModalIsVisible(true);
  }
  return (
    <>
    <MainHeader onCreateEvent={showModalHandler}/>
    <main>
    <EventList isCreatingEvent={modalIsVisible} onStopCreateEvent={hideModalHandler} />
    </main>
    </>
    );
}

export default App;
