let botones = document.querySelectorAll('.btn')
let input = document.querySelector('.input')


botones.forEach(btn => {
    btn.addEventListener('click', (event) =>{
        input.value += event.target.textContent
    })
})




