import {IRes} from "../types";
import {ICar} from "../interfaces";
import {apiService} from "./apiService";
import {urls} from "../constans";

const carService = {
    getAll:(): IRes<ICar[]> => apiService.get(urls.cars.base)
}

export {
    carService
}