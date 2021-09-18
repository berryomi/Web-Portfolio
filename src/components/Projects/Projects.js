import React from 'react'
import PageHeader from '../PageHeader/PageHeader';
import classes from './Projects.module.css'; 
import gitlabImage from './thumbnail/gitlab.png'
import starseekerImage from './thumbnail/starseeker.png'
import gpaImage from './thumbnail/gpa_calc.png'
import inspectionImage from './thumbnail/inspection.png'
import mazeImage from './thumbnail/maze_game.png'


const starseeker_description = 'A single-player puzzle game to find a certain number of randomly hidden stars in the cells on the game board. Using the hints about the number of stars remaining on the cell, the player attempts to find all the stars with the minimum number of scans. ';
const maze_description = 'A command line game where the player becomes a mouse who wants to escape the maze while finding the certain number of cheeses and avoiding the blind cats. The overview of the maze is hidden until the player moves around the maze and reveals its adjacent cells.';
const gitlab_description = 'A web application designed to estimate the team members’ work during an iteration of a project by analyzing the GitLab contributions. Based on the number of code reviews and commits in the repository, the system computes the total score to summarize how frequently each member contributed to the project.';
const gpa_description = 'A web application for students of Simon Fraser University to help calculate their GPA and CGPA. ';
const inspection_description = 'An Android application that displays the health inspection results of the restaurants located in Surrey, BC. The system analyzes the inspection report by calling Surrey’s Open Data API into an ordered list of restaurants.';

const maze_languages = ['Java'];
const gpa_languages = ['HTML', 'CSS', 'JavaScript', 'Java'];
const starseeker_languages = ['Android Studio', 'Java', 'XML'];
const gitlab_languages = ['Flask', 'React.js', 'Node.js'];
const inspection_languages = ['Android Studio', 'Java', 'XML'];


const SimpleList = (language) => (
    <ul className={classes.LanguageContainer}>
      {language.map(item => {
        return <li className={classes.LanguageList} key={item}>{item}</li>;
      })}
    </ul>
  );

const project_description = (title, description, languages) => {
    return (
        <div className={classes.TextContainer}>
                <p style={{color:'#9F149F', fontSize:'20px', marginRight:'10px'}}>{title}</p>
                <p>{description}</p>
                <p>{SimpleList(languages)}</p> 
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

const Projects = () => {
    return (
        <div className={classes.Portfolio} id="projects">
            <PageHeader title={'Projects'} />
            <div className={classes.Project}>
                {project(starseekerImage, project_description('Star Seeker', starseeker_description, starseeker_languages))}
                {project(gitlabImage, project_description('GitLab Iteration Analyzer', gitlab_description, gitlab_languages))}
                {project(inspectionImage, project_description('Surrey Restaurant Inspector', inspection_description, inspection_languages))}
                {project(gpaImage, project_description('GPA Calculator', gpa_description, gpa_languages))}
                {project(mazeImage, project_description('Maze Game', maze_description, maze_languages))}
            </div>
            
        </div>
    );
}

export default Projects;
