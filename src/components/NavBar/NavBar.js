import React from 'react'
import classes from './NavBar.module.css'
import logo from './logo_pinkpurple_32.ico'
// import './NavBar.css'

const NavBar = () => {
    return (
        <div className={classes.NavBar}>
            <nav>
                <ul>
                    <li>
                        <a href="/#home">Home</a>
                    </li>
                    <li>
                        <a href="/#about">About</a>
                    </li>
                    <li>
                        <a href="/#projects">Projects</a>
                    </li>
                    <li>
                        <a href="/#contact">Contact</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default NavBar;