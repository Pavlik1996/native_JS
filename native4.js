const todoListId_1 = '12-fds'
const todoListId_2 = '13-fds'


const todoLists = [
    {
        id: todoListId_1, // '12-fds'
        title: 'What to learn',
    },
    {
        id: todoListId_2,
        title: 'What to buy',
    },
]


const getKey = () => 'name'

const tasks = {
    [todoListId_1]: [ // '12-fds'
        {name: 'HTML', isDone: true},
        {name: 'CSS', isDone: false}
    ],
    [todoListId_2]: [ // '13-fds'
        {name: 'Beer', isDone: false},
        {name: 'Fish', isDone: false}
    ],
    [10 + 20]: ['22222'],
    [getKey()]: ['999999'],
    'user address': {},
}


console.log(tasks[todoListId_1])
console.log(tasks[todoListId_1][0])
console.log(tasks[todoListId_1][0].name)


console.log(tasks[todoListId_1].filter(el => el.name !== 'HTML'))

console.log([...tasks[todoListId_1], {name: 'Banana', isDone: 'false'}])
// console.log([...tasks[todoLists[0].id], {name: 'Banana', isDone: 'false'}]) //тоже самое
console.log(tasks["user address"])
console.log(tasks[30]) ////  ['22222']

console.log(tasks['name'])
console.log(Object.keys(tasks))


// reduce : [1,2,3,4,5] = @


const nums = [1, 2, 3, 94, 4]

console.log(nums.reduce((acc, el) => acc - el, 0))


// max-min

console.log(nums.reduce((acc, el) => acc > el ? acc : el))


let students = [
    {
        id: 1,
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85
    },
    {
        id: 2,
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        id: 3,
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        id: 4,
        name: "John",
        age: 26,
        isMarried: false,
        scores: 100
    }
];


console.log(students.reduce((acc, el) => acc + el.scores, 0))

console.log(students.reduce((acc, el) => acc.scores > el.scores ? acc : el))

console.log(students.reduce((acc, el) => {
    if (el.scores >= 100) {
        acc.push(el)
    }
    return acc
}, []))


// from array to object
const newStudents = {
    "1": {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85
    },
    "3" : {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 89
    },
}

console.log(students.reduce((acc, el) => {
    acc[el.id] = {...el}
    delete acc[el.id].id
    return acc
}, {}))




const reduce = (arr, func, startAcc) => {
    let acc = startAcc ? startAcc : arr[0]
    for (let i = startAcc ? 0 : 1; i < arr.length; i++) {
        acc = func(acc, arr[i])
    }
    return acc
}


//самодельный reduce
console.log(reduce(students, (acc, el) => {
    acc[el.id] = {...el}
    delete acc[el.id].id
    return acc
}, {}))

