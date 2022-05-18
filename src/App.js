import React, {useState} from 'react'
import "../src/Style.css"

function App() {
  const [first,setfirst] = useState("")
  const [task,settask] = useState([])

  const  handleinput = (e)=> {
    setfirst(e.target.value)
  }

  const handleclick = ()=>{
    const arr = [...task]
    arr.push(first)
    settask(arr)
    setfirst("")
  }

  const deletetask = (e) => {
    const arr2 =[...task]
    arr2.splice(e.target.id, 1)
    settask(arr2)
  }
  var hold = task.map((val, i ) => {
    return <div className="task"><ol>{val}</ol> <button onClick={deletetask} id={i} >Delete</button></div>
  } )
  return (
    <>
    <div className="main">
        <div className="box">
            <h1>To-Do List</h1>
            <div className="inputField">
                <input type="text" 
                onChange={handleinput}
                placeholder="Add new task..."
                value={first}
                />
                <button className ="addbtn" onClick={handleclick}>Add</button>
            </div>
            <div className="container">
                    {hold}
            </div>
        </div>
    </div>
    </>
  )
}

export default App
