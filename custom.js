const off = document.querySelector(".off")
const onBtn = document.querySelector(".onBtn")
const on = "img/on.png"
const offBtn = document.querySelector(".offBtn")

onBtn.addEventListener("click", function(){

    off.setAttribute('src' ,on);
})

    
offBtn.addEventListener("click", function(){
        off.setAttribute("src", "img/off.png")
    })




