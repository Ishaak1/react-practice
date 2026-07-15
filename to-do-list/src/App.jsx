import './App.css'
import TaskDeleteRow from "./components/TaskDeleteRow"
import NoTasks from "./components/NoTasks"
import InputSubmitSection from "./components/InputSubmitSection"
import { useState } from "react"

export default function App() {

  const [tasks, setTasks] = useState([])
  const [input, setInput] = useState("")

  function complete(id) {

    var newTasks = structuredClone(tasks)
    const index = newTasks.findIndex(item => item.id === id)
    const task = newTasks[index]

    if (task["isDone"] === false ) {

      task["isDone"] = true

    } else {

      task["isDone"] = false

    }

    setTasks(newTasks)

  }

  function submit() {

    var newTasks = structuredClone(tasks)
    const task = { task: input, isDone: false, id: crypto.randomUUID() }
    newTasks.push(task)

    setTasks(newTasks)
    setInput("")

  }

  function removeTask(id) {

    var newTasks = structuredClone(tasks)
    newTasks = newTasks.filter(item => item.id !== id)
    setTasks(newTasks)

  }

  return (

    <>

      <div className="background">

        <div className="placeholder" />

        <div className="container">
          
          <div className="cards">          
          
            {
            
              (tasks.length === 0) ?  <NoTasks /> : tasks.map((item) => <TaskDeleteRow id={item.id}
                                                                                       task={item.task}
                                                                                       key={item.id}
                                                                                       lastTask={Object.keys(tasks).length - 1}
                                                                                       onClick={removeTask}
                                                                                       complete={complete}
                                                                                       isDone={item.isDone} />) 
            
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