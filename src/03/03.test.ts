import {StudentType} from "../02/02";
import {addSkill, doesStudentLivesInCity, makeStudentActive} from "./03";

let student: StudentType
beforeEach(() => {
    student = {
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
})

test("new tech skil should be added tgo student", () => {
    addSkill(student, 'JS')

    expect(student.technologies.length).toBe(4)
    expect(student.technologies[3].id).toBeDefined() // тут суть в том что нам в принципе не важно какой айдишник, главное что он определён
    expect(student.technologies[3].title).toBe('JS')
})

test("student should be made active", () => {
    expect(student.isActive).toBe(false)

    makeStudentActive(student)

    expect(student.isActive).toBe(true)
})

test("does student live in city?", () => {

    let result1 = doesStudentLivesInCity(student, "Moscow")
    let result2 = doesStudentLivesInCity(student, "Minsk")

    expect(result1).toBe(false)
    expect(result2).toBe(true)
})
