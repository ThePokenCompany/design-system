import { Image } from '@rp/ui'
import React from 'react'
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Image
          src="https://pbs.twimg.com/profile_images/1384883067064659969/l7de2RvQ_400x400.jpg"
          className="App-logo overflow-hidden rounded-full h-48 w-full object-cover md:h-full md:w-48"
        />

        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
