import {apiService} from "./apiService";
import {urls} from "../constans/urls";

const postService = {
    getAll:()=>apiService.get(urls.posts.base),
    getById:(id)=>apiService.get(urls.posts.byId(id))
}

export {
    postService
}