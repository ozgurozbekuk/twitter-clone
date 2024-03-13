import React, { useState } from 'react'
import TwitInput from './createtwitblocks/TwitInput'
import TwitIcons from './createtwitblocks/TwitIcons'
import { twits } from '../../../../data'
import SingleTwit from './singletwit/SingleTwit'

function CreateTwit() {
  const [twit,setTwit] = useState('')
  const [id,setId] = useState(3)
  
  function handleCreateTwit(newTwit) {
    setTwit(newTwit)
  }

  function handleBtnClick() {
    if(twit !== ""){
      const obj = new Create(twit);
      setId(id + 1)
      twits.push(obj)
      console.log(twits)
    }
    
  }
  
  
  

  function Create(content) {

    const currentDate = new Date();
    const options = { month: 'short' };
    const monthAsString = currentDate.toLocaleDateString('en-US',options);
    const day = currentDate.getDate();
    const formattedDate = `${day} ${monthAsString}`;

   


        this.id = id;
        this.name = "Sonali Hirave";
        this.username = "ShonaDesign";
        this.content = content;
        this.imgUrl = "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=448&q=80";
        this.date = formattedDate;
  }

   
   

  return (
    <div>
      <TwitInput  createNewTwit = {handleCreateTwit}/>
      <TwitIcons onClick = {handleBtnClick}/>
      {twits.map((twit) => {
        return <SingleTwit name={twit.name} username={twit.username} key = {twit.id} content ={twit.content} date = {twit.date} img={twit.imgUrl}/>
      })}
    </div>
  )
}

export default CreateTwit
