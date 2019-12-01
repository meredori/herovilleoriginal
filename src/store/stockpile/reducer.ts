import { Reducer } from 'redux'
import { StockpileState, StockpileActionTypes } from "./types"

export const initialState: StockpileState = {
    data: {
        gold: 0,
        resources: 0,
        increment: 1
    }
}

const reducer: Reducer<StockpileState> = (state = initialState, action) => {
    switch(action.type){
        case StockpileActionTypes.CHANGE_GOLD: {
            return {...state, data: action.payload }
        }
        case StockpileActionTypes.CHANGE_RESOURCES: {
            return {...state, data: action.payload }
        }
        default: {
            return state
        }           
    }
}

export { reducer as stockpileReducer }