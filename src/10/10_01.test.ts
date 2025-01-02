import {
    addCompany,
    addNewBooksToUser,
    makeHairstyle,
    moveUser,
    moveUserToOtherHouse, removeBook, udpateBook, updateCompanyTitle, updateCompanyTitle2,
    upgradeUserLaptop,
    UserType,
    UserWithBooksType,
    UserWithLaptopType, WithCompaniesType
} from "./10_01";


test('reference type test', () => {
    let user: UserType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk'
        }
    }

    const cutUser = makeHairstyle(user, 2)

    expect(cutUser.hair).toBe(16)
    expect(user.hair).toBe(32)

    expect(cutUser.address).toBe(user.address)

    // expect(user.address.city).toBe('New York')
    // expect(user.name).toBe('Dimych')
    // expect(cutUser.name).toBe('Denis')


    // user = barber(user, 2)
    //
    // expect(user.hair).toBe(16)
    // expect(user.address.city).toBe('New York')
    // expect(cutUser.name).toBe('Denis')
})

test('change address', () => {
    let user: UserWithLaptopType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12,
        },
        laptop: {
            title: 'ZenBook'
        }
    }

    const movedUser = moveUser(user, 'Kiev')

    expect(user).not.toBe(movedUser)
    expect(user.address).not.toBe(movedUser.address)
    expect(user.laptop).toBe(movedUser.laptop)
    expect(movedUser.address.city).toBe('Kiev')

})

test('upgrade laptop to macbook', () => {
    let user: UserWithLaptopType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12,
        },
        laptop: {
            title: 'ZenBook'
        }
    }

    const userWithUpgradedLaptop = upgradeUserLaptop(user, 'Macbook')

    expect(user).not.toBe(userWithUpgradedLaptop)
    expect(user.address).toBe(userWithUpgradedLaptop.address)
    expect(user.laptop).not.toBe(userWithUpgradedLaptop.laptop)
    expect(userWithUpgradedLaptop.laptop.title).toBe('Macbook')
    expect(user.laptop.title).toBe('ZenBook')

})

test('upgrade laptop to macbook', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12,
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['css', 'html', 'js', 'react']
    }

    const userCopy = moveUserToOtherHouse(user, 99)

    expect(user).not.toBe(userCopy)
    expect(user.books).toBe(userCopy.books)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).not.toBe(userCopy.address)
    expect(userCopy.address.house).toBe(99)

})

test('add new books to user', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12,
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['css', 'html', 'js', 'react']
    }

    const userCopy = addNewBooksToUser(user, ['ts', 'rest api'])

    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[4]).toBe('ts')
    expect(userCopy.books[5]).toBe('rest api')
    expect(userCopy.books.length).toBe(6)

})

test('update js to ts', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12,
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['css', 'html', 'js', 'react']
    }

    const userCopy = udpateBook(user, 'js', 'ts')

    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(user.books).not.toBe(userCopy.books)
    expect(user.books[2]).toBe('js')
    expect(userCopy.books[2]).toBe('ts')
})

test('remove js book', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12,
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['css', 'html', 'js', 'react']
    }

    const userCopy = removeBook(user, 'js')

    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(user.books).not.toBe(userCopy.books)
    expect(user.books.length).toBe(4)
    expect(userCopy.books.length).toBe(3)
    expect(userCopy.books[2]).toBe('react')
})

test('add company', () => {
    let user: UserWithLaptopType & WithCompaniesType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12,
        },
        laptop: {
            title: 'ZenBook'
        },
        companies: [ { id: 1, title: 'Epam' }, { id: 2, title: 'IT-INCUBATOR' } ]
    }

    const userCopy = addCompany(user, {id: 3, title: 'Google'})

    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(user.companies).not.toBe(userCopy.companies)
    expect(user.companies.length).toBe(2)
    expect(userCopy.companies.length).toBe(3)
    expect(userCopy.companies[2]).toEqual({id: 3, title: 'Google'})
})

test('update company', () => {
    let user: UserWithLaptopType & WithCompaniesType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12,
        },
        laptop: {
            title: 'ZenBook'
        },
        companies: [ { id: 1, title: 'епам' }, { id: 2, title: 'IT-INCUBATOR' } ]
    }

    const userCopy = updateCompanyTitle(user, 1, 'Epam') as UserWithLaptopType & WithCompaniesType

    expect(user).not.toBe(userCopy)
    expect(user.companies).not.toBe(userCopy.companies)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(user.companies.length).toBe(2)
    expect(userCopy.companies.length).toBe(2)
    expect(user.companies[0].title).toBe('епам')
    expect(userCopy.companies[0].title).toBe('Epam')
})

test('update company2', () => {
    let user: UserWithLaptopType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12,
        },
        laptop: {
            title: 'ZenBook'
        }
    }

    let companies = {
        'Dimych': [ { id: 1, title: 'епам' }, { id: 2, title: 'IT-INCUBATOR' } ],
        'Artem': [ { id: 2, title: 'IT-INCUBATOR' } ],
    }

    const copy = updateCompanyTitle2(companies, 'Dimych', 1, 'Epam')

    expect(copy).not.toBe(companies)
    expect(copy['Dimych']).not.toBe(companies['Dimych'])
    expect(copy['Artem']).toBe(companies['Artem'])
    expect(copy['Dimych'][0].title).toBe('Epam')
    expect(companies['Dimych'][0].title).toBe('епам')

})

