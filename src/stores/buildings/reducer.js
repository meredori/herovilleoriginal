import { upgradebuilding } from './helper'

export const buildings = (action,state = initialState) => {
    switch(action.type){        
        case 'CLEARSTORAGE':
            return initialState;
        case 'UPGRADEBUILDING':
            var building = state[action.id];
            building = upgradebuilding(building,state.resources);
            return {...state, [action.id]: building};
        default:
            return state;
    }
}

const initialState = {
    0:{ 
        id: 0,
        cost: 10,
        level: 0,
        name: "Campfire",
        enabled: true,
        multiplier: 2
    },
    1:{
        id: 1,
        cost: 50,
        level: 0,
        name: "Stockpile",
        enabled: false,
        multiplier: 5
    }
}