let titulo = document.querySelector('h1')
let primerNumero = document.querySelector('#primer-numero')
let segundoNumero = document.querySelector('#segundo-numero')
let sumButton = document.querySelector('#sum-button')
let minusButton = document.querySelector('#minus-button')
let resultNode = document.querySelector('#result')

sumButton.addEventListener('click', function () {
    // parseo a enteros (por defecto son texto)
    let parsedNum1 = parseInt(primerNumero.value)
    let parsedNum2 = parseInt(segundoNumero.value)
    // suma de enteros
    let result = parsedNum1 + parsedNum2
    // creación de nodo <span>{resultado}</span>
    let textConten = document.createTextNode(result)
    let spanElement = document.createElement('span')
    spanElement.appendChild(textConten)
    // eliminar cuando ya haya resultado
    if (resultNode.childNodes.length > 3) {
        resultNode.removeChild(resultNode.childNodes[3])
    }
    // agregar resultado a pantalla
    resultNode.appendChild(spanElement)
    return result
})

minusButton.addEventListener('click', function () {
    // parseo a enteros (por defecto son texto)
    let parsedNum1 = parseInt(primerNumero.value)
    let parsedNum2 = parseInt(segundoNumero.value)
    // resta de enteros
    let result = parsedNum1 - parsedNum2
    // creación de nodo <span>{resultado}</span>
    let textConten = document.createTextNode(result)
    let spanElement = document.createElement('span')
    spanElement.appendChild(textConten)
    // eliminar cuando ya haya resultado
    if (resultNode.childNodes.length > 3) {
        resultNode.removeChild(resultNode.childNodes[3])
    }
    // agregar resultado a pantalla
    resultNode.appendChild(spanElement)
    return result
})

titulo.addEventListener('click', function () {
    console.log('click sobre el título')
})
titulo.addEventListener('mouseover', function () {
    console.log('mouseover sobre el título')
})
