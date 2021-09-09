// import { ADD_CAKE, BUY_CAKE } from "./cakeType"

import { ADD_CAKE, BUY_CAKE } from "./cakeType"

// const initialState = {
//     numberOfCakes : 10
// }

// const cakeReducer = (state= initialState, action )=>{
//     switch(action.type){
//         case BUY_CAKE : return{
//             ...state,
//             numberOfCakes : state.numberOfCakes -1
//         }

//         case ADD_CAKE : return{
//             ...state,
//             numberOfCakes : state.numberOfCakes + 1
//         }

//         default : return state;
//     }
// }

// export default cakeReducer

const initialState = {
    numberOfCakes : 10
}

const cakeReducer = (state=initialState, action)=>{
    switch(action.type){
        case BUY_CAKE : return{
            ...state,
            numberOfCakes : state.numberOfCakes - action.payload
        }

        case ADD_CAKE : return{
            ...state,
            numberOfCakes : state.numberOfCakes + action.payload
        }

        default : return state
    }
}

export default cakeReducer