Array.from(document.getElementsByClassName("abre")).forEach(div => {
    div.addEventListener('click', function(){
        var text = div.innerText.toLowerCase().split("\n")
        var ul = document.querySelector(`#${text[0].replace(" ", "")}-mob`)
        if(ul.classList.contains("fech")){
            ul.classList.remove("fech")
            ul.classList.add("abrido")
        }else if(ul.classList.contains("fech") == false){
            ul.classList.add("fech")
            ul.classList.remove("abrido")
        }
})})


document.getElementById("menu").addEventListener("click", function(){
    var fec = document.getElementsByClassName("fechado")[0]
    fec.classList.replace("fechado", "aberto")
})

document.getElementById("close-menu").addEventListener("click", function(){
    var fec = document.getElementsByClassName("aberto")[0]
    fec.classList.replace("aberto", "fechado")
})
    