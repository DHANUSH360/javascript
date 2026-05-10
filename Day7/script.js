let image_ele = document.getElementById("image")

let decode_ele = document.getElementById("decode")

decode_ele.textContent = "Guess the output to save your country (2+3)*19="

let isExploded = false

let Timer_ID = setTimeout(function(){

    image_ele.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdVJ0nvPUrFfmwlQPigTPlFdEf-xNJ2QoWCw&s"

    isExploded = true

    setTimeout(function(){

        alert("💥 Boom! Your country is destroyed")

    },100)

},10000)

let user_guess_ele = document.getElementById("user_guess")

function check(){

    if(isExploded){
        alert("Too late! Bomb already exploded")
    }

    else if(Number(user_guess_ele.value) === 95){

        clearTimeout(Timer_ID)

        alert("🎉 Your country is Saved")
    }

    else{
        alert("Wrong Answer")
    }

    user_guess_ele.value = ""
}