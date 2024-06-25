
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { postTask } from '../services/fetch';


const Registform = () => {
    const navigate = useNavigate()
    const [User, setUser] = useState();//se dejan vacios por que es el dato que trae el input
    const [Password, setPassword] = useState();
    function registrar() {
         
        postTask(User,Password)//se agregan los parametros al post
        navigate("/Login")
    }
  return (
        <>   
        <h1>register page</h1>
        <input value={User} onChange={(event) => setUser(event.target.value)} id='User' type='text' placeholder='usuario'></input>
        <input value={Password} onChange={(event) => setPassword(event.target.value)} id='Password' type='text' placeholder='contra'></input>
        <button onClick={registrar}>registrar</button>
      </>
    )
  
}

export default Registform