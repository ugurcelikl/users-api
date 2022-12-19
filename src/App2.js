import './App.css';
import {useEffect, useState} from 'react'

function App() {
  const [users,setUsers] = useState([]);
  useEffect(()=>{
    const fetchPromise = fetch("https://jsonplaceholder.typicode.com/users")
    fetchPromise.then(response => {
      return response.json();
    }).then(users => {
      console.log(users);
      setUsers(users);
    });
  },[])
  return (
    <div className="App">
      {
        users.map((user,key)=>{
         return (
          <div key={key}>
            <p>{user.name + user.surname}</p>
            <p>{user.email}</p>
          </div>
         )
        })
      }
    </div>
  );
}

export default App;
