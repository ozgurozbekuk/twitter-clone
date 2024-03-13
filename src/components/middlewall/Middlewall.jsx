import React from 'react'
import HeaderMw from './headermiddlewall/HeaderMw'
import CreateTwit from './createtwit/CreateTwit'


function Middlewall() {
  return (
    <div className="w-3/5 border border-gray-600 h-auto  border-t-0">
    <HeaderMw/>
    <hr className="border-gray-600" />
    <CreateTwit/>
    {/* <hr className="border-blue-800 border-4" /> */}
  </div>
  )
}

export default Middlewall
