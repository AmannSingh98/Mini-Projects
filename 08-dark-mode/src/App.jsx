import DarkMode from './component/DarkMode'

import './App.css'
import DownloadButton from './component/DownloadButton'
import Content from './component/Content'

const App = () => {
  return (
    <div className="main-container">
      <header>
        <DarkMode />
      </header>
      <div className="horizontal-line" />
      <section className="secondary-container">
        <Content />
      </section>
      <section className="button-container">
        <DownloadButton />
      </section>
    </div>
  )
}

export default App
