if(
    localStorage.getItem("theme") == null ||
    localStorage.getItem("theme") == ""
){
    localStorage.setItem("theme","dark_mode")
}

document.body.classList = localStorage.getItem("theme")

function changeTheme(){

    let val = document.body.classList.toggle("dark_mode")

    if(val){
        localStorage.setItem("theme","dark_mode")
    }
    else{
        localStorage.setItem("theme","")
    }
}