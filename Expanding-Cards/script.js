const panels = document.querySelectorAll('.panel');

panels.forEach((panel)=>{
    panel.addEventListener('click', ()=>{
       removeActiveClass()
       panel.classList.toggle('active')
    })
})


function removeActiveClass(){

    panels.forEach((panel)=>{
        panel.classList.remove('active')
    })
}