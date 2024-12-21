import {GovernmentBuildingType, HouseType} from "../02/02_02";

export const getStreetsTitlesOfGovernmentBuildings =
    (buildings: Array<GovernmentBuildingType>) => {
    return buildings.map(building => building.address.street.title)
}


export const getStreetsTitlesOfHouses = (houses: Array<HouseType>) => {
    return houses.map(house => house.address.street.title)
}


export const createMessages = (houses: Array<HouseType>) => {
    return houses.map(house => `Hello guys from ${house.address.street.title}`)
}
