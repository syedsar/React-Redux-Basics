import React from 'react'
import { connect } from 'react-redux'
import { addCake, buyCake } from '../redux/cake/cakeAction'

const CakeContainer = (props) => {


    return (
        <div>
            <h2>Number Of Cakes : {props.numberOfCakes}</h2>
            <button onClick={props.buyCake}>Buy Cake</button>
            <button onClick={props.addCake}>Add Cake</button>
        </div>
    )
}

const mapStateToProps = state =>{
    return{
        numberOfCakes : state.cake.numberOfCakes
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        buyCake : ()=>dispatch(buyCake()),
        addCake : ()=>dispatch(addCake())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)
