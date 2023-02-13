import NavBar from "@/comps/NavBar"
import { useState } from "react"
import axios from "axios"


export default function Register() {

    const [registerUsername, setRegisterUsername] = useState('')
    const [registerPassword, setRegisterPassword] = useState('')

    const register = async () => {
        axios({
            method: "POST",
            data: {
                username: registerUsername,
                password: registerPassword
            },
            withCredentials: true,
            url: "http://localhost:3001/register"
        }).then((res) => console.log(res)).catch((err) => console.log(err));
        }

    return (
        <div>
            <NavBar> </NavBar>
            <div>
            <h1>Register</h1>
            <input type="text" name="username" placeholder="username" onChange={e => setRegisterUsername(e.target.value)}></input>
            <input type="password" name="password" placeholder="password" onChange={e => setRegisterPassword(e.target.value)}></input>
            <button onClick={register}>Register</button>
            </div>
        </div>
    )
}