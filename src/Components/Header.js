import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';
function Header() {
  if(!sessionStorage.signedIn) {
  
    return (
      <div className='header-no-account'>
          <div>
            
          </div>  
        <div className="app-page">
              <h1>SpaceBar</h1>
              <p>A social media app that will help you communicate with friends.</p>
        </div>
        {/* <Link to={`/users/${JSON.parse(sessionStorage.signedIn)?._id}`}>Profile </Link> */}
        <div className="headerLinks">
          <Link to='/signin'>Sign In </Link>
          <Link to='/createaccount'>Create an Account</Link>
        </div>
    </div>
    )
  }
  
  return (
    <div className='header'>
      <div className='userName'>
        <img className="profile-pic" src={JSON.parse(sessionStorage.signedIn)?.profilePic} alt=''/>
        <h3 className="profile-name">{JSON.parse(sessionStorage.signedIn)?.username}</h3>
      </div>

      <Link to='/all'><h2>SpaceBar</h2></Link>
      
      <div className="headerLinks">
        <Link to='/signin'>Sign In</Link>
        <Link to='/createaccount'>Create an Account</Link>
            
      </div>
      {/* <Link to={`/users/${JSON.parse(sessionStorage.signedIn)?._id}`}>Profile - </Link> */}
    </div>
  )
  
}
export default Header;