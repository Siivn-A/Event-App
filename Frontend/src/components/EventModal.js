import React from 'react';
import classes from './EventModal.module.css'

function EventModal({ children, onClose }) {
return (<>
    <div className={classes.backdrop} onClick={onClose} />
    <dialog open className={classes.modal}> {children} </dialog>
</>)
}

export default EventModal;