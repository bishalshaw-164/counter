const span = document.getElementById("span");
const decrease = document.getElementById("btn-decrease");
const reset = document.getElementById("btn-reset");
const increase = document.getElementById("btn-increase");
let value=0;

decrease.addEventListener('click', () =>{

    span.textContent= --value;
    if(value>0){
        span.style.color="green";
    }
    if(value<0){
        span.style.color="red";
    }
    if(value==0){
        span.style.color="white"
    }
  

})
increase.addEventListener('click', () =>{
   
  span.textContent = ++value;
    
  if(value>0){
      span.style.color="green";
  }
  if(value<0){
      span.style.color="red";
  }
  if(value==0){
      span.style.color="white"
  }

})
reset.addEventListener('click',() =>{
    value = 0;
    span.textContent = value;

    if(value>0){
        span.style.color="light-green";
    }
    if(value<0){
        span.style.color="red";
    }
    if(value==0){
        span.style.color="white"
    }
})