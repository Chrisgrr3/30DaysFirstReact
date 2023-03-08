import React from 'react'
import ReactDOM from 'react-dom'
import chrisImage from './images/20200802_191518936_iOS.png'

const jsxElement = <h1>This is a JSX element.</h1>
const rootElement = document.getElementById('root')

const tech = 'React'

function Title() {
  return <h2>Getting Started with {tech}</h2>
};

// Header CSS styling
const headerStyles = {
  backgroundColor: '#61DBFB',
  fontFamily: 'Helvetica Neue',
  padding: 25,
  lineHeight: 1.5,
}

const header = (
  <header style={headerStyles}>
    <h1>Welcome to 30 Days of {tech}</h1>
    <Title />
    <h3>JavaScript Library</h3>
    <p>Chris Guerrero</p>
    <small>March 7, 2023</small>
  </header>
)

const technologies = ['HTML', 'CSS', 'JavaScript']
const formattedTechs = technologies.map((tech) => <li key={tech}>{tech}</li>)

// Main CSS styling
const mainStyles = {
  backgroundColor: '#F3F0F5',
}

const main = (
  <main style={mainStyles}>
    <p>Prerequisites to get start with React.js</p>
    <ul>
      {formattedTechs}
    </ul>
    <Image />
  </main>
)

// Footer CSS styling
const footerStyles = {
  backgroundColor: '#61DBFB',
}

function Footer() {
  return (
    <footer style={footerStyles}>
      <p>How does a website kick a soccer ball?</p>
      <small>Using its footer!</small>
    </footer>
  )
}

const app = (
  <div className='app'>
    {header}
    {main}
    <Footer />
  </div>
)

function Image() {
  return (
    <div>
      <img
        src={chrisImage}
        alt='Chris'
        style={{
          width: '300px',
          height: '300px',
          borderRadius: '15px',
        }}
      />
    </div>
  )
}

ReactDOM.render(app, rootElement)