import { useEffect, useState } from 'react'
import logo from './images/logo.png'
import './app.less'

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="app">
      <div className="logo-wraper">
        <img src={logo} alt="logo" />
      </div>
      <div className="box">
        <h2 className='title-wrapper'>
          <div className='title'>awesome demo</div>
          <div className='sub-title'>this's  created by vite </div>
        </h2>
        <a href={"#"} className='btn btn-white'>clice me</a>
      </div>
    </div>
  )
}

export default App
