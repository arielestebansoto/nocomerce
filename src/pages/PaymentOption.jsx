import React from 'react'
import { connect } from 'react-redux'

import '../assets/styles/pages/PaymentOption.scss'
import PaymentMethod from '../components/PaymentMethod'
import Header from '../components/Header'

const PaymentOption = (props) => {
    return (
        <>
            <Header />
            <div className="container">
                <div className="row">
                    <div className="col s10 offset-s1 m8 offset-m2 l6 offset-l3">
                        <div className="PaymentOption">
                            <div className="row">
                                <button 
                                    className="btn-flat blue-text" 
                                    onClick={ () => props.history.goBack() }
                                > Return
                                </button>
                            </div>
                            <div className="row">
                                <PaymentMethod />
                            </div>

                        </div>
                        
                    </div>
                </div>
        </div>
        </>
    )
}
const mapStateToProps = ({ reducer }) => {
    return {reducer}
}
export default connect(mapStateToProps)(PaymentOption)