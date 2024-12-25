import React, {  useState } from 'react';

import './App.css';

function App() {
  let [taskList, setTaskList] = useState([]);


  let saveToList=(event)=>{

  let toname=event.target.toname.value;
  if(!taskList.includes(toname)){
      let finalList=[...taskList,toname];
      setTaskList(finalList);
  } 
  else{
    alert('Task already exists');
  } 
    event.preventDefault();
  }

  let items=taskList.map((value,index)=>{


    return(
      <ToDoListItem key={index} value={value} indexNUmber={index} taskList={taskList} setTaskList={setTaskList}/>
    )
});
  return (
    <div className="App">
      <h1>To-Do List</h1>
      <form onSubmit={saveToList}>
        <input type="text" placeholder="Add a task" name='toname'/>
        <button>Add Task</button>
      </form>

      <div className='outerDiv'>
      <ul>
        {items}
      </ul>
      </div>
    </div>
  );
}

export default App;


function ToDoListItem({value,indexNUmber,taskList,setTaskList}){

  let [status,setStatus]=useState(false)
  let deletRow=()=>{
    let finalList=taskList.filter((v,i)=>i!==indexNUmber)
    setTaskList(finalList);
    
  }
  let checkStatus=()=>{
    setStatus(!status);
  }
  return(
    <li className={(status)?'complete':''} onClick={checkStatus} >{indexNUmber+1} {value} <span onClick={deletRow}>&times;</span></li>
  );
}