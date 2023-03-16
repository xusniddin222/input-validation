const input = document.querySelector(".default-inp")
const btn = document.querySelector("button")
const regEx = /^[a-zA-Z0-9]{6,12}$/;

input.addEventListener('keyup', (e)=>{
    if(regEx.test(e.target.value)){
        input.setAttribute('class', 'succes')
    }else{
        input.setAttribute('class', 'error')
    }
})
