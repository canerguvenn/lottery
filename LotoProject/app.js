const buttons=document.querySelectorAll(".buttons .button")
const piyangoButton=document.querySelector(".lottary")

piyangoButton.addEventListener("click",() =>{
    const piyangoNumbers=[];
    for(let i =1; i<=6; i++){
        let number=Math.ceil( Math.random()*34);
        console.log(number)
        if(piyangoNumbers.indexOf(number)==-1){ //sayılar birbirinden bağımsız olması için if uyguladım
            piyangoNumbers.push(number);
        }
        else{
            i--;
        }
    }
    let i =0;
    buttons.forEach((btn) =>{
        btn.textContent= piyangoNumbers[i];
        i++
    })
   
})
