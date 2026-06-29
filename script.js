const count = document.querySelector("#count");
const increaseBtn = document.querySelector("#increase");
const decreaseBtn = document.querySelector("#decrease");
const plus5Btn = document.querySelector("#plus5");
const minus5Btn = document.querySelector("#minus5");
const resetBtn = document.querySelector("#reset");

function updateColor(){
    if(counter == 0){
    count.style.color = "red";
  } 
  else{
    count.style.color = "green";
  };
}
let counter = 0;
 increaseBtn.addEventListener("click", ()=> {
    counter++;
    count.innerText = counter; 
    updateColor();
    
 });
 decreaseBtn.addEventListener("click", ()=> {
    if (counter > 0){
        counter-- ;
    count.innerText = counter;  
    updateColor();
    }
 });

plus5Btn.addEventListener("click", ()=> {
    counter += 5;
    count.innerText = counter; 
    updateColor();
});
minus5Btn.addEventListener("click", ()=> {
    if (counter >= 5){
        counter -= 5;
        count.innerText = counter;
        updateColor();
    }
});
resetBtn.addEventListener("click", ()=> {
    counter = 0;
    count.innerText = counter;   
    updateColor();   
 }); 
  
  
