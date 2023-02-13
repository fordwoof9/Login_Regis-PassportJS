import NavBar from '@/comps/NavBar'
import styles from '@/styles/Home.module.css'
import { useState, useEffect } from 'react'
import axios from 'axios'


export default function Home() {

  const [username, setUsername] = useState('')

  useEffect(() => {
    getUser()
  }, [])

  const getUser = () => {
    axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:3001/getUser"
    }).then(res => {setUsername(res.data.username)}).catch(err => console.log(err))
  }


  return (
    <div className={styles.container}>
      <NavBar></NavBar>
      <div>
        <h1>home</h1>
        <h1>Logged in user: {username}</h1>
      </div>
    </div>
  )
}
