import { useEffect, useState } from 'react'
import logo from './images/logo.svg'
import composition1 from './images/composition-1.png'
import composition2 from './images/composition-2.png'
import composition3 from './images/composition-3.png'
import './app.less'

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="app">
      <header className="header">
        <div className="logo-wraper">
          <img src={logo} alt="logo" />
        </div>
        <div className="box text-center">
          <h1 className='title-wrapper'>
            <div className='title'>awesome demo</div>
            <div className='sub-title'>this's  created by vite </div>
          </h1>
          <a href={"#"} className='btn btn-white'>clice me</a>
        </div>
      </header>
      <main className="main">
        <section className='main-about'>
          <div className="text-center mb20">
            <h2 className='main-title'>
              vite create so fast
            </h2>
          </div>
          <div className="main-content">
            <div className="left">
              <h3 className='heading mb10'>
                this is h3 heading-1#
              </h3>
              <p className='paragraph'>this is paragraph description of heading-1# this is paragraph description of heading-1#this is paragraph description of heading-1#</p>
              <h3 className='heading mb10'>
                this is h3 heading-2#
              </h3>
              <p className='paragraph'>this is paragraph description of heading-2# this is paragraph description of heading-2#this is paragraph description of heading-2#</p>
              <a href="#" className='btn-link'> learn more &rarr;</a>
            </div>
            <div className="right">
              <div className="composition">
                <img src={composition1} alt="awesome" className='composition-photo composition-photo-p1' />
                <img src={composition2} alt="awesome" className='composition-photo composition-photo-p2' />
                <img src={composition3} alt="awesome" className='composition-photo composition-photo-p3' />
              </div>
            </div>
          </div>
        </section>
        
      </main>
    </div>

  )
}

export default App
