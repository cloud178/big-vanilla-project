export type TechnologiesType = {
    id: number
    title: string
}
export type LocalCityType = {
    title: string
    countryTitle: string
}
export type LocalAddressType = {
    streetTitle: string
    city: LocalCityType
}
export type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: LocalAddressType
    technologies: Array<TechnologiesType>
}

export const student: StudentType = {
    id: 1,
    name: 'Dimych',
    age: 32,
    isActive: false,
    address: {
        streetTitle: "Surganova 2",
        city: {
            title: "Minsk",
            countryTitle: 'Belarus',
        },
    },
    technologies: [
        {
            id: 1,
            title: "HTML"
        },
        {
            id: 2,
            title: "CSS"
        },
        {
            id: 3,
            title: "React"
        },
    ],
}

console.log(student.age)
console.log(student.name)
console.log(student.address.city.title)
console.log(student.technologies[2].title)
