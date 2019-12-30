import React from 'react'
import { connect } from 'react-redux'
import { incrementResources, clearStorage } from '../../stores/stockpile/actions'
export class BasicSettings extends React.Component {
    constructor(props){
        super(props);
    }

    render(dispatch){
        return (
            <div>
                <div>
                    <button onClick={this.props.clearStorage}>Clear All Data</button>
                </div>             
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        clearStorage: () => dispatch(clearStorage())
    }
}


const BasicSettingsContainer = connect(null,mapDispatchToProps)(BasicSettings)

export default BasicSettingsContainer