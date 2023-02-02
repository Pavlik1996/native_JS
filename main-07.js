//1. Реализуйте функцию, которая принимает параметром подсторку, число повторов и разделитель, а возвращает сторку, состоящую из указанного количества повторов подстроки с использованием разделителя.
// repeatString("yo", 3, " ") => "yo yo yo"
// repeatString("yo", 3, ",") => "yo,yo,yo"

const repeatString = (text, amount, sep) => {
    let arr = []
    for (let i = 0; i < amount; i++) {
        arr.push(text.split(sep))
    }
    return arr.join(sep)
}

console.log(repeatString("yo", 3, " "))
console.log(repeatString("yo", 3, ","))


//2. Реализуйте функцию, которая принимает параметром сторку и подстроку, а возвращает true, если строка начинается с указанной подстроки, в противном случае - false. Регистр не учитывается.
// checkStart("Incubator", "inc") => true
// checkStart("Incubator", "yo") => false

const checkStart = (str, podStr) => str.toLowerCase().includes(podStr.toLowerCase())

console.log(checkStart("Incubator", "inc"))
console.log(checkStart("Incubator", "yo"))

//3. Реализуйте функцию, которая принимает параметром строку и число (количество символов), а возвращает строку из параметров, обрезанную до указанного количества символов и завершает её многоточием.
//truncateString("Всем студентам инкубатора желаю удачи!", 10) => "Всем студе..."


const truncateString = (str, number) => `${str.split('', number).join('')}...`


console.log(truncateString("Всем студентам инкубатора желаю удачи!", 10))

//4. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает самое короткое слово в предложении, если в параметрах пустая строка или не строка, то возвращает null.
// getMinLengthWord("Всем студентам инкубатора желаю удачи") => "Всем"
// getMinLengthWord("") => null
// getMinLengthWord(123) => null

const getMinLengthWord = (str) => {
    if (typeof str !== 'string') {
        return false
    }
    if (str === '') {
        return false
    }
    const arrStr = str.split(' ')
    let min = arrStr[0]
    for (let minStr of arrStr) {
        if (minStr.length < min.length) {
            min = minStr;
        }
    }
    return min
}

console.log(getMinLengthWord(""))
console.log(getMinLengthWord("Всем студентам инкубатора желаю удачи"))
console.log(getMinLengthWord(123))


//5. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает то же предложение, где все слова написаны строчными, но начинаются с заглавных букв.
// setUpperCase("всем стУдентам инкуБатора Желаю удачИ") => "Всем Студентам Инкубатора Желаю Удачи!"


const setUpperCase = (str) => {
    let arr = str.toLowerCase().split(' ')
    // arr[0] = arr[0].toUpperCase()
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1).toLowerCase()
            // arr[i + 1] = arr[i + 1].toUpperCase()
        // }
     }
    return arr.join(' ')
}

console.log(setUpperCase("всем стУдентам инкуБатора Желаю удачИ"))

// !!!!!!!!!!!!!!!!!!После решения 5 задач - поднимаем руку!!!!!!!!

//6. Реализуйте функцию, котрая принимает параметрами строку и подстроку. Если все
// символы подстроки содержаться в стороке - возвращает true, если нет -
// возвращает false. Проверка проводится без учёта регистра и без учёта
// повторяющихся символов.
// * с учётом повторяющихся символов в подстроке

const isIncludes = (str, podStr) => {
    let arrStr = str.split(',')
    let arrPodStr = podStr.split(',')

}


// isIncludes("Incubator", "Cut") => true
// isIncludes("Incubator", "table") => false
// isIncludes("Incubator", "inbba") => true //*false
// isIncludes("Incubator", "inba") => true  //*true
// isIncludes("Incubator", "Incubatorrr")=> true //*false





  




