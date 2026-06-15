import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/gfygh.jpeg'
import './App.css'
import Sidebar from './components/sidebar'
import './components/universal.css'



function App() {
  const [count, setCount] = useState(0)

  return (
      <div className='app'  style={{ backgroundImage: `url(${heroImg})` }}>
      <Sidebar/>
        </div>
  )
}

export default App;
