import './App.css'
import TaskDeleteRow from "./components/TaskDeleteRow"
import NoTasks from "./components/NoTasks"
import InputSubmitSection from "./components/InputSubmitSection"
import { useState } from "react"

export default function App() {

  const [tasks, setTasks] = useState([])
  const [input, setInput] = useState("")
  const [keys, setKeys] = useState([])

  function submit() {

    const newInput = input
    const newTasks = structuredClone(tasks)
    newTasks.push(newInput)
    setTasks(newTasks)
    setInput("")

    var newKeys = structuredClone(keys)
    newKeys.push(crypto.randomUUID())
    setKeys(newKeys)

  }

  function removeTask(id) {

    var newTasks = structuredClone(tasks)
    newTasks = newTasks.filter((item, index) => index !== id)
    setTasks(newTasks)    

    var newKeys = structuredClone(keys)
    newKeys = newKeys.filter((item, index) => index !== id)
    setKeys(newKeys)

  }

  return (

    <>

      <div className="background">

        <div className="placeholder" />

        <div className="container">
          
          <div className="cards">          
          
          {
            
            (tasks.length === 0) ?  <NoTasks /> : tasks.map((item, index) => <TaskDeleteRow row={index}
                                                                                            task={item}
                                                                                            key={keys[index]}
                                                                                            lastTask={tasks.length - 1}
                                                                                            onClick={removeTask} />) 
            
          }
          
          </div>

          <InputSubmitSection input={input} 
                              setInput={setInput}
                              onClick={submit} />

        </div>
      
      </div>

    </>

  )

}