import React from 'react'
import Country from './country/Country'
import GetTopic from './topics/GetTopic'
import ShowMore from './showmore/ShowMore'

function TrendTopic() {
  return (
    <div className="max-w-sm rounded-lg bg-blue-800 overflow-hidden shadow-lg m-4 mr-20">
      <Country/>
      <hr className="border-gray-600" />
      <GetTopic/>
      <ShowMore/>
    </div>
  )
}

export default TrendTopic
