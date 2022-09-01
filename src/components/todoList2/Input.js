import React, { useState } from 'react'
import ButtonList2 from '../common/ButtonList2'

const Input = ({todoList, setTodolist}) => {

    const [input, setInput] = useState()

    const inputHoldler = (e) => {
        setInput(e.target.value)

    }

    const submitHoldler = (e) => {
        e.preventDeafault()
    }


  return (
    <div>
        
            <input className= "border-2 border-black-700 "onChange= {inputHoldler} type="text" placeholder= "請輸入代辦事項"  value={input}/>
            <ButtonList2 onClick= {submitHoldler}>送出</ButtonList2>
        
    </div>
  )
}

export default Input