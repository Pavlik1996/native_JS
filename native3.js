//Есть и обработчик ? (function) => handler, listener, subscriber
//При вызове формируется обьект ({}) => event, ev, e
//Если есть хэндлер => function(e) => callback

const sm = document.getElementById('small')
const md = document.getElementById('medium')

function handler(e) { // this
    e.stopPropagation() //остановить распространения события | писать в 99% случиях!!!!!
    alert(e.currentTarget.id)
}

const handler2 = (e) => {
    alert('yo')
}

// sm.onclick = handler
// sm.onclick = null

sm.addEventListener('click', handler)  // всплытие-погружение
sm.addEventListener('click', handler2)   // повесить второе событие (в ячейку памяти)
// sm.removeEventListener('click', handler) // удалить событие хандлер
sm.removeEventListener('click', handler2)  // удалить не получилось
md.addEventListener('click', handler2)


//e.target -> элемент, который сгенерировал элемент
//e.currentTarget -> элемент, который возвал обработчик в процессе всплытия события




const a = document.getElementById('a')

a.addEventListener('click', (e)=> {
    e.preventDefault() // отключаем ссылку
    alert('link is not work')
})
