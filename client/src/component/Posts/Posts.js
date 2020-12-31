import React from 'react'
import Post from './Post/Post';
import { useSelector } from 'react-redux'

// import useStyles from "./Styles";
function Posts() {
    // const classes = useStyles();
    const posts = useSelector(state => state.posts);
    console.log(posts)
    return (
        <>
            <h3>This is post component</h3>
            <Post></Post>
            <Post></Post>
            <Post></Post>
        </>
    )
}

export default Posts
