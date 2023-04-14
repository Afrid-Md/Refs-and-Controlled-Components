import NewForm from './Components/newForm';
import './App.css';
import UserList from './Components/userList';
import { useState } from 'react';

function App() {
  const[enteredUser, setEnteredUser]=useState([]);

  function saveUserHandler(uName, uAge, uclge){
    setEnteredUser((prevUser)=>{
      return [...prevUser,{name: uName, age:uAge, clge:uclge,id:Math.random().toString()}]
    })
  }
  return (
    
    <div className="App">
      <h1>Simple form</h1>
      <NewForm saveUser={saveUserHandler}/>
      <UserList users={enteredUser}/>
    </div>
  );
}

export default App;
