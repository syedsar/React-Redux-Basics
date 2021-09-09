import React, { useDebugValue } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyCake } from '../redux/cake/cakeAction'

const HooksCakeContainer = () => {

    const Cakes = useSelector(state=> state.numberOfCakes)
    const dispatch = useDispatch()
    return (
        <div>
            <h2>Number of Cakes : {Cakes} </h2>
            <button onClick={()=>dispatch(buyCake)}>Buy Cake</button>
        </div>
    )
}

export default HooksCakeContainer
