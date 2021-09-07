import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { paymentCompleted } from '../actions/shoppingCartActions'
import Sumary from '../components/Sumary'
import Successful from '../components/global/Successful'

const Payment = (props) => {
    console.log(props)
    const { cart, paymentOption, shippingOption } = props
    const handleClick = () => {
        if (!cart.length || !paymentOption || !shippingOption) {
            alert('Go back and buy some stuff')
            props.history.push('/')
        }
        props.paymentCompleted();
    }
    if (props.purchaseCompleted) {
        return <Successful />
    }
    return (
        <div className="container">
                <button className="btn-flat blue-text" onClick={ () => props.history.goBack() }>Return</button>
            <h5>Payment Options</h5>
            <Sumary />
            <button className="btn blue darken-2" onClick={handleClick}>BUY</button>
        </div>
    )
}
const mapStateToProps = ({ shoppingCartReducer }) => {
    return shoppingCartReducer
}
const mapDispatchToProps = {
    paymentCompleted
}
export default connect(mapStateToProps, mapDispatchToProps)(Payment)