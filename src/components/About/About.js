import React from 'react'
import classes from './About.module.css'
import PageHeader from './../PageHeader/PageHeader'

const About = () => {
    return (
        <div className={classes.AboutMe} id="about">
            <PageHeader title={'About Me'} />
            <div className={classes.Container}>
                <div className={classes.Text}>
                    <p>Hello, there. Welcome to my place!</p>
                    <p>
                    I am an undergraduate student of Simon Fraser University at Burnaby, BC,
                    currently working towards a degree in BSc. Computer Science - Software Systems. 
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;