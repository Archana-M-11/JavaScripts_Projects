const weight=document.querySelector('#weight')
const height=document.querySelector('#height')
const btn=document.querySelector('#calculateBtn')
const result=document.querySelector('#result')

btn.addEventListener('click',(e)=>{
    const weightVal=Number(weight.value)
    const heightVal=Number(height.value)
   
    if (weightVal<=0 || heightVal<=0){
        result.innerHTML="Please enter valid values"
        return
    }

    const heightInMeters=heightVal/100
    const bmi=weightVal/(heightInMeters*heightInMeters)

    if (bmi<18.5){
        result.textContent=`Your BMI is ${bmi.toFixed(2)}.\n You are underweight.`
    }
    else if(bmi>=18.5 && bmi<24.9){
        result.textContent=`Your BMI is ${bmi.toFixed(2)}.\n You have a normal weight.`
    }
    else if(bmi>=25 && bmi<29.9){
        result.textContent=`Your BMI is ${bmi.toFixed(2)}.\n You are overweight.`
    } 
    else{
        result.textContent=`Your BMI is ${bmi.toFixed(2)}.\n You are obese.`
    }

})