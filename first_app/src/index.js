import React from 'react'
import ReactDOM from 'react-dom'

const jsxElement = <h1>This is a JSX element.</h1>
const rootElement = document.getElementById('root')

function Title() {
  return <h2>Getting Started with React</h2>
};

const header = (
  <header>
    <h1>Welcome to 30 Days of React</h1>
    <Title />
    <h3>JavaScript Library</h3>
  </header>
)

ReactDOM.render(header, rootElement)