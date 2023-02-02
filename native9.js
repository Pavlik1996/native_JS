// const title = 'hello'
// //lex_env {title, createCounter, counter1, counter2}
//
// const createCounter = (initialValue) => { // lex_env: {a, counter},  {a, counter}
//     let a = initialValue;
//
//     const counter = {
//         increment() {
//             a++;
//         },
//         getCounter() {
//             return a
//         }
//     }
//     return counter
// }
//
//
// const counter1 = createCounter(10)
// const counter2 = createCounter(20)
//
//
// counter1.increment()
// counter1.increment()
// counter1.increment()
// console.log(counter1.getCounter())
// console.log(counter2.getCounter())
//
//
// const print = (name) => {
//     console.log(`hello ${name}`)
// }
//
//
// const createPrint = (name) => {
//     return () => print(name)
// }
//
// const p1 = createPrint('pasha')
// const p2 = createPrint('masha')
//
// setTimeout(p1, 1000)
// setTimeout(p2, 1000)
//
//
// const func1 = () => {
//     return () => {
//         console.log(10222)
//     }
// }
//
//
// func1()() // первый раз вызывает саму функцию func1, а потом вызывает функцию которая возвращает функция func1
//
//
// const func2 = (a) => (b) => (c) => (d) => console.log(a + b + c + d)
//
// func2(2)(3)(4)(5)


function outerFunction(x) {
    return function innerFunction(y) {
        return x + y;
    };
}

const add5 = outerFunction(5);
console.log(add5(3)); // 8


let phrase = "Hello";

if (true) {
    let user = "John";

    function sayHi() {
        console.log(`${phrase}, ${user}`);
    }
}

sayHi();


let arr = [1, 2, 3, 4, 5, 6, 7, 8]

const inBetween = (start, end) => {
    return (el) => {
        return el >= start && el <= end
    }
}

console.log(arr.filter(inBetween(3, 5)))


//1. COUNTER WITH INITIAL VALUE, RETURN COUNTER AS OBJECT WITH SOME METHODS
// 2. REDUX FROM OBJECT to CLOSURE
// 3. Understand THUNK as CLOSURE
// 4. https://learn.javascript.ru/task/filter-through-function
// 5. * custom debounce and throtlle functions