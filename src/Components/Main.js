import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Post from "../Routes/Post";
import Home from "../Routes/Home"
import User from "../Routes/User";


function Main(props) {
    const [posts, setPosts] = useState(null);
    const [users, setUsers] = useState(null);


    const userURL = "http://localhost:4000/users/";
    const postURL = "http://localhost:4000/posts/";

    
    const getPosts = () => {
        fetch(postURL)
        .then(response => response.json())
        .then((result) => setPosts(result))
    }
    
    const getUsers = () => {
        fetch(userURL)
        .then(response => response.json())
        .then((result) => setUsers(result))
    }
    
    const createPosts = async (posts) => {
        await fetch(postURL, {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
		        body: JSON.stringify(posts),
        });
        getPosts();
    }; 

    useEffect(() => getUsers(), []);
    useEffect(() => getPosts(), []);

    return (
        <main>
            <Routes>
                <Route 
                    path='/posts' 
                    element={<Post
                        posts={posts} 
                        users={users}
                        createPosts={createPosts} 
                    />} 
                />
                 <Route 
                    path='/users' 
                    element={<User
                        users={users} 
                    />} 
                />
                <Route
                    path="/users/:id"
                    element={
                      
                        <Home
                        users={users}
                        />
                    }
                />
            </Routes>
        </main>
    );
}

export default Main;