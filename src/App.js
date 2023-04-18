import React, { useState, useEffect} from 'react';
import './App.css';
import Todo from './Components/Taskboard.js';

function App() {
  let [tasks, setTasks] = useState([]);
 const [count, setCount] = useState(0);
 const [currStatus, setCurrStatus] = useState('active');
 const [taskname, setTaskname] = useState('');


 const isChecked = (e) => {
  const updatedTasks = tasks.map((task) => {
    console.log('id: '+task.id);
    console.log('target.id: '+e.target.id);
    if(task.id == e.target.id){
      let status = (e.target.checked ? 'completed' : 'active');
   
      return {...task, status: status };
    }
    return task;
  });
  setTasks(updatedTasks);
  
 };




const handleSubmit = event => {
  event.preventDefault();
  
  if(taskname){
      setCount((currCount => currCount + 1));
      console.log(count);
      setTasks([...tasks, {id: count, taskname: taskname,  status: 'active'}]);
      setTaskname('');
       
  }
}

  return (
    <div className="App">
      <div className='main'>
      <article className='border shadow w-max-4xl w-6/12'>
        <header className='w-max-4xl flex flex-col border px-20 py-10'>
          <div className='row'>
            <form className='flex flex-row' onSubmit={handleSubmit}>
              <input type="text" className='border border-black-300 p-3 w-10/12 focus:outline-0' value = {taskname} onChange={(event) => { setTaskname(event.target.value)}} placeholder='What to do...'></input>
              <button type='submit' className='w-2/12 bg-blue-500 text-white duration-300 hover:bg-blue-600' >Add Task</button>
            </form>
          
          </div>
        <div className='row m-2 px-5'>
          <span className='flex flex-row space-x-4'>
            <button aria-pressed="true" className='w-fit rounded-full p-3 border border-gray-200 duration-200 text-black hover:bg-orange-400 hover:border-orange-400 hover:text-white' onClick={() => {setCurrStatus('active')}}><p>Active ({tasks.filter(task => {return task.status === "active"}).length})</p></button>
            <button  aria-pressed="true" className='w-fit rounded-full p-3 border border-gray-200 duration-200 text-black hover:bg-green-400 hover:border-green-400 hover:text-white'  onClick={() => {setCurrStatus('completed')}}><p>Completed ({tasks.filter(task => {return task.status === "completed"}).length})</p></button>
            <button  aria-pressed="true" className='w-fit rounded-full p-3 border border-gray-200 duration-200 text-black hover:bg-blue-400 hover:border-blue-400 hover:text-white'  onClick={() => {setCurrStatus('all')}}><p>Show All ({tasks.length})</p></button>
          </span>
        </div>
        </header>
        <ul className='container' aria-labelledby="list-heading">
          {tasks.length > 0 ? ( currStatus === 'all'
           ? (tasks.map((task) => {
          
           return <Todo name={task.taskname}  key = {'task_'+task.id} id={task.id} status={task.status} onchange = {isChecked} completed={task.status === 'completed' ? true : false}/>})
           )
          :  tasks.filter((task) => {
                return task.status === currStatus
              }).map((filteredTask) => {
              return <Todo name={filteredTask.taskname} id={filteredTask.id} key = {'task_'+filteredTask.id} status={filteredTask.status}  onchange = {isChecked} completed={filteredTask.status === 'completed' ? true : false} />
              })) : (<li className='row text-center text-gray-300 py-3'> No tasks here...</li>)}
            
        </ul>
      </article>
      </div>
      
    </div>
  );
}

export default App;
