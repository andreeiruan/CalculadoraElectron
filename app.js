function calc(operador, na, nb) {
    if (operador === '+') {
        return na + nb
    } else if (operador === '-') {
        return na - nb
    } else if (operador === '*') {
        return na * nb
    } else if (operador === '/') {
        return na / nb
    }
}


const numeros = document.querySelectorAll('.num')
const operadores = document.querySelectorAll('.opr')
const tela = document.getElementById('tela')
const n1 = document.getElementById('num1')
const n2 = document.getElementById('num2')
const opr = document.getElementById('opr')
const igual = document.querySelectorAll('.igual')
const igu = document.getElementById('=')
const rs = document.getElementById('res')

let num1 = ''
let num2 = ''
let op = false


numeros.forEach((n) => {
    n.addEventListener('click', () => {
        if (!op) {
            num1 += n.value
            n1.innerHTML = num1
        } else {
            num2 += n.value
            n2.innerHTML = num2
        }

    })
})
operadores.forEach((o) => {
    o.addEventListener('click', () => {
        op = true

        opr.innerHTML = o.value
    })
})
igual.forEach((i) => {
    i.addEventListener('click', () => {
        const a = Number.parseInt(num1)
        const b = Number.parseInt(num2)
        const resultado = calc(opr.innerHTML, a, b)
        igu.innerHTML = '='
            // console.log(resultado)
        res.innerHTML = resultado
    })
})