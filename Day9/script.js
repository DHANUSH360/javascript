
let card_container_ele=document.getElementById("card_container")

function getall_user(){
   fetch("https://gorest.co.in/public/v2/users",{
   method:"GET",
   headers:{
      Authorization:"Bearer 766e34c462deab3c81680017006289c59bd61183968dc098f2969594b52a4bd0"
   }
})
.then(function(response){
   return response.json()
})
.then(function(users_data){
   //"If users_data is not an array,convert it into array" 
   if(!users_data.length){
      users_data=[users_data]
   }
   for(let i=0;i<users_data.length;i++){
    
    let card=document.createElement("div")
    card.classList.add("card")
      let par_ele= document.createElement("p")
      par_ele.textContent="name :"+users_data[i].name
      let par_ele1= document.createElement("p")
      par_ele1.textContent="email :"+users_data[i].email
      let par_ele2= document.createElement("p")
      par_ele2.textContent="gender :"+users_data[i].gender
      let par_ele3= document.createElement("p")
      par_ele3.textContent="status :"+users_data[i].status

      let delete_btn= document.createElement("button")
      delete_btn.textContent="delete"
      delete_btn.style.color="red"
      delete_btn.onclick=function(){
         console.log(users_data[i].id)
         fetch(`https://gorest.co.in/public/v2/users/${users_data[i].id}`,{
            method:"DELETE",
            headers:{
               Authorization:"Bearer 766e34c462deab3c81680017006289c59bd61183968dc098f2969594b52a4bd0"
            }
         }).then(function(json){
            card_container_ele.textContent=""
            getall_user()
         })
      }

      card.appendChild(par_ele)
      card.appendChild(par_ele1)
      card.appendChild(par_ele2)
      card.appendChild(par_ele3)
      card.appendChild(delete_btn)

      card_container_ele.appendChild(card)
   }
})
}

getall_user()