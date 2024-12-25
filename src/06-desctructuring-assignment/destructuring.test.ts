// import {ManType} from "../05/05_01";

type StreetType = {
    title: string
}

export type AddressType = {
    street: StreetType
}

export type LessonsType = {
    title: string,
    name?: string,
}

type ManType = {
    name: string
    age: number
    lessons: LessonsType[]
    address: AddressType
}


let props: ManType;

beforeEach(() => {
    props = {
        name: 'John',
        age: 32,
        lessons: [{ title: '1'}, { title: '2'}, { title: '3', name: 'react'}],
        address: {
            street: {
                title: 'Nezavisimosti street'
            }
        }
    }
})

test('', ()=> {
    // const age = props.age;
    // const lessons = props.lessons;

    const {age, lessons} = props;
    const {age: a, lessons: l} = props; // дали псевдонимы, но лучше так не использовать, лучше использовать как ниже, например const a = props.age;
    const {title} = props.address.street;

    // const a = props.age;
    // const l = props.lessons;

    expect(age).toBe(32);
    expect(lessons.length).toBe(3);

    expect(a).toBe(32);
    expect(l.length).toBe(3);

    expect(title).toBe('Nezavisimosti street');

})

test('', () => {
    const l1 = props.lessons[0]
    const l2 = props.lessons[1]

    // const [ , , ls323223] = props.lessons;
    // const [ls1, ...restLessons] = props.lessons;
    const [ , ls2, ...restLessons] = props.lessons;

    expect(l1.title).toBe('1')
    expect(l2.title).toBe('2')

    // expect(ls1.title).toBe('1')
    // expect(ls323223.title).toBe('2')

     // expect(restLessons.length).toBe(2);
     // expect(restLessons[0].title).toBe('2');

    expect(ls2.title).toBe('2');
    expect(restLessons.length).toBe(1);
     expect(restLessons[0].title).toBe('3');
     expect(restLessons[0]).toStrictEqual({name: 'react', title: '3'}); // toStrictEqual для проверки на равенство объектов
})
