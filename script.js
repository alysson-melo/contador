let enviar = document.querySelector('#enviar')
enviar.addEventListener('click', contar)

function contar() {
    let txti = document.querySelector('#txti')
    let txtf = document.querySelector('#txtf')
    let txtp = document.querySelector('#txtp')
    let res = document.querySelector('#res')

    if (txti.value.length == 0 || txtf.value.length == 0 || txtp.value.length == 0) {
        alert('[ERRO] Por favor, verifique os dados e tente novamente!')
    } else {

        let i = Number(txti.value)
        let f = Number(txtf.value)
        let p = Number(txtp.value)
        if (p <= 0) {
            alert('Passo inválido, iremos considerar isso como "passo 1"')
        }

        p = 1

        res.innerHTML = ''

        if (i < f) {
            //contagem crescente
            for (let c = i; c <= f; c += p) {
                res.innerHTML += `${c} `
            }
        } else {
            //contagem regressiva
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} `
            }
        }
    }
}
