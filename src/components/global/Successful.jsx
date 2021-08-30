import React from 'react'
import { withRouter} from 'react-router-dom'

class Successful extends React.Component {
    constructor() {
        super()
        setTimeout( ()=> {this.props.history.push('/')}, 3000)
    }
    render() {
        return (
            <div className="center">
                <i className="material-icons green-text large">check</i>
                <h6>Your purchase has been successful</h6>
            </div>
        )
    }
}

export default withRouter(Successful)