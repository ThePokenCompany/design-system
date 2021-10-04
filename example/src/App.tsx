import { Image } from '@rareporn/ui'
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Image
          src="https://global-uploads.webflow.com/612d3e6930fdc54f36f7d349/612f49b5ac99ee2dc27c9926_GIF_POKMI_V1_blanc.gif"
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
