export interface Stockpile {
    gold: number,
    resources: number,
    increment: number,
}

export enum StockpileActionTypes {
    CHANGE_GOLD = '@@stockpile/CHANGE_GOLD',
    CHANGE_RESOURCES = '@@stockpile/CHANGE_RESOURCES'
}

export interface StockpileState {
    readonly data: Stockpile
}