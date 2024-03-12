import React from 'react'
import SearchBar from './searchbar/SearchBar'
import TrendTopic from './trendtopic/TrendTopic'
import Suggestions from './suggestions/Suggestions'
import Policy from './policy/Policy'

function RightMenu() {
  return (
    <div className="w-2/5 h-12">
    <SearchBar/>
    <TrendTopic/>
    <Suggestions/>
    <Policy/>
  </div>
  )
}

export default RightMenu
