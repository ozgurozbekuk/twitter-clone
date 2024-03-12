import React from 'react'
import Logo from './logo/Logo'
import Navbar from './navbar/Navbar'
import AccountList from './accountlist/AccountList'

function LeftMenu() {
  return (
    <div className="w-2/5 text-white h-12 pl-32 py-4 h-auto">
        <Logo/>
        <Navbar/>
        <AccountList/>
    </div>
  )
}

export default LeftMenu
