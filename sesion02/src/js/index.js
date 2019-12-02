let n1Val = document.querySelector('#n1')
let n2Val = document.querySelector('#n2')
let ej01Button = document.querySelector('#ejercicio01 > button')
let ej01section = document.querySelector('#ejercicio01')
let ej02section = document.querySelector('#ejercicio02')
let ej03section = document.querySelector('#ejercicio03')

function divisionFormatted(n1, n2) {
    let divisionResult = Math.round(n1 / n2).toString()
    let divisionResultArrayString = divisionResult.split("")
    if (divisionResult > 999) { //solo de 1,000 en adelante
        for (let idx = divisionResult.length - 3; idx > 0; idx -= 3) {
            divisionResultArrayString.splice(idx, 0, ",")
        }
    }
    return divisionResultArrayString.join("")
}

ej01Button.addEventListener('click', function () {
    let result = divisionFormatted(parseInt(n1Val.value), parseInt(n2Val.value))

    // creación de nodo <wrapperElement>{resultado}</wrapperElement>
    let textContent = document.createTextNode(result)
    let wrapperElement = document.createElement('div')
    wrapperElement.appendChild(textContent) //<div>{numero}</div>
    // eliminar cuando ya haya resultado
    if (ej01section.childElementCount > 4) {
        ej01section.removeChild(ej01section.childNodes[9])
    }
    // agregar resultado a section (mostrar en pantalla)
    ej01section.appendChild(wrapperElement) //

})

ej03section.addEventListener('mouseover', function () {
    // add css class
    ej03section.classList.add('sectionAnimated')
})

ej03section.addEventListener('mouseleave', function () {
    // remove css class
    ej03section.classList.remove('sectionAnimated')
})

ej02section.addEventListener('animationstart', function(){
    console.log('the animation has started 😎')
})

ej02section.addEventListener('animationend', function(){
    ej02section.classList.add('ocultarElemento')
})


