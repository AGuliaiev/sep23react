import {apiService} from "./apiService";
import {urls} from "../constans/urls";

const userService = {
    getAll:()=>apiService.get(urls.users.base),
    getById:(id)=>apiService.get(urls.users.byId(id)),
    getPostById:(userId)=>apiService.get(urls.users.getPostsByUserId(userId))
}

export {
    userService
}