function toggle(){
    var curtain = document.getElementById("curtain");
    if (curtain.classList.contains("active")) {
        curtain.style.zIndex = 100
        setTimeout(function(){
            curtain.style.zIndex = "auto"
        }, 450)
    } else {
        curtain.style.zIndex = 100
    }
    let togglebtn = document.querySelector(".toggle")
    curtain.classList.toggle("active")
    togglebtn.classList.toggle("active")
}

    
