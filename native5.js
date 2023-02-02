const strings = ['Donald', 'Alex', 'Bob']
console.log(strings.sort())
//1. сортирует строки из коробка, без доп. параметров

const strings2 = ['Donald', 'Alex', 'Bob', 'alex', 'john', 'Юрий', 'Эдвард', '46845465']
console.log(strings2.sort())
//2. сортирует строки типо по алфавиту (unicode)

console.log(strings2)
//3. работает мутабельно (сортирует массив на месте)

console.log(strings2 === strings2.sort())  // true
//4. возвращает ссылку на исходный массви

const number = [1000, 777, 25, 666, 1488, 0, -88, '+999']
console.log(number.sort())
//5. Для остальный случаев необходимо передать функцию сравнения (callback)

const compareFunc = (a, b) => { //по возростания
    if (a > b) {
        return 1 // >0, если надо перставить
    } else {
        return -1 // <0, если не надо переставить
    }
}

const compareFuncPro = (a, b) => a - b
console.log(number.sort(compareFuncPro))
//6. Функция сравнения должна возвращать число больше или меньше 0

console.log(number.reverse())
//7. Часто используется вместе с sort (переворачивает в обратном порядке)

const students = [
    {
        name: 'Bob',
        age: 22,
        isMarried: true,
        score: 95
    },
    {
        name: 'Alex',
        age: 24,
        isMarried: true,
        score: 89
    },
    {
        name: 'Helge',
        age: 24,
        isMarried: true,
        score: 90
    },
    {
        name: 'Nick',
        age: 20,
        isMarried: false,
        score: 120
    },
    {
        name: 'John',
        age: 19,
        isMarried: false,
        score: 121
    },
    {
        name: 'alex',
        age: 22,
        isMarried: true,
        score: 89
    },
]



const compareFuncByStrObj = (a, b) => {
  if (a.name > b.name) {
      return 1
  } else {
      return -1
  }
}
console.log(students.sort(compareFuncByStrObj))
console.log(students.sort((a, b) => a.name.localeCompare(b.name)));
//7. сортировка массива по строковым значениям

console.log(students.sort((a, b) => a.score - b.score));
//8. сортировка массива по числовым значениям


const nums = [12, 45, 23, 68, 78, 91, 2]



for (let j = 0; j < nums.length - 1; j++){
    let isSorted = true
    for (let i = 0; i < nums.length - 1 - j; i++) {
        if (nums[i] > nums[i + 1]) {
            isSorted = false;
            // let temp = nums[i]
            // nums[i] = nums[i + i]
            // nums[i + 1] = temp
            [nums[i + 1], nums[i]] = [nums[i], nums[i + 1]]
        }
    }
    if (isSorted) break
}
console.log(nums);
// O((n-1)*((n-1)/2)*k), k < 1 => O(n*2)

