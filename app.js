function digit(symbol){
  let mains=document.querySelector(".mains");
  mains.innerHTML=mains.innerHTML+symbol

}
function hesabla(){
let mains=document.querySelector(".mains")
mains.innerHTML=eval(mains.innerHTML)
}

function clear(){
  document.querySelector(".mains").innerHTML=""
}