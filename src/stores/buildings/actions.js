export const clearStorage = () => ({
    type: 'CLEARSTORAGE',
})

export const upgradeBuilding = (id = -1) => ({
    type: 'UPGRADEBUILDING',
    id
})