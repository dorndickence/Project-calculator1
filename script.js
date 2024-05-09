
let buffer = '0';
let runningTotal = 0;
let previousOperation = null;
const screen = document.querySelector('.inputClass');

function buttonClick(value){
if(isNaN(parseInt(value))){
 handleSymbol(value);
}else{
 handleNumber(value);


}
rerender();

}

  function handleMath(value) {
  if(buffer === '0') {
    //do nothing 
       return;

     }

   const intBuffer = parseInt(buffer);
   if(runningTotal === 0) {
     runningTotal = intBuffer;
    } else {
       flushOperation(intBuffer);
   }

  previousOperation = value;
  buffer='0';
  console.log(runningTotal);
 

}


function flushOperation (intBuffer){

      switch(previousOperation){
         case '+':
         runningTotal +=intBuffer;
      break;
         case '-':
         runningTotal -=intBuffer;
      break;
         case 'X':
         runningTotal *=intBuffer;
      break;
         case '÷':
         runningTotal /=intBuffer;
      break;
         
   }


}


//this is the alternative to the flushOperation 
/*
function flushOperation (intBuffer){
if(previousOperation === '+') {
        runningTotal +=intBuffer
  }else if (previousOperation === '-'){
        runningTotal -=intBuffer
  }else if (previousOperation === 'x'){
        runningTotal *=intBuffer
    }else if (previousOperation === '÷'){
        runningTotal /=intBuffer;
    }

  }
*/
function handleSymbol(symbol){
    switch(symbol){

      case 'C':
          buffer=0; 
        screen.value+='';
         break;
       
      case '←':
         if(buffer.length === '1'){
         buffer = '0';
          } else { 
          buffer = buffer.substring(0, buffer.length -1);

         }


         break;

      case '=':
      if (previousOperation===null){
          return;

       }
        flushOperation(parseInt(buffer));
         previousOperation===null;
         buffer = "" + runningTotal;
         runnignTotal= 0;

         break;

      case '+':
      case '-':
      case 'X':
      case '÷':
      handleMath(symbol);
         break;

  }
    

}


function handleNumber(number){
 if(buffer==='0'){
 buffer = number;
} else {
 buffer += number;
  }

    
}


function init (){

const button = document.querySelector('.calc-buttons');

button.addEventListener("click",function(event){
buttonClick(event.target.innerText);


  });
}




function rerender(){
screen.innerText = buffer;

 }

init();
