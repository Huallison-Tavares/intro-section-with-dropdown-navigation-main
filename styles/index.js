Array.from(document.getElementsByClassName("abrir")).forEach(div => {
    div.addEventListener('mouseover', function(){
        var text = div.innerText.toLowerCase().split("\n")
        var ul = document.querySelector(`#${text[0]}`)
        if(ul.classList.contains("close")){
            ul.classList.remove("close")
            ul.classList.add("open")
        }
        
    })
    
    div.addEventListener('mouseout', function(){
        var text = div.innerText.toLowerCase().split("\n")
        var ul = document.querySelector(`#${text[0]}`)
        if(ul.classList.contains("close") == false){
            ul.classList.add("close")
            ul.classList.remove("open")
        }
    })   
})
