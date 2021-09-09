import { ADD_CAKE, BUY_CAKE } from "./cakeType"

export const buyCake = (number = 1)=>{
    return{
        type : BUY_CAKE,
        payload : number
    }
}

export const addCake = (number = 1)=>{
    return{
        type : ADD_CAKE,
        payload : number
    }
}