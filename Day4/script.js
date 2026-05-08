arr=["biryani","munafa","curd rice","tiger rice","sambar rice","apricot"]

let items_con_ele=document.getElementById("items_container")

function displayItems(){

    for(let i=0;i<arr.length;i++){

        let item=document.createElement("p")

        let delete_btn=document.createElement("button")

        delete_btn.textContent="Delete"

        delete_btn.style.backgroundColor="red"

        delete_btn.onclick=function(){

            arr.splice(i,1)

            items_con_ele.textContent=""

            displayItems()
        }

        item.textContent=arr[i]

        item.appendChild(delete_btn)

        items_con_ele.appendChild(item)
    }
}

displayItems()

function addItems(){

    let ele=document.getElementById("user_input")

    let cur_val=ele.value

    if(cur_val===""){
        alert("Please enter an item")
        return
    }

    arr.push(cur_val)

    ele.value=""

    items_con_ele.textContent=""

    displayItems()
}