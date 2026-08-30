const buttons=document.querySelectorAll('.button');
console.log(buttons);
buttons.forEach((buttons)=>{
buttons.addEventListener('click',function(e){
    switch(e.target.id){
        case 'green':
        document.body.style.backgroundColor='green';
        break;
        case 'pink':
        document.body.style.backgroundColor='pink';
        break;
        case 'yellow':
        document.body.style.backgroundColor='yellow';
        break;
        case "purple":
        document.body.style.backgroundColor='purple';
        break;
        case "blue":
        document.body.style.backgroundColor='blue';
        break;
        case "white":
        document.body.style.backgroundColor='white';
        break;
   }
})

})