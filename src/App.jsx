import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Logo from './components/leftmenu/logo/Logo'
import Navbar from './components/leftmenu/navbar/Navbar'
import AccountList from './components/leftmenu/accountlist/AccountList'
import LeftMenu from './components/leftmenu/LeftMenu'
import Middlewall from './components/middlewall/Middlewall'
import RightMenu from './components/rightmenu/RightMenu'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex">
      <LeftMenu/>
      <Middlewall/>
      <RightMenu/>
  </div>

  )
}

export default App
