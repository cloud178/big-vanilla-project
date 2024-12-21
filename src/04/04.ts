import {CityType, GovernmentBuildingType, HouseType} from "../02/02_02";

export type CourseType = {
    title: string
    price: number
}

export const demolishHousesOnTheStreet = (city: CityType, street: string) => {
    city.houses = city.houses.filter(house => !(house.address.street.title === street))
}

export function getBuildingsWithStaffCountGreaterThen(buildings: Array<GovernmentBuildingType>, number: number)  {
    return buildings.filter(b => b.staffCount > number)
}
