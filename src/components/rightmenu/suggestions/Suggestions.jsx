import React from 'react'
import Title from './title/Title'
import GetPerson from './personsuggest/GetPerson'
import ShowMore from '../trendtopic/showmore/ShowMore'

function Suggestions() {
  return (
    <div className="max-w-sm rounded-lg bg-blue-800 overflow-hidden shadow-lg m-4 mr-20">
      <Title/>
      <GetPerson/>
      <ShowMore/>
    </div>
  )
}

export default Suggestions
