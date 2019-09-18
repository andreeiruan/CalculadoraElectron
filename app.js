function calc(operador, na, nb) {
    if (operador === '+') {
        return na + nb
    } else if (operador === '-') {
        return na - nb
    } else if (operador === '*') {
        return na * nb
    } else if (operador === '/') {
        if (nb === 0) {
            return alert('Impossivel realizar um divisão por 0!!!')
        }
        return na / nb
    }
}

let num1 = ''
let num2 = ''
let op = false

const numeros = document.querySelectorAll('.num')
const tela = document.getElementById('tela')
const n1 = document.getElementById('num1')
const n2 = document.getElementById('num2')
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
const operadores = document.querySelectorAll('.opr')
const opr = document.getElementById('opr')
operadores.forEach((o) => {
    o.addEventListener('click', () => {
        if (num1 === '') {
            alert('Diga o primeiro valor da equação antes de escolher um operador')
        } else {
            op = true
            opr.innerHTML = o.value
        }

    })
})

const res = document.createElement('span')
const igual = document.getElementById('igual')
const igu = document.getElementById('=')
const linhaResp = document.createElement('hr')
res.setAttribute('id', 'res')

igual.addEventListener('click', () => {
    const a = Number(num1)
    const b = Number(num2)
    const resultado = calc(opr.innerHTML, a, b)

    if (resultado === undefined) {
        n2.innerHTML = ''
        num2 = ''
    } else {
        res.innerHTML = resultado
        tela.appendChild(linhaResp)
        tela.appendChild(res)
    }
})


const ce = document.getElementById('ce')
ce.addEventListener('click', () => {
    op = false
    n1.innerHTML = ''
    num1 = ''
    n2.innerHTML = ''
    num2 = ''
    opr.innerHTML = ''
    res.innerHTML = ''
    try {
        tela.removeChild(linhaResp)
    } catch {
        // 
    }

})

const c = document.getElementById('c')
c.addEventListener('click', () => {

    if (!op) {
        num1 = ''
        n1.innerHTML = num1
    } else {
        num2 = ''
        n2.innerHTML = num2
    }
})

const x = document.getElementById('x')
x.addEventListener('click', () => {

    if (!op) {
        num1 = num1.replace(num1.substring(num1.length - 1), '')
        n1.innerHTML = num1
    } else {
        num2 = num2.replace(num2.substring(num2.length - 1), '')
        n2.innerHTML = num2
    }
})

const sinal = document.getElementById('+-')
sinal.addEventListener('click', () => {

    if (!op) {
        if (num1[0] !== '-') {
            num1 = '-' + num1
            n1.innerHTML = num1
        } else {
            num1 = num1.replace('-', '')
            n1.innerHTML = num1
        }

    } else {
        if (num2[0] !== '-') {
            num2 = '-' + num2
            n2.innerHTML = num2
        } else {
            num2 = num2.replace('-', '')
            n2.innerHTML = num2
        }

    }
})

const separador = document.getElementById('sep')
separador.addEventListener('click', () => {

    if (!op) {
        if (num1.includes('.')) {
            alert('Você já adicionou um ponto flutuante')
        } else {
            num1 = num1 + '.'
            n1.innerHTML = num1
        }
    } else {
        if (num2.includes('.')) {
            alert('Você já adicionou um ponto flutuante')
        } else {
            num2 = num2 + '.'
            n2.innerHTML = num2
        }
    }
})