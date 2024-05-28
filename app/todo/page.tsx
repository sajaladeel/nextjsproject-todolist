"use client"
import React, { useState } from 'react';

// import { Container } from './styles';

interface Task{
task:string,
detail:string
}

function Todo()  {
  let [task,setTask] = useState ("")
  let [detail,setDetail]= useState("")
  let [mainTask,setMainTask]=useState<Task[]>([])
  
  function taskHandler(e :any){
    e.preventDefault();
    setTask("");
    setDetail("");
    setMainTask([...mainTask,{task,detail}])

  }

  let savedTasks: any = <div    className="
  font-bold
  text-center
  pt-10
  text-xl
  text-white
  ">No Tasks Available right now.</div>

// del button
function deleteHnadler(e:any) {
    let copyMainTask =[...mainTask];
    copyMainTask.splice(e,1)
    setMainTask(copyMainTask)
    
}
  
  if(mainTask.length > 0){
    savedTasks = mainTask.map((e,index)=>{
        return <div  key={index} className='bg-gradient-to-br from-white
        flex justify-around py-2 flex-col items-center  
        mb-1 lg:flex-row gap-4
        '>
            <h1 className='lg:w1/4 text-wrap text-start font-bold text-black'>{e.task}</h1>

            <h1 className='lg:w1/2 text-wrap text-start text-black'>{e.detail}</h1>

            <button onClick={deleteHnadler} className='button lg:w-1/9'><svg viewBox="0 0 448 512" className="svgIcon"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path></svg></button>
        </div>
    })
  }

    return <div className='main-bg min-h-[calc(100vh-60px)]
  px-4 py-1 '>
    
    <div className='w-full h-full flex flex-col'>
        <h1 className='bg-black lg:text-3xl text-white font-bold text-center'>
            My  Todo List
        </h1>

        <form className=' container flex flex-col lg:flex-row gap-4 py-2'> 
            <input  className='text-sm lg:text-2xl text-black' 

            value={task}
            onChange={(e)=>{setTask(e.target.value)}}
            type="text" placeholder='Enter task here'/>

            <input  className='text-sm lg:text-2xl  text-black'
            value={detail} onChange={(e)=>{setDetail(e.target.value)}} 
            type="text" placeholder='Enter Details here'/>

            <button onClick={taskHandler}
            className='btn outline-double'
            >Add Task</button>
        </form>
        <div className='font-bold 
        text-center pt-10 text-xl'>
            {savedTasks}

        </div>
    </div>

     </div>
}
export default Todo;