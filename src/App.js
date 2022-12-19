import './App.css';
import {useEffect, useState} from 'react'
import axios from 'axios'

function App() {
  const [token,setToken] = useState("");
  useEffect(()=>{
    axios.post("https://reqres.in/api/login",
    {
      "email": "eve.holt@reqres.in",
      "password": "cityslicka"
    }
  )
  .then((response)=> setToken(response.data.token))
  .catch((error)=>{
    console.log(error);
    if(error.response.status === 400){
      alert(error.message)
    }
  })
  },[])
  return (
    <div className="App">
      <div>
        <p>{token}</p>
      </div>
    </div>
  );
}

export default App;
