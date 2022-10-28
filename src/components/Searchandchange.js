import React, { useState } from 'react';
import './design.css';;

export function Searchandchange() {

  const [textInput, setTextInput] = useState("This is the sample text, you can find any word you want to search from this sample text or you can update you own text and search from it. thank you..")
  const [find, setfind] = useState("")
  const [replaceInput, setReplaceInput] = useState("")

  let handleReplace = () => {

    let replacedResult = textInput.replace(find, replaceInput);
    textInput.search(find) === -1 ?
      alert("the word you want to search, did not found, please try to find the word which is avilable in text input..") :
      setTextInput(replacedResult);
  }

  return (
    <div className='searchWord'>
      <textarea onChange={(event) => setTextInput(event.target.value)} value={textInput}></textarea><br />
      find: <input onChange={(event) => setfind(event.target.value)} type='text' placeholder='enter your input to find your text..' /><br />
      Replace: <input type='text' placeholder='enter you input here to replace word...' onChange={(event) => setReplaceInput(event.target.value)} /><br />
      <button onClick={handleReplace}> Replace</button>
    </div>
  )
} 

