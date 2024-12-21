export type ManType = {
    name: string
    age: number
}

const people: ManType[] = [
    {name: 'Andrew Ivanov', age: 33},
    {name: 'Alexander Petrov', age: 24},
    {name: 'Dmitry Sidorov', age: 18},
]


const dimychTransformator = (man: ManType) => ({
        stack: ['CSS', 'HTML', 'JS', 'TDD', 'REACT'],
        firstName: man.name.split(' ')[0],
        lastName: man.name.split(' ')[1],
})


const devs1 = [
    {
        stack: ['CSS', 'HTML', 'JS', 'TDD', 'REACT'],
        firstName: 'Andrew', lastName: 'Ivanov',
    },
    {
        stack: ['CSS', 'HTML', 'JS', 'TDD', 'REACT'],
        firstName: 'Alexander', lastName: 'Petrov',
    },
    {
        stack: ['CSS', 'HTML', 'JS', 'TDD', 'REACT'],
        firstName: 'Dmitry', lastName: 'Sidorov',
    },
]


let d1 = dimychTransformator(people[0])
let d2 = dimychTransformator(people[1])
let d3 = dimychTransformator(people[2])


const devs2 = [
    // d1, d2, d3,
    dimychTransformator(people[0]),
    dimychTransformator(people[1]),
    dimychTransformator(people[2]),
]


const devs3 = people.map(dimychTransformator)


const devs4 = people.map(man => ({
    stack: ['CSS', 'HTML', 'JS', 'TDD', 'REACT'],
    firstName: man.name.split(' ')[0],
    lastName: man.name.split(' ')[1],
}))


let messages = people.map( man => `Hello ${man.name.split(' ')[0]}! Welcome to IT-Incubator` )


export const createGreetingMessage = (people: Array<ManType>) => {
    return people.map( man => `Hello ${man.name.split(' ')[0]}! Welcome to IT-Incubator` )
}
