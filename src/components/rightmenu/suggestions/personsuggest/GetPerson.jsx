import { suggestions } from "../../../../../data"
import PersonSuggest from "./PersonSuggest"

function GetPerson() {
  return (
    <div>
      {suggestions.map((person,index) => {
        return <PersonSuggest name={person.name} username={person.username} key={index}/>
      })}
    </div>
  )
}

export default GetPerson
