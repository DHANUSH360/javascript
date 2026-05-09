let timer_ele = document.getElementById("timer")

let num = 1

let interval_id

function startTimer(){

    interval_id = setInterval(function(){

        timer_ele.textContent = num

        num++

        if(num > 60){
            clearInterval(interval_id)
        }

    },1000)
}

function stopTimer(){

    clearInterval(interval_id)
}

function resetTimer(){

    clearInterval(interval_id)

    num = 0

    timer_ele.textContent = num
}