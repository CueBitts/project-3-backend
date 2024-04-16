import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import {useParams} from 'react-router-dom'
import '../index.css'

function Updateuser(props) {
    console.log('props-users:' ,props)

    const {id} = useParams();
    const users = props.users
    const user = users.find(u => u._id === id)
    

    // console.log('users: ', users)
    // console.log('user: ', user)
    // console.log('id: ', id)


    const [formState, setFormState]=useState(user);
    
    const handleChange = event =>{
            setFormState({...formState,[event.target.id]:event.target.value});
    }

    const handleSubmit =(event)=>{
        event.preventDefault()
        props.updated(formState, id)
    }

  return (
   
    <div>Update Account

        <h2>{user.username}</h2>

        <form className='form' onSubmit={handleSubmit}>
            
            <label htmlFor="username">Username: </label>
            <input 
                type="text"
                value={formState.username} 
                name='username'
                placeholder='username'
                onChange={handleChange}
                />
                <br/>

            <label htmlFor="profilePic">Profile Picture Link: </label>
            <input 
                type="text"
                value={formState.profilePic} 
                name='profilePic'
                placeholder="profile picture" 
                onChange={handleChange}
                />

            <label htmlFor="password">Password:</label>
            <input 
                type="password"
                value={formState.password} 
                name="password" 
                placeholder='password'
                onChange={handleChange}
                />
                <br/>
            
             <input type="submit" value='Update Person'/>  

            <div>
              <p>Already have account?<Link className='signin' to ='/signin'> Sign In </Link></p>
            </div>

        </form>
             
    </div>
  )
}

export default Updateuser


