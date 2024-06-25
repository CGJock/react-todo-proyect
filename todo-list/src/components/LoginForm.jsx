import { useState } from "react"
import { getTask } from "../services/fetch";
import {  useNavigate } from "react-router-dom";

const LoginForm = () => {
    const navigate = useNavigate()
    const [User, setUser] = useState();//se dejan vacios por que es el dato que trae el input
    const [Password, setPassword] = useState();
    async function logear() {
        let datos = await getTask();
        let usuarioEncontrado = false;
        datos.forEach((e)=> {
        
          User === e.user && Password === e.password ?  usuarioEncontrado = true : usuarioEncontrado = false 
          localStorage.setItem("user", JSON.stringify(e.user))
          // Navigate('/',{replace : true} )*no te necesito pero te dejo ahi por si acaso
        });
        if (usuarioEncontrado) {
          console.log("encontrado");
          navigate("/Profile")
        } else{
          console.log("no se encontro");
        }
      }
      return (
        <>
           <h1>login page</h1>
            <input value={User} onChange={(event) => setUser(event.target.value)} id='User' type='text' placeholder='usuario'></input>
            <input value={Password} onChange={(event) => setPassword(event.target.value)} id='Password' type='text' placeholder='contra'></input>
            <button onClick={logear}>logearse</button>
        </>
      )
    }
    
    export default LoginForm
