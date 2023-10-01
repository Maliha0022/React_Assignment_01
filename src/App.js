import './App.css';
import '../src/components/UI/task.css'
import React,{useState} from 'react';
import Listtask from './components/ToDo_App/Listtask';
import Addtask from './components/ToDo_App/Addtask';

function App() {

  const [Listtodo, setListTodo] = useState([]);
  let addList = (inputText)=>{
    if(inputText !== ''){
      setListTodo([...Listtodo,inputText])
    }
  } 

  const deleteListItem = (key) => {
    let newListTodo = [...Listtodo];
    newListTodo.splice(key,1)
    setListTodo([...newListTodo])
  }

  return (
    <>
    
      <div className='main-container'>
        <div className='center-container'> 

        <Addtask addList={addList}/>
        <h1 className="app-heading">TODO</h1>
        <hr/>
        {Listtodo.map((listItem,i)=>{
          return (
            <Listtask key={i} index={i} item={listItem} deleteItem={deleteListItem}/>
          )
        })}
      

        </div>
      </div>

    </>
  );
}

export default App;
