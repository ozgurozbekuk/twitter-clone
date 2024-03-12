import { twits } from "../../../../data"
import SingleTwit from "./SingleTwit"

function TwitGet() {
  return (
    <div>
       
      {twits.map((twit) => {
        return <SingleTwit name={twit.name} username={twit.username} key = {twit.id} content ={twit.content} date = {twit.date} img={twit.imgUrl}/>
      })}
      
    </div>
  )
}

export default TwitGet
