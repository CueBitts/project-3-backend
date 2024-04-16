import React, {useState} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';
function HomePage(props) {
    console.log(props)
    const navigate=useNavigate()
    const { id } = useParams()
    const users = props.users
    const user = users?.find(u => u._id === id)
    console.log('this is user: ',user)
    const [formState, setFormState]=useState(user);
    const updateForm=(value)=>{
        return setFormState((prev)=>{
            return {...prev, ...value};
        })
    }
    const handleSubmit =(event)=>{
        event.preventDefault()
        props.updated(formState, id)
        
    }
    const delUser =() => {
        props.deleteUser(id)
        navigate('/users')
    }
  
    return (
        <div className="post-home">
                <img className="profile-pic-home" src={user?.profilePic}  />
            <h2>{user?.username}</h2>
      {/* update user stuff added here */}
        <form className='form form-profile' onSubmit={handleSubmit}>
            
            <label htmlFor="username">Username: </label>
            <input 
                type="text"
                value={formState?.username} 
                name='username'
                
                onChange={(e)=>updateForm({username: e.target.value})}
                />
                <br/>
            <label htmlFor="profilePic">Profile Picture Link: </label>
            <input 
                type="text"
                value={formState?.profilePic} 
                name='profilePic'
                placeholder="profile picture" 
                onChange={(e)=>updateForm({profilePic: e.target.value})}
                />
            <label htmlFor="password">Password:</label>
            <input 
                type="password"
                value={formState?.password} 
                name="password" 
                placeholder='password'
                onChange={(e)=>updateForm({password: e.target.value})}
                />
                <br/>
            
             <input type="submit" value='Update Person'/> 
        </form>
             <button className="delete-button" type="button" onClick={delUser}>Delete user</button>
        {/* update end */}
        </div>
    )
  }
export default HomePage
