export type UserType = {
    name: string
    age: number
    address: {
        title: string
    }
}

function increaseAge(u: UserType) {
    u.age++
}

test('reference type test', () => {

    const user: UserType = {
        name: 'Denis',
        age: 26,
        address: {
            title: 'Minsk'
        }
    }

    increaseAge(user)

    expect(user.age).toBe(27)

    const superman = user
    superman.age = 100

    expect(user.age).toBe(100)

})

// test.skip('array test', () => {
//
//     const users: UserType[] = [
//         {
//             name: 'Denis',
//             age: 26
//         },
//         {
//             name: 'Denis',
//             age: 26
//         }
//     ]
//
//     const admins = users
//
//     admins.push({name: 'Bandit', age: 10})
//
//     expect(admins.length).toBe(3)
//     expect(users.length).toBe(3)
//     expect(users[2]).toEqual({name: 'Bandit', age: 10})
//
// })

test('value type test', () => {

    const usersCount = 100

    let adminsCount = usersCount

    adminsCount++

})




test('reference2 type test', () => {

    const user: UserType = {
        name: 'Denis',
        age: 26,
        address: {
            title: 'Minsk'
        }
    }

    let addr = user.address
    addr.title = 'New York'

    expect(user.address.title).toBe('New York')

})


test('reference type array test', () => {
    const address = {
        title: 'Minsk'
    }

    const user: UserType = {
        name: 'Dimych',
        age: 32,
        address: address
    }

    const user2: UserType = {
        name: 'Natasha',
        age: 30,
        address: address
    }

    const users = [ user, user2, { name: 'Misha', age: 4, address: address } ]

    const admins = [ user, user2 ]

    admins[0].name = 'Dmitry'

    expect(user.name).toBe('Dmitry')
    expect(users[0].name).toBe('Dmitry')

})


test('sort array test', () => {
    const letters = ['c', 'd', 'a', 'z', 'e']

    letters.sort()

    expect(letters[0]).toBe('a')
    expect(letters).toEqual(['a', 'c', 'd', 'e', 'z'])
})
