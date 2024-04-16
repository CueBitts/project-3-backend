import {useEffect, useState} from "react";
import {BrowserRouter as Router, Routes, Route, Navigate, BrowserRouter} from "react-router-dom";
import Post from "../Routes/Post";
import User from "../Routes/User";
import Sidebar from "./Sidebar";
import News from "../Routes/News";
import NewAccount from "../Routes/NewAccount";
import HomePage from "../Routes/HomePage";
function Main() {
    
    
    // const postURL = 'https://social-media-appp-api.herokuapp.com/posts/'
    // const postURL = 'http://localhost:4000/posts/'
    const postURL = 'https://spacebarback.onrender.com/posts'
    const [posts, setPosts] = useState(null)
    const getPosts = () => {
        fetch(postURL)
        .then(response => response.json())
        .then(result => setPosts(result.reverse()))
    }
    const createPosts = async (posts) => {
        await fetch('https://spacebarback.onrender.com/posts', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(posts)
        })
        getPosts()
    }
    const updatePosts = async (posts,id) => {
        await fetch(`${postURL}${id}`, {
            method: 'put',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(posts)
        })
        getPosts()
    }
    const like = async (id, userId) => {
        await fetch(`${postURL}like/${id}`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userId)
        })
        getPosts()
    }
    const unlike = async (id, userId) => {
        await fetch(`${postURL}unlike/${id}`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userId)
        })
        getPosts()
    }
    const createComment = async (id, comment) => {
        await fetch(`${postURL}new-comment/${id}`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(comment)
        })
        getPosts()
    }
    // useEffect(() => getPosts(), [])
    
    
    // const userURL = 'https://social-media-appp-api.herokuapp.com/users/'
    const userURL = 'https://spacebarback.onrender.com/users/'
    const [users, setUsers] = useState(null)
    const getUsers = () => {
        fetch(userURL)
        .then(response => response.json())
        .then(result => setUsers(result))
    }
    
    const createUser = async (users) => {
        await fetch (userURL, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(users)
        })
        getUsers()
    }
    const updated = async (used,id) => {
        await fetch (`${userURL}${id}`, {
            method: 'put',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(used)
        })
        getUsers()
    }
    const deleteUser = async (id) => {
        await fetch (`${userURL}${id}`, {
            method: 'delete'
        })
        getUsers()
    }
    useEffect(() => {getUsers();getPosts()}, [])
    
    return (
        <main className="main-container">
            {/* <BrowserRouter basename={process.env.PUBLIC_URL}> */}
                <Routes>
                    {/* <Route path='/social-media-app-frontend/' element={<Navigate to='/social-media-app-frontend/all' replace/>}/> */}
                    <Route 
                        path='/all' 
                        element={<Post
                            posts={posts} 
                            users={users}
                            createPosts={createPosts}
                            updatePosts={updatePosts}
                            like={like}
                            unlike={unlike}
                            createComment={createComment} 
                        />} 
                    />
                    <Route 
                        path='/users' 
                        element={<User
                            users={users} 
                        />} 
                    />
                    <Route
                        path='/users/:id'
                        element={<HomePage
                            users={users}
                            updated={updated} 
                            deleteUser={deleteUser}
                        />}
                    /> 
                    <Route 
                        path='/createaccount'
                        element={<NewAccount
                            users={users}
                            createUser={createUser}
                        />}
                    />
                </Routes>
            {/* </BrowserRouter> */}
        </main>
    );
}
export default Main;