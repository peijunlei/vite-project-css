import { useState } from 'react'
import './app.less'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <div className="logo-wraper">
        <img src="./images/logo.png" alt="logo" />
      </div>
      <div className="box">
        <h2 className='title-wrapper'>
          <span className='title'>awesome demo</span>
          <span className='sub-title'>this's  created by vite </span>
        </h2>
        <a href={"#"} className='btn'>clice me</a>
      </div>

    </div>
  )
}

export default App
