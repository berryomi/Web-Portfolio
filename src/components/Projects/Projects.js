import React from 'react'
import PageHeader from '../PageHeader/PageHeader';
import classes from './Projects.module.css'; 
import gitlabImage from './thumbnail/gitlab.png'
import starseekerImage from './thumbnail/starseeker.png'
import gpaImage from './thumbnail/gpa_calc.png'
import inspectionImage from './thumbnail/inspection.png'
import mazeImage from './thumbnail/maze_game.png'

const project_description = (title, description, languages) => {
    return (
        <div className={classes.TextContainer}>
            <div className={classes.TextTitle}>
                <p>{title}</p>
            </div>
            <div className={classes.TextInnerElements}>
                <p>{description}</p>
                <p>{languages}</p>
            </div>
            
        </div>
    )
}

const project = (thumbnail, description) => {
    return(
        <div className={classes.ProjectContainer}>
            <div className={classes.Thumbnail}>
                <img src={thumbnail} alt="thumbnail"></img>
            </div>
            <div className={classes.Text}>
                <project_description>{description}</project_description>
            </div>
        </div>
    )
}


const starseeker_description = 'Description for star seeker';
const maze_description = 'Descirption for maze game';
const gitlab_description = 'Description for gitlab';
const gpa_description = 'Description for gpa';
const inspection_description = 'Description for inspection';

const maze_languages = 'Languages: Java';
const gpa_languages = 'Languages: HTML, CSS, JavaScript, Java';
const starseeker_languages = 'Languages: Java';
const gitlab_languages = 'Languages: JavaScript, Python';
const inspection_languages = 'Languages: Java';

const Projects = () => {
    return (
        <div className={classes.Portfolio} id="projects">
            <PageHeader title={'Projects'} />
            <div className={classes.Project}>
                {project(starseekerImage, project_description('Star Seeker', starseeker_description, starseeker_languages))}
                {project(gitlabImage, project_description('GitLab Analyzer', gitlab_description, gitlab_languages))}
                {project(inspectionImage, project_description('Restaurant Inspector', inspection_description, inspection_languages))}
                {project(gpaImage, project_description('GPA Calculator', gpa_description, gpa_languages))}
                {project(mazeImage, project_description('Maze Game', maze_description, maze_languages))}
            </div>
            
        </div>
    );
}

export default Projects;
