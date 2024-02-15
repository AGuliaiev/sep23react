import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";
import {userService} from "../../services/UserService";
import Post from "./post";

const Posts = () => {

    const [posts, setPosts] = useState([])
    const {state:{userId}} = useLocation();

    useEffect(() => {
        userService.getPostById(userId).then(({data})=>setPosts(data))
    }, [userId]);

    return (
        <div>
            {posts.map(post=><Post key={post.id} post={post}/>)}
        </div>
    );
};

export default Posts;