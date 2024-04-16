import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {useNavigate} from 'react-router';
import '../index.css'
import Header from '../Components/Header'
// const useSignedIn = () => {
//     const getSignedIn = () => {
//         console.log('getSignedIn is firing!')
        
//         return sessionStorage.getItem('signedIn')
//     }
    
//     const [signedIn, setSignedIn] = useState(getSignedIn())
//     const saveSignedIn = (user) => {
//         console.log('setSignedIn is firing!')
//         sessionStorage.setItem('signedIn', user)
//         setSignedIn(user)
//     }
//     return {saveSignedIn, signedIn}
// }
function LogIn() {
    const [formState, setFormState] = useState({
        username: '', 
        password: ''
    })
   
   const handleChange = (e) => {
        console.log('handleChange firing!')
        setFormState({ ...formState, [e.target.name]: e.target.value })
    }
        
    const [msg, setMsg] = useState()
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        console.log('handleSubmit firing!')
        e.preventDefault()
        // await fetch('https://social-media-appp-api.herokuapp.com/users/signin', {
        await fetch('http://localhost:4000/users/signin', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formState)
        })
        .then(response => response.json())
        .then(result => {
            if(!result) {
                setMsg('Username or Password Incorrect')
            } else {
                setMsg('Sign in Successful')
                sessionStorage.setItem('signedIn', JSON.stringify(result))
                navigate('/all')
                window.location.reload(false)
            }
        })
        .catch(error => {
            console.log(error)
        })
        setFormState({
            username: '', 
            password: ''
        })  
        
    }
    return (
        <div>
            <form className='form'>
                <h2 className='title'>Sign in</h2>
                {/* <h2>Signed in: {JSON.parse(sessionStorage.signedIn).username}</h2> */}
                <input
                    type="text"
                    name="username"
                    placeholder="username"
                    defaultValue={formState.username}
                    onChange={handleChange}
                />
                {/* {console.log(formState.username)} */}
                <input
                    type="password"
                    name="password"
                    placeholder="password"
                    defaultValue={formState.password}
                    onChange={handleChange}
                />
                <br/>
                {/* {console.log(formState.password)} */}
                <button type='button' onClick={handleSubmit}>Log in</button>   
                <p>{msg}</p>
                <div>
                    <p>Don't have an account?<Link className='register-link' to ='/createaccount'> Create Account</Link></p>
                </div>
            </form>
        </div>
    )
}
// Signin.propTypes = {
//     setSignedIn: PropTypes.func.isRequired
// }
export default LogIn;