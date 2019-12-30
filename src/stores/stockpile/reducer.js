

const initialState = {
    gold: 0,
    resources: 0,
}

export const stockpile = (state = initialState, action) => {
    switch(action.type) {
        case 'INCREMENTGOLD':
            return {...state, gold: state.gold + action.counter}
        case 'DECREMENTGOLD':
                return {...state, gold: state.gold - action.counter};
        case 'INCREMENTRESOURCES':
            return {...state, resources: state.resources + action.counter};
        case 'DECREMENTRESOURCES':
            return {...state, resources: state.resources - action.counter};
        case 'CLEARSTORAGE':
            return initialState;
        default:
            return state;
    }
}