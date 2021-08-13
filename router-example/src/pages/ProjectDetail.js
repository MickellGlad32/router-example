import React from 'react'
import {useParams, Redirect } from 'react-router-dom'

const projects = {
    '42' : {
        title: 'Greatest Project in the World',
        description: 'This is not the greatest project in the world, we just made that up.'
    },'1000': {
        title: 'That Dude We know that lives down the Street',
        description: 'He is a cool dude, I just do not know his name.'
    }
}

function ProjectDetail() {
    const { id} = useParams();
    
    const project = projects[id];

    if(!project){
        return <Redirect to="/projects"/>
    }
    return (
        <div>
            <h1>{project.title}</h1>
            <p>{project.description}</p>
        </div>
    )
}

export default ProjectDetail
