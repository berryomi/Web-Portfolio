import React from 'react'
import classes from './About.module.css'
import PageHeader from './../PageHeader/PageHeader'
import background from "./Images/80.png";
import myself from "./Images/me.png"

const About = () => {
    return (
        <div className={classes.AboutMe} style={{    backgroundImage: `url(${background})`, 
                                                    backgroundPosition: 'center',
                                                    backgroundSize: 'cover'}} id="about">
            <PageHeader title={'About Me'} />
            <div className={classes.Container}>
                <div className={classes.Text}>
                    <h1>Welcome to my portfolio!</h1>
                    <p>
                    I am an undergraduate student of Simon Fraser University at Burnaby, BC,
                    currently working towards a degree in BSc. Computer Science - Software Systems. 
                    </p>
                </div>
                <img className={classes.Myself} src={myself} alt="Myself"></img>
            </div>
        </div>
    );
}

export default About;