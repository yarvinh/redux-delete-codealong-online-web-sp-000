import React from 'react'

// const Todo = props => {
//   <li>{props.text}</li>
  
// }

const Todo = props => {
    // console.log(props.text.text)
    return (
      <div>
        <span>{props.todo.text}</span>
        <button onClick={() => props.delete(props.todo.id)} >DELETE</button>
      </div>
    )
  }
   
  

export default Todo;
