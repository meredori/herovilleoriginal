import React from 'react'
import { connect } from 'react-redux'
import { upgradeBuilding } from '../../stores/buildings/actions'
export class Buildings extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>               
                <div>
                    <ul>{Object.values(this.props.buildings).map((item, key) =>
                    <li key={item.id}>|{item.cost}<button onClick={() => this.props.upgradeBuilding(item.id)}>Upgrade {item.name}</button></li>)}</ul>
                    
                </div>             
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        buildings: state.buildings
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        upgradeBuilding: (a) => dispatch(upgradeBuilding(a))
    }
}


const BuildingsContainer = connect(mapStateToProps,mapDispatchToProps)(Buildings)

export default BuildingsContainer