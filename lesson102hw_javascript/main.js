const robi = {
    name: 'Robert',
    age: 36,
    isAdmin: true,
    hello(data) {
        Alert('Hello ${data}')
    }
}

robi.hello(Vadim)

const users = [
    {
        name: 'Robert',
        age: 36,
        isAdmin: true
    },

    {
        name: 'Valeriya',
        age: 28,
        isAdmin: false
    },

    {
        name: 'Marina',
        age: 39,
        isAdmin: false
    },

    {
        name: 'Stas',
        age: 30,
        isAdmin: false
    },

    {
        name: 'Vasilii',
        age: 38,
        isAdmin: true
    }
]

let notadmins = 0

for (let i = 0; i < users.length; i++) {
    if (!users[i].isAdmin) {
        notadmins = notadmins + 1
    }
}

console.log(notadmins)
