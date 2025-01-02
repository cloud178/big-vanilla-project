export type UserType = {
    name: string
    hair: number
    address: {
        city: string
        house?: number
    }
}

export type LaptopType = {
    title: string
}

export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}

export type UserWithBooksType = UserType & {
    books: Array<string>
}

export type WithCompaniesType = {
    companies: Array<{ id: number, title: string }>
}

type CompanyType = { id: number, title: string }

export function makeHairstyle(u: UserType, power: number) {
    const copy = {
        ...u,
        hair: u.hair / power,
    }

    // copy.hair = copy.hair / power
    // copy.address.title = 'New York'
    // copy.name = 'Denis'

    return copy
}


export function moveUser(u: UserWithLaptopType, city: string) {
    return {
        ...u,
        address: {
            ...u.address,
            city: city
        }
    }
}

export function moveUserToOtherHouse(u: UserWithLaptopType & UserWithBooksType, house: number) {
    return {
        ...u,
        address: {
            ...u.address,
            house: house
        }
    }

    // copy.address = {
    //     ...copy.address,
    //     city: city
    // }

    // return copy
}


export const upgradeUserLaptop = (u: UserWithLaptopType, laptopName: string) => {
    return {
        ...u,
        laptop: {
            ...u.laptop,
            title: laptopName
        }
    }
}


export const addNewBooksToUser = (u: UserWithLaptopType & UserWithBooksType, newBooks: Array<string>) => {
    return {
        ...u,
        books: [
            ...u.books,
            ...newBooks,
        ]
    }
}


export const udpateBook = (u: UserWithLaptopType & UserWithBooksType, oldValue: string, newValue: string) => ({
    ...u,
    books: u.books.map(b => b === oldValue ? newValue : b)
})


export function removeBook(u: UserWithLaptopType & UserWithBooksType, value: string) {
    return {
        ...u,
        books: u.books.filter(b => b !== value)
    }
}


export const addCompany = (u: UserWithLaptopType & WithCompaniesType, newCompany: { id: number, title: string }) => {
    return {
        ...u,
        companies: [...u.companies, newCompany]
    }
}

export const updateCompanyTitle = (u: WithCompaniesType,
                                   id: number,
                                   newTitle: string) => {
    return {
        ...u,
        companies: u.companies.map(c => c.id === id ? {...c, title: newTitle} : c)
    }

    // const copy: WithCompaniesType = {
    //     ...u,
    //     companies: u.companies.map(c => c.id === id ? {...c, title: newTitle} : c),
    // }
    //
    // return copy
}

export const updateCompanyTitle2 = (companies: { [key: string]: CompanyType[] },
                                    userName: string,
                                    companyId: number,
                                    newTitle: string) => {
    const companyCopy = {...companies}

    companyCopy[userName] = companyCopy[userName].map( c => c.id === companyId ? {...c, title: newTitle} : c )

    return companyCopy

}