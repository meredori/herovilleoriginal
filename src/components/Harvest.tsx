import * as React from "react";
//import HarvestContainer from "../containers/HarvestContainer"
import {Stockpile} from '../store/stockpile/types'
import { connect } from "react-redux";
import { changeResource } from '../store/stockpile/actions'
import HarvestContainer from "../containers/HarvestContainer";

interface HarvestState {
    stockpile: Stockpile
  }

export class Harvest extends React.Component<{},HarvestState>{
    handleChangeResource = (stockpile: Stockpile) =>{
        var stockState= stockpile
        stockState.resources += stockState.increment;
        changeResource(stockState)
    }
    render(){
        return(
            <div>
            <HarvestContainer>
            {(data) => (
                <div onClick={e => {
                    e.preventDefault()

                    this.handleChangeResource(data.stockpile)
                }
                }>Click Me</div>
                )}
            </HarvestContainer>
    
        </div>
        )
    }
}

export default Harvest