import React, {useEffect, useState} from 'react';
import {PostDetails} from "../components/PostContainer/PostDetails";
import {postService} from "../services";
import {useParams} from "react-router-dom";

const PostDetailsPage = () => {
    const [postDetails, setPostDetails] = useState(null)
    const {id} = useParams();
    useEffect(() => {
        postService.byId(id).then(({data})=>setPostDetails(data))
    }, [id]);

    return (
        <div>
            {postDetails&&<PostDetails postDetails={postDetails}/>}
        </div>
    );
};

export {
    PostDetailsPage
}