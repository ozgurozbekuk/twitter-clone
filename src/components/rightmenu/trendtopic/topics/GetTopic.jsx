import { trends } from "../../../../../data"
import SingleTopic from "./SingleTopic"

function GetTopic() {
  return (
    <>
      {trends.map((trend,index) => {
        return <SingleTopic key={index} id={trend.id} categories = {trend.categories} topic = {trend.topic} count={trend.count}/>
      })}  
    </>
  )
}

export default GetTopic
