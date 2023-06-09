const toggleMenu = document.getElementById('toggle-menu')
const menu = document.getElementById('menu')
const logoLanding = document.querySelector('.landing-logo');
const paginationItem = document.querySelectorAll('.pagination__item');
const qsIcon = document.querySelectorAll('.list__header');
const form = document.getElementById('form')
const label = document.getElementById('label')
const btn = document.getElementById('btn')
const input = document.querySelector('.input')
const icon = document.querySelector('.icon-error')

toggleMenu.addEventListener('click', (e)=>{
    menu.parentElement.classList.toggle('show-menu')
    if(menu.parentElement.classList.contains('show-menu')==true){
        toggleMenu.children[0].src= '/images/icon-close.svg'
        toggleMenu.classList.add('fixed')
        logoLanding.classList.add('fixed')
        logoLanding.children[0].src = 'images/logo-bookmark.svg'
        document.documentElement.style.overflow = 'hidden'
    }else{
        document.documentElement.style.overflow = 'visible'
        toggleMenu.children[0].src= '/images/icon-hamburger.svg'
        toggleMenu.classList.remove('fixed')
        logoLanding.classList.remove('fixed')
        logoLanding.children[0].src = 'images/bookmark2.svg'

    }
})
paginationItem.forEach(item=>{
    item.addEventListener('click',(e)=>{
    let newTranslate = item.getAttribute('data-pagination').toString()
        paginationItem.forEach(itemRemove =>{
            if(itemRemove.classList.contains('active')){
                 itemRemove.classList.remove('active')
            }
        })
    item.classList.add('active')

    document.documentElement.style.setProperty('--translate',newTranslate )
 })
})

qsIcon.forEach(icon=>{
   icon.addEventListener('click', ()=>{
        icon.nextElementSibling.classList.toggle('ans-show')
       icon.children[1].classList.toggle('icon-rotate')
     
   })
})
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    validarFormulario()
})
btn.addEventListener('click' , (e)=>{
    e.preventDefault();
    validarFormulario()
})
const validarFormulario = () =>{
    const regExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if(regExp.test(input.value)==false){
        console.log('hola')
        label.classList.add('label-error')
        label.children[2].classList.add('error')
        label.children[1].classList.add('error')
    }else{
        label.children[2].classList.remove('error')
        label.classList.remove('label-error');
        icon.classList.remove('error')
        setTimeout(()=>{
             form.submit()
        },1000)
    }
}