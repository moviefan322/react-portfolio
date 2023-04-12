import React from 'react'
import resume from '../assets/docs/Resume.pdf'

const Resume = () => {
  return (
    <div>
      <h1>Resume</h1>
      <a href={resume}><h3>Download PDF</h3></a>

      <h2>Skills:</h2>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>jQuery</li>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>React.js</li>
        <li>MySQL</li>
        <li>MongoDB</li>
        <li>Sequelize</li>
        <li>Mongoose</li>
        <li>Handlebars.js</li>
        <li>Bootstrap</li>
        <li>Materialize</li>
        <li>Git</li>
        <li>GitHub</li>
        <li>Heroku</li>
        <li>APIs</li>
        <li>JSON</li>
        <li>REST</li>
        <li>Object-Oriented Programming</li>
        <li>Test-Driven Development</li>
        <li>Agile Methodologies</li>
      </ul>
    </div>
  )
}

export default Resume
