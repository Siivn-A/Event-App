import './App.css';
import React, { useState } from 'react';
import EventList from './components/EventDashboard';
import MainHeader from './components/MainHeader';

function App() {

  const [ isAuth, setIsAuth] = useState(false);
  const [ modalIsVisible, setModalIsVisible] = useState(false)
  const [ filterModalIsVisible, setFilterModalIsVisible] = useState(false)


  function hideModalHandler(){
    setModalIsVisible(false);
  }

  function showModalHandler(){
    setModalIsVisible(true);
  }

  function hideFilterModalHandler(){
    setFilterModalIsVisible(false);
  }

  function showFilterModalHandler(){
    setFilterModalIsVisible(true);
  }

  function isAuthLoginHandler(){
    setIsAuth(true);
  }

  function isAuthLogoutsHandler(){
    setIsAuth(false);
  }
  return (
    <>
    <MainHeader onCreateEvent={showModalHandler} onApplyFilter={showFilterModalHandler} onAuthLogin={isAuthLoginHandler} onAuthLogout={isAuthLogoutsHandler}/>
    <main>
    <EventList isCreatingEvent={modalIsVisible} onStopCreateEvent={hideModalHandler} isFilteringEvent={filterModalIsVisible} onStopFilteringEvent={hideFilterModalHandler} requireLogin={isAuth}/>
    </main>
    </>
    );
}

export default App;
