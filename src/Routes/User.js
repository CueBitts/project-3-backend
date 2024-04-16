import React from "react"
import { Link } from 'react-router-dom';
import './Post.css'

function User(props) {
    console.log(props.users)

    const loaded = () => {
        return props.users.map((user) => (
                <div key={user._id} className='user'>
                        <h3>{user.username}</h3>
                        <img src={user.profilePic} />
                        {/* { user.following.map((follow => {
                            return(
                                <div>
                                <h4>{follow}</h4>
                                </div>
                            )
                        }))} */}

                    {/* <Link className='signin' to ={`/users/${user._id}`}> View Account </Link> */}
                        
                </div>
            )
        )
    }

    const loading = () => {
        return <h1>Loading...</h1>
    }
    return ( <div>{props.users ? loaded() : loading()}</div>)
}

export default User

