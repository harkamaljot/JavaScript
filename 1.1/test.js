// case 1 divisible by 3 
// case 2 subtract 5
// case 3 if number==1 found the sequence
// case 4 negetive or 0 (not needed)

function facto(number){
  if(!fact(number)){
     console.log('not possible');
   }
}
function fact(number){
    if(number%3==0 && number !=0){
       //number = Math.floor(number/3); 
       y = fact(Math.floor(number/3));
       if(y){
           console.log(number);
           return y;
       }
    }
    if(number-5>=1){
       //number = number -5;
       y = fact(number-5);
       if(y){
           console.log(number);
           return y;
       }
    }
    if(number==1){
       console.log("Found number Sequence is possible");
       console.log(1);
       return true;
    }
    if(number<1 || number==2 || number==4 || number==5){
       
       return false;
    } 

}
