export const incrementGold = (counter = 1) => ({
    type: 'INCREMENTGOLD',
    counter,
})

export const decrementGold = (counter = 1) => ({
    type: 'DECREMENTGOLD',
    counter,
}) 

export const incrementResources = (counter = 1) => ({
    type: 'INCREMENTRESOURCES',
    counter,
})

export const recrementResources = (counter = 1) => ({
    type: 'INCREMENTRESOURCES',
    counter,
})

export const clearStorage = () => ({
    type: 'CLEARSTORAGE',
})