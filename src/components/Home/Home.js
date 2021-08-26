import React from 'react'
import classes from './Home.module.css'

const Home = () => {
    return (
        <div className={classes.Home} id="home">
           <div className={classes.Container}>
               <h1 className={classes.Hello}>Hello, world!</h1>
               <h1>My name is Jiwon Jun.</h1>
           </div>
        </div>
    );
}

export default Home;
