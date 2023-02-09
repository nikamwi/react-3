
import { useEffect, useState } from 'react';
import './App.css';

const generateUsers = () => {
  return [
    {name: 'name1' , lname:'lname1', age: 12, id:1},
    {name: 'name2' , lname:'lname2', age: 21, id:2},
    {name: 'name3' , lname:'lname3', age: 23, id:3},
    {name: 'name4' , lname:'lname4', age: 65, id:4},
    {name: 'name5' , lname:'lname5', age: 23, id:5},
    {name: 'name6' , lname:'lname6', age: 13, id:6},
    {name: 'name7' , lname:'lname7', age: 52, id:7},
    {name: 'name8' , lname:'lname8', age: 13, id:8},
    {name: 'name9' , lname:'lname9', age: 54, id:9},
    {name: 'name10' , lname:'lname10', age: 56, id:10}
  ]
}

function App() {
  

  const [users,setUsers] = useState([]);
   
  useEffect(() => {
    setUsers(generateUsers());
  }, []);

  useEffect(() => {
    document.title =" ${users.length} users left ";
  }, [users])


  const remove = () =>{
    setUsers((prevUsers) => {
      const index = Math.floor(Math.random() * prevUsers.length);
      const newUsers = prevUsers.filter((...  ind) => ind !== index);
      return newUsers
    })
  }


  return (
    <div className='App'>
      <button onClick={remove}>remove users</button>  
      {users.map(({id, name, lname, age}) => {
         <h1 key={id}>{name} {lname} {age}</h1>
      })}
    </div>
  );
}

export default App;
// ekranze ar gamoaq