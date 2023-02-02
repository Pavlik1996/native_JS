// number, string, boolean, null, undefined, NaN,
// object, array, function

const a = 4
const b = a

const user1 = {   //#567 - запись в ячейку памяти
    name: "Bob",
    age: 23,
    isStudent: true
}

const user2 = user1 //#567
user2.name = "Ann"

// console.log(user1)


// const copyUser = {}  // new Object()
// copyUser.name = user1.name
// copyUser.age = user1.age
// copyUser.isStudent = user1.isStudent

const copyUser = {...user1}

// console.log(copyUser)
// console.log(copyUser === user2)  //false

const copyUser1 = {...user1, isStudent: false} // изменение сущю св-ва
// console.log(copyUser1)

const copyUser2 = {...user1, isMarried: false} // добавление  сущю св-ва
// console.log(copyUser2)


const address = {
    country: "Thailand",
    city: "Bangkok"
}

const copyUser3 = {...user1, ...address} // + два обьекта в один расскукуживаем два обьекта в один
// console.log(copyUser3)

const student = {
    name: "Bob",
    age: 23,
    isStudent: true,
    address: { // ссылка №789
        country: "Thailand",
        city: "Bangkok",
        cord: {
            x: 234,
            y: 345,
        }
    },
    courses: [
        "html", "css", "js" //#987
    ]
}

const copyStudent = {...student} // #789 & #987
copyStudent.courses.push("React")
// console.log(student)

const copyStudent2 = {...student, courses: [...student.courses, "Redux"]} // избежание мутаций

// console.log(student.courses)
// console.log(copyStudent2.courses)

const copyStudent3 = {...student, address: {...student.address, cord: {...student.address.cord, y: 888}}}
// console.log(student.address.cord)
// console.log(copyStudent3.address.cord)
// console.log(student.address.cord === copyStudent3.address.cord) //false


const nickName = "Hook"

const copyStudent4 = {...student, nickName}
// console.log(copyStudent4)


const users = [
    {
        id: 1,
        name: "Bob",
        isStudent: true,
        address: {
            country: "Sudan",
            city: "Hartum",
        }

    },
    {
        id: 2,
        name: "Alex",
        isStudent: true,
        address: {
            country: "Sudan",
            city: "Hartum",
        }
    },
    {
        id: 3,
        name: "Ann",
        isStudent: true,
        address: {
            country: "Sudan",
            city: "Hartum",
        }
    },
    {
        id: 4,
        name: "Donald",
        isStudent: true,
        address: {
            country: "Sudan",
            city: "Hartum",
        }
    },
]

const newUser = {
    id: 5,
    name: "HAHA",
    isStudent: true,
    address: {
        country: "Sudan",
        city: "Hartum",
    }
}

const users2 = [...users, newUser] // добавление элемента в массив
//

//delete id===3

const users3 = users.filter(u => u.id !== 3) // пробежаться по массиву , создать новый и поместить то, где id не равно 3
// console.log(users3)


//id =1, new city = "Sudan"
const users4 = users.map(u => u.id === 1 ? {...u, address: {...u.address, country: "Belarus", city: "Minsk"}} : u)
console.log(users4)












