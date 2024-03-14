import React from 'react'
import HeaderMw from './headermiddlewall/HeaderMw'
import CreateTwit from './createtwit/CreateTwit'


function Middlewall() {
  return (
    <div className="w-3/5 border border-gray-600 h-auto  border-t-0">
    <HeaderMw/>
    <hr className="border-gray-600" />
    <CreateTwit/>
  </div>
  )
}

export default Middlewall
