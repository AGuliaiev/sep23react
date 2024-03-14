import {IAuth, ITokens, IUser} from "../interfaces";
import {IRes} from "../types";
import {urls} from "../constans";
import {apiService} from "./apiService";

const accessTokenKey = 'access'
const refreshTokenKey = 'refresh'
const authService = {
    register(user:IAuth):IRes<IUser>{
        return apiService.post(urls.auth.register, user)
    },
    async login(user:IAuth):Promise<void>{
        const {data} = await apiService.post(urls.auth.login, user);
        this.setTokens(data)
    },
    me():IRes<IUser>{
      return apiService.get(urls.auth.me)
    },
    setTokens({access, refresh}: ITokens): void {
        localStorage.setItem(accessTokenKey, access)
        localStorage.setItem(refreshTokenKey, refresh)
    },
    getAccessToken(): string {
        return localStorage.getItem(accessTokenKey);
    },
    getRefreshToken():string {
        return localStorage.getItem(refreshTokenKey)
    },
    deleteTokens():void{
        localStorage.removeItem(accessTokenKey)
        localStorage.removeItem(refreshTokenKey)
    }
}

export {
    authService
}