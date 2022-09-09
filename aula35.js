const container = document.querySelector('.container')
const elementos = [
    {tag: 'p', texto: 'frase 1'},
    {tag: 'div', texto: 'frase 2'},
    {tag: 'footer', texto: 'frase 3'},
    {tag: 'section', texto: 'frase 4'}
]
function element(){
    const element = []
    for(let i = 0; i < elementos.length; i++){
        element.push(elementos[i].tag)
    }
    
    return element
}
function criaText(){
    const text = []
    for(let i = 0; i < elementos.length; i++){
        text.push(elementos[i].texto)
    }
    return text
}

function criaElementos(element){
    
    const tags = []
    for(let i = 0;i < element.length;i++){
        tags.push(document.createElement(element[i]))
    }
    return tags
}
function criaClasses(){
    
}
function addElements(){
    const div = document.createElement('div')
    const tags = criaElementos(element())
    div.classList.add('resultado')
    
    container.appendChild(div)
    const resultado = document.querySelector('.resultado')
    for(let i = 0; i < tags.length; i++){
        resultado.appendChild(tags[i])
    }
    const p = document.querySelector('.resultado p')
    const divs = document.querySelector('.resultado div')
    const footer = document.querySelector('.resultado footer')
    const section = document.querySelector('.resultado section')
    p.innerHTML = `${criaText()[0]}`
    divs.innerHTML = `${criaText()[1]}`
    footer.innerHTML = `${criaText()[2]}`
    section.innerHTML = `${criaText()[3]}`

    return
}
criaElementos(element())
addElements()