let inputVal=document.querySelector('.main-display');
let buttons=document.querySelectorAll('button');
let result="";

buttons.forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML=="="){
            result=eval(result);
            inputVal.innerHTML=result
        }
        else if(e.target.innerHTML=="AC"){
            result="";
            inputVal.innerHTML=result
        }
        else if(e.target.innerHTML=="DEL"){
            result= result.substring(0, result.length-1);
            inputVal.innerHTML=result
        }
        else{
            result+=e.target.innerHTML;
            inputVal.innerHTML=result
        }

    })

})

//----------------JS Audio----------------//

let music=document.querySelector('audio');
let calculator=document.querySelector('.calculator');

calculator.addEventListener('mouseover',()=>{

  music.play()

})
calculator.addEventListener('mouseleave',()=>{
    music.pause()
    // music.currentTime=0;

})