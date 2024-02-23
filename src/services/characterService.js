import {apiService} from "./apiService";
import {urls} from "../constans/urls";

const characterService = {
    getByIds: (ids) => apiService.get(urls.characters.byId(ids))
}

export {
    characterService
}