import React from 'react'
import {Link } from 'react-router-dom'
function Projects() {
    return (
        <div>
            <h1>Projects</h1>
            <ul>
                <li><Link to="/projects/42">project 1</Link></li>
                <li>< Link to="/projects/1000">project 2</Link></li>
            </ul>
        </div>
    )
}

export default Projects
