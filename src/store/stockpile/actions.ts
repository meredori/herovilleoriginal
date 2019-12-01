import { action } from 'typesafe-actions'
import { StockpileActionTypes, Stockpile } from './types'
import { stockpileReducer } from './reducer'

export const changeGold = (stockpile: Stockpile) => action(StockpileActionTypes.CHANGE_GOLD, stockpile)
export const changeResource = (stockpile: Stockpile) => action(StockpileActionTypes.CHANGE_RESOURCES, stockpile)


