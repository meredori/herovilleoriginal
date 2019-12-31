export const upgradebuilding = (currentBuilding) => {
    currentBuilding.level++;
    currentBuilding.cost = upgradeCost(currentBuilding.cost,currentBuilding.level,currentBuilding.multiplier);
    //Add Switch for buildings
    // switch(currentBuilding.id){
    //     case 0:
    //         addHero();
    // }
    return currentBuilding;
}


export const upgradeCost = (cost,level,multiplier = 2) => {
    return (cost + Math.pow(level+1,multiplier));
}

export const addHero = () => {
    return null;
}