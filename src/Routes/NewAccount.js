import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import '../index.css'
function NewAccount(props) {
        const initialState ={
              username:'',
              profilePic:'', 
              password:'',
             }
      const [formState, setFormState]=useState(initialState);
      const [dbCheck, setDbCheck] = useState('')
      const navigate =useNavigate()
      const handleChange = event =>{
              setFormState({...formState,[event.target.id]:event.target.value});
      }
      const handleSubmit = event =>{
              event.preventDefault();
              props.createUser(formState)
              setFormState(initialState)
              navigate('/signin')
              //fetch to retrieve from db with get (backend)
              // if check username ====username && formdata. pasword ==== password in db){navigate()}
              // const userURL = "http://localhost:4000/users/";
              // const getUser = () => {
              //     fetch(userURL)
              //     .then(response => response.json())
              //     .then((result) => setDbCheck(result))
              //   }
              //   getUser()
              //   if(dbCheck.username===username && dbCheck.password===password){
              //     navigate()
              //   }
      }
  return (
   
    <div>
        <form className='form' onSubmit={handleSubmit}>
            
            <label htmlFor="username">Username: </label>
            <input 
                id="username" 
                type="text"
                value={formState.username} 
                onChange={handleChange}
                />
                <br/>
            <label htmlFor="profilePic">Profile Picture Link: </label>
            <input 
                id="profilePic" 
                type="text"
                value={formState.profilePic} 
                onChange={handleChange}
                />
            <label htmlFor="password">Password:</label>
            <input 
                id="password" 
                type="password"
                value={formState.password} 
                onChange={handleChange}
                />
                <br/>
            
             <button type="submit">Create Account</button>   
            <div>
              <p>Already have account?<Link className='signin' to ='/signin'>Sign In</Link></p>
            </div>
        </form>
             
    </div>
  )
}
export default NewAccount
//adding password confirmation
// onSubmit={formState.password===formState.passwordConfirm? handleSubmit: ""
{/* <label 
htmlFor="passwordConfirm">Confirm password: </label>
<input
type="password"
id="passwordConfirm"
onChange={handleChange}
value={formState.passwordConfirm}
/> */}
{/* <p>{formState.password===formState.passwordConfirm?"Confirmed" : "Retry"}</p> */}