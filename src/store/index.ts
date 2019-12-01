import { combineReducers, Dispatch, Reducer, Action, AnyAction } from 'redux'
import { connectRouter, RouterState, routerActions } from 'connected-react-router'
import { StockpileState, stockpileReducer } from './stockpile'
import { History } from 'history'


export interface ApplicationState {
  stockpile: StockpileState
  router: RouterState
}

export const createRootReducer = (history: History) => 
  combineReducers({
    stockpile: stockpileReducer,
    router: connectRouter(history)
  })

    