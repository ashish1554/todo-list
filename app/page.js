"use client"
import { useState } from "react"
const page = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [mainTask, setMainTask] = useState([])

  const submitHandler=(e)=>{
        e.preventDefault()
        // console.log(title)
        // console.log(desc)
        setMainTask([...mainTask,{title,desc}])
        settitle("")
        setdesc("")
  }
  const deleteHandler=(i)=>{
    let copytask=[...mainTask]
    copytask.splice(i,1)
    setMainTask(copytask)
  }
  let renderTask=<h2>NO Task </h2>
  if(mainTask.length>0){
  renderTask=mainTask.map((t,i)=>{
    return(
      <li key={i} className="flex items-center justify-between">
          <div className="flex justify-between w-2/3">
        <h5>
          {t.title}
        </h5>
        <h6>
          {t.desc}
        </h6>
      </div>
      <button
      onClick={deleteHandler}
      className="bg-red-400 text-white py-2 px-4 rounded mb-3">Delete</button>
      </li>
    )
  })
}
  return (
  <>
    <h1 className="bg-black text-white p-5 text-5xl text-center">TODOLIST</h1>
    <form onSubmit={submitHandler}>
        <input type="text"
        className='text-2xl border-zinc-800 border-2 m-5'
        placeholder="Enter Task Here"
        value={title}
        onChange={(e)=>{
            settitle(e.target.value);
        }} />
        <input type="text"
        className='text-2xl border-zinc-800 border-2 m-5'
        placeholder="Enter Descreptions" 
        value={desc}
        onChange={(e)=>{
          setdesc(e.target.value);
        }}/>
        <button className="bg-green-600
        text-white px-4 py-2 font-bold rounded m-5">Add Task</button>
    </form>
    <hr />
    <div className="p-10 m-5 bg-slate-600 text-white text-center">
        <ul>
          {renderTask}
        </ul>
    </div>
  </>
  )
}

export default page