import React from 'react';
import { FaGithub } from "react-icons/fa";
import PageHeader from '../PageHeader/PageHeader';
import classes from './Contact.module.css'

const handleURL = (url) => {
    return () => window.open(url, "_blank")
}

const Contact = () => {
    return (
        <div className={classes.Contact} id="contact">
            <PageHeader title={'Contact'} />
            <div className={classes.ContactIcons}>
                <FaGithub color='white' size='30px' style={{padding: '1%'}}
                            onClick={handleURL('https://github.com/berryomi?tab=repositories')} />
            </div>
            <p className={classes.Email}>jiwonj@sfu.ca</p>
            <p className={classes.Phone}>236)888-1136</p>
            
        </div>
    );
}

export default Contact;
