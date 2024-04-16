import {useState, useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import { FaBeer, AiOutlineSend } from 'react-icons/fa';
import './Post.css';
function Post(props) {
    const [newForm, setNewForm] = useState({
        userId: '',
        text: '',
        pic: ''
    })
    const handleChange = (e) => {
        console.log(e.target.value)
        setNewForm({ ...newForm, userId: JSON.parse(sessionStorage.signedIn)._id, [e.target.name]: e.target.value })
    }
    const handleSubmit = (e) => {
        console.log(e.target.value)
        e.preventDefault()
        props.createPosts(newForm)
        setNewForm({
            userId: '',
            text: '',
            pic: ''
        })
    }
    
    const handleLike = (id, likes) => (e) => {
        e.preventDefault()
        let userId = {userId: JSON.parse(sessionStorage.signedIn)._id}
        
        if(likes.find(like => like.userId === JSON.parse(sessionStorage.signedIn)._id)) {
            props.unlike(id, userId)
        } else {
            props.like(id, userId)
        }
    }
    const [newComment, setNewComment] = useState({
        userId: '',
        text: ''
    })
    const handleChangeComment = (e) => {
        setNewComment({ ...newComment, userId: JSON.parse(sessionStorage.signedIn)._id, text: e.target.value})
    }
    const handleSubmitComment = (id) => (e) => {
        e.preventDefault()
        props.createComment(id, newComment)
        setNewComment({
            userId: '',
            text: ''
        })
    }
    
    const getUserById = (id) => {
        var user = props.users?.find(user => user._id === id)
        return user
    }
    const loading = () => {
        return <h1>Loading...</h1>
    }
    
    const loaded = () => {
    console.log(props.posts)
        return props.posts.map(post => ( 
            <div key={post._id} className="post">
                <div className="user-info">
                    <Link to={`/users/${post.userId}`}>
                        <div className="info">
                            <img className="profile-pic" src={getUserById(post.userId)?.profilePic} alt=""/>
                            <h4 className="name">{getUserById(post.userId)?.username}</h4>
                        </div>
                    </Link>
                    <p className="date">{new Date(post.createdAt).getHours() + ":" + new Date(post.createdAt).getMinutes() + ", " + new Date(post.createdAt).toDateString()}</p>
                </div>
                <p className="post-text">{post.text}</p>
                <img className="post-pic" src={post.pic} alt=''/>
                {/* <div className="like-body fa-lg">
                    <i 
                        className={post.likes?.find(like => like.userId === JSON.parse(sessionStorage.signedIn)?._id) ? "liked" : "unliked"}
                        type="button"
                        onClick={handleLike(post._id, post.likes)}>{post.likes?.length}</i>
                    <i className="comment"></i>
                    <hr />
                </div> */}
                {post.comments.map((comment => {
                    return(
                        <div key={comment._id} className="comments">
                            <Link to={`/users/${comment.userId}`}> 
                                <div className="info">
                                    <img className="profile-pic" src = {getUserById(comment.userId)?.profilePic} alt=""/>
                                    <h4 className="name">{getUserById(comment.userId)?.username}</h4>
                                </div>
                            </Link>  
                            <h4>{comment.text}</h4>
                        </div>
                    )
                }))}
                <section className="comments-input">
                    <form>
                        <input className="comment-form"
                            type="text"
                            name="text"
                            placeholder="Leave a commnet..."
                            defaultValue={newComment.text}
                            onChange={handleChangeComment}
                        />
                        <i className="send fa-2x" type="button" onClick={handleSubmitComment(post._id)}></i>
                    </form>
                </section>
            </div>
        ))
    }
    return (
        <div>
        <section >
            <form  className="comment-forms">
                <input
                    className="input-1"
                    type="text"
                    name="text"
                    placeholder="What's new? "
                    defaultValue={newForm.text}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="pic"
                    placeholder="Image"
                    defaultValue={newForm.pic}
                    onChange={handleChange}
                />
                <button className="post-button" type="button" onClick={handleSubmit}>Post</button>
            </form>
            
            {props.posts ? loaded() : loading()}
        </section>
        </div>
    )
}
export default Post;