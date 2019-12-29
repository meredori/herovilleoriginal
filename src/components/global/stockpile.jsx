import React from 'react'
import { connect } from 'react-redux'
import { incrementResources, clearStorage } from '../../stores/stockpile/actions'

export class Stockpile extends React.Component {
    constructor(props){
        super(props);
    }

    render(dispatch){
        return (
            <div>
                <div>Resources: {this.props.stockpile.resources}</div>   
                <div>Gold: {this.props.stockpile.gold}</div>   
                <div>
                    <button onClick={this.props.incrementResources}>Collect</button>
                </div>             
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        stockpile: state.stockpile
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        incrementResources: () => dispatch(incrementResources()),
    }
}


const StockPileContainer = connect(mapStateToProps,mapDispatchToProps)(Stockpile)

export default StockPileContainer