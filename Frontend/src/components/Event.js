import classes from './Event.module.css'
import React from 'react';

function Event({name, start_date, end_date, city, category, banner_image, description, date, count, count_filter}) {

    if(count_filter){
        if(city){
            return (
                <li className={classes.event}>
                    <p className={classes.title}>{city}({count})</p>
                </li>
            );
        }
        if(category){
            return (
                <li className={classes.event}>
                    <p className={classes.title}>{category}({count})</p>
                </li>
            );
        }
    }
    console.log("banner data")
    console.log("http://127.0.0.1:8080/" + banner_image.replace("C:fakepath", ""));
    banner_image = banner_image.replace("C:\\fakepath\\", "")
    banner_image = banner_image.replace("C:fakepath", "")


    return (
        // <div className={classes.create_button}>
        <li className={classes.event}>
            <img className={classes.banner} src={"http://127.0.0.1:8080/" + banner_image} alt="Event Banner" />
            <p className={classes.title}>{name}</p>
            <p className={classes.subtitle}>{start_date}</p>
            <p className={classes.subtitle}>{end_date}</p>
            <p className={classes.subtitle}>{date}</p>
            <p className={classes.subtitle}>{city}</p>
            <p className={classes.subtitle}>{category}</p>
            <p className={classes.subtitle}>{description}</p>
        </li>
    );
};

export default Event;
