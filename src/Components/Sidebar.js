import React from 'react'
import {Link} from 'react-router-dom'
import './Sidebar.css'
import '../index.css'
function Sidebar() {
                
        if(!sessionStorage.signedIn) {
                return (
                        <div className="sidebar">
                        <Link to={`/users/${JSON.parse(sessionStorage.signedIn)?._id}`}>
                                <i className="profile fa-lg">Profile</i>
                        </Link>
                        <Link to="/all">
                                <i className="posts">Posts</i>
                        </Link>
                        <Link to="/following">
                                <i className="followers">Following</i>
                        </Link>
                        <Link to="/news">
                                <i className="news">News</i>
                        </Link>
                        <Link to="/events">
                                <i className="events">Events</i>
                        </Link>
                        
                    </div>
                  )
        }
  
return (
        <div className="sidebar">
        <Link to={`/users/${JSON.parse(sessionStorage.signedIn)?._id}`}>
                <div>Profile</div>
        </Link>
        <Link to="/all">
                <div>Posts</div>
        </Link>
        <Link to="/following">
                <div>Following</div>
        </Link>
        <Link to="/news">
                <div>News</div>
        </Link>
        <Link to="/events">
                <div>Events</div>
        </Link>
    </div>
  )
}
export default Sidebar