let persons=[{name:"balu",color:"blue",score:0},{name:"bhargav",color:"red",score:0},{name:"sanvika",color:"green",score:0},
    {name:"lahari",color:"yellow",score:0}]
let cell_container_ele= document.getElementById("cell_container")
for(let i=100;i>=1;i--){

    let cell=document.createElement("div")
    cell.classList='cell'
    cell.style.border="1px solid gray"
    cell.id=`cell${i}`
    if(i%2==0){
        cell.style.backgroundColor="pink"
    }
    cell.style.padding="5px"
    cell.textContent=i
    cell_container_ele.appendChild(cell)
}
let btn_container=document.getElementById("buttons_container")
for(let i=0;i<4;i++){

    let btn=document.createElement("button")
    btn.textContent=persons[i].name +" "+ persons[i].score
    btn.style.backgroundColor=persons[i].color 
    btn.onclick=function(){
        let random_num=Math.random()*6
        random_num=Math.ceil(random_num)
        let prevscore_cell=document.getElementById(`cell${persons[i].score}`) // previous score
         
        let cu_p=   document.getElementById(`person${i}`)
      if(cu_p){

          prevscore_cell.removeChild(cu_p)
      }
        // updated score 
        persons[i].score=persons[i].score+random_num 
        btn.textContent=persons[i].name +" "+ persons[i].score
        let updated_score=persons[i].score
        let cur_cel=document.getElementById(`cell${updated_score}`)
            let cur_person= document.createElement("div")
            cur_person.classList="person"
            cur_person.style.backgroundColor=persons[i].color
            cur_cel.appendChild(cur_person)
            cur_person.id=`person${i}`


    }
    btn_container.appendChild(btn)
}