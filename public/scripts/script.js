const menuIco = window.document.querySelector('.menu')

menuIco.addEventListener('click',()=>{
    window.document.querySelector('nav').classList.toggle('selected')
    window.document.querySelector('.logo img').classList.toggle('selected')
    window.document.querySelector('.links').classList.toggle('selected')
    window.document.querySelector('.links ul').classList.toggle('selected')
    window.document.querySelector('body').classList.toggle('selected')
})

