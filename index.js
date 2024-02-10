// javascript code .
let result=document.getElementById("result");

function game(num1,num2){
if(num1>num2)
{
    result.innerHTML="Player 1 is Winner !";
}
else if(num1<num2){
    result.innerHTML="Player 2 is Winner !";
}
else{
    result.innerHTML="Draw !";
}
    }

 function dicee(){
        var pic1=Math.floor(Math.random()*6)+1;
        var pic2=Math.floor(Math.random()*6)+1;
        document.querySelectorAll("img")[0].setAttribute('src','images/dice'+pic1+'.png');// to change the img in img tag
        document.querySelectorAll("img")[1].setAttribute('src','images/dice'+pic2+'.png');// to change the img in img tag
        game(pic1,pic2);
    }

  document.getElementById("btn").addEventListener("click",dicee);
