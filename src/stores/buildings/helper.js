export const upgradebuilding = (currentBuilding) => {
    currentBuilding.level++;
    currentBuilding.cost = upgradeCost(currentBuilding.cost,currentBuilding.level,currentBuilding.multiplier);
    switch(currentBuilding.id){
        //Camp: Hero Building
        case 0: 
            return currentBuilding;
        default:
            return currentBuilding;
    }
}


export const upgradeCost = (cost,level,multiplier = 2) => {
    return (cost + Math.pow(level+1,multiplier));
}