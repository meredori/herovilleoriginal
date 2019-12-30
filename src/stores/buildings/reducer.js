export const buildings = (state = initialState, action) => {
    switch(action.type){        
        case 'CLEARSTORAGE':
            return initialState
        case 'UPGRADEBUILDING':
            var building = state.buildings[id];
            building.level++;
            
        default:
            return state
    }
}

const initialState = {
    buildings:[
        { 
            id: 0,
            cost: 10,
            level: 0,
            name: "Campfire",
            enabled: true
        },
        {
            id: 0,
            cost: 50,
            level: 0,
            name: "Stockpile",
            enabled: false
        }
    ]
}