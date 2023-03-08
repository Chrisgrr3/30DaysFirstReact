import React from 'react'
import ReactDOM from 'react-dom'

const jsxElement = <h1>This is a JSX element.</h1>
const rootElement = document.getElementById('root')

const tech = 'React'

function Title() {
  return <h2>Getting Started with {tech}</h2>
};

const header = (
  <header>
    <h1>Welcome to 30 Days of {tech}</h1>
    <Title />
    <h3>JavaScript Library</h3>
    <p>Chris Guerrero</p>
    <small>March 7, 2023</small>
  </header>
)

const technologies = ['HTML', 'CSS', 'JavaScript']
const formattedTechs = technologies.map((tech) => <li key={tech}>{tech}</li>)

const main = (
  <main>
    <p>Prerequisites to get start with React.js</p>
    <ul>
      {formattedTechs}
    </ul>
  </main>
)

function Footer() {
  return (
    <footer>
      <p>How does a website kick a soccer ball?</p>
      <small>Using its footer!</small>
    </footer>
  )
}

const app = (
  <div>
    {header}
    {main}
    <Footer />
  </div>
)

ReactDOM.render(app, rootElement)