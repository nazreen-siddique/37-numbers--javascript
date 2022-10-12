// console.log('numbers project');
const span = document.querySelectorAll(".number");
// console.log(span);
const items =[...span];
const updateCount = (el) => {
   const value = parseInt(el.dataset.value);
    const increment = Math.ceil(value/1000);
    let initialValue = 0;
    const increaseCount = setInterval(()=>{
     initialValue+=increment;
     if(initialValue>value){
        el.textContent= `${value}+`
        clearInterval(increaseCount);
        return;
     }
     el.textContent = `${initialValue}+`
    },10)
};

items.forEach((item)=>{
// console.log(item);
updateCount(item);
})
