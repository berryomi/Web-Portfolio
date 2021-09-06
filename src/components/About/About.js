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
                    <p> I am an undergraduate student of Simon Fraser University at Surrey, BC, 
                        presently working towards a degree in BSc. Computer Science - Software Systems since 2017.  
                    </p>
                    <p>
                        Programming is my passion. I love the pleasant feeling that comes from solving complex problems. 
                        Although I’m currently a university student seeking co-op jobs, my career goal is to 
                        become a professional software developer. I am interested in building and designing websites as well. 
                    </p>
                    <p style={{paddingBottom:"50px"}}>
                        Besides coding, I love to travel and hike to various locations. 
                        Wandering around beautiful streets or nature is the way I relieve the stress. 
                        I also love to build new relationships with different people by having conversations 
                        to get to know each other. 
                    </p>
                </div>
                <img className={classes.Myself} src={myself} alt="Myself"></img>
            </div>
        </div>
    );
}

export default About;