let students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85,
        // isStudent: true
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100
    }
];


const getStName = (st) => st.name
const getStScores = (st) => st.scores


const getNames = (arr) => {
    const result = []
    for (let i = 0; i < arr.length; i++) {
        result[i] = getStName(arr[i])
    }
    return result
}
// console.log(getNames(students))


const getScores = (arr) => {
    const result = []
    for (let i = 0; i < arr.length; i++) {
        result[i] = getStScores(arr[i])
    }
    return result
}
// console.log(getScores(students))

const getResult = (arr, fn) => {
    const result = []
    for (let i = 0; i < arr.length; i++) {
        result[i] = fn(arr[i])
    }

    return result
}

console.log(getResult(students, getStName))
console.log(getResult(students, getStScores))
console.log(students.map(getStName))


