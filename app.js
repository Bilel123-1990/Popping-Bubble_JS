


const Val1=window.prompt('Diffuclte 1 ou Diffuclte 2 ou Diffuclte 3 ')

const bulle=document.getElementById('start')
const score=document.querySelector('#score')

function createB()
            {
              let bubble = document.createElement("div");
              bubble.classList.add("bubble");
              bubble.classList.add("bubble_section");
              game.appendChild(bubble);    
         let colors = ["blue", "royalblue", "royalgreen", "yellow", "green"];

              let index = Math.floor(Math.random() * colors.length);     
                 bubble.style.backgroundColor = colors[index];          
                let left = Math.floor(Math.random() * 255);
              let top = Math.floor(Math.random() * 455);
              bubble.style.left = left + "px";
              bubble.style.top = top + "px"; 
           }

let t1
let timer
let res
if(Val1==1){
   timer=2000
  } else if(Val1==2){
    timer=1000    
    }
    else{
        timer=500
 }
let compt=0
let interval
let s=0
function MouveClick()
    {
        bulle.style.display='none'                        
     createB()   
     interval=setInterval(function(){
         compt++
         console.log(compt)
        
        if(compt==3){
            
           let   b=document.querySelector('.bubble')
               b.classList.remove("bubble");
            bulle.style.display='block'
           console.log(compt)
           clearInterval(interval)
          
    //    }else    if(score>3){
    //     bulle.removeEventListener('click',MouveClick)
     } else
              
       {
        createB()
        const   bubble=document.querySelector('.bubble')
               bubble.classList.remove("bubble");
               bulle.style.display='none'       
           // bulle.style.left=bubble+'px'
             }
    },timer);
    
   

    score.value=res
    score.textContent='GAME OVER'
    document.addEventListener('click',function(event)
    {
       if(event.target.classList.contains('bubble')){
            s++
            console.log(s)
       }
} )
     

    }
     bulle.addEventListener('click',MouveClick)


     

