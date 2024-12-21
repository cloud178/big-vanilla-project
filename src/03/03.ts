import {StudentType} from "../02/02";
import {CityType, GovernmentBuildingType, HouseType} from "../02/02_02";

export const addSkill = (student: StudentType, skill: string)=> {
    student.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}

export function makeStudentActive (student: StudentType) {
    student.isActive = true
}

export const doesStudentLivesInCity = (s: StudentType, cityName: string) => {
    return s.address.city.title === cityName
}

export const addMoneyToBudget = (building: GovernmentBuildingType, budget: number) => {
    building.budget += budget;
}

export function repairHouse(house: HouseType) {
    house.repaired = true;
}

export function toFireStaff(building: GovernmentBuildingType, stuffCountToFire: number) {
    building.staffCount -= stuffCountToFire;
}

export function toHireStaff(building: GovernmentBuildingType, stuffCountToHire: number) {
    building.staffCount += stuffCountToHire;
}

export function createMessage(props: CityType) {
    return `Hello ${props.title} citizens. I want you be happy. All ${props.citizensNumber} men`
}
