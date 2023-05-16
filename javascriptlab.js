function addition() {
    var FirstNum = Number( document.getElementById('firstnum').value);
    var SecondNum =Number(document.getElementById('secondnum').value);
    var Total = FirstNum + SecondNum;
    document.getElementById('divstyle').innerHTML= " Sum of " + FirstNum + " and " + SecondNum+" is " + Total
}


function sub() {
    var FirstNum = Number( document.getElementById('firstnum').value);
    var SecondNum =Number(document.getElementById('secondnum').value);
    var Total = FirstNum - SecondNum;
  document.getElementById('divstyle').innerHTML= " Minus of " + FirstNum + " and " + SecondNum+" is " + Total;
}


function dvd() {
    var FirstNum = Number( document.getElementById('firstnum').value);
    var SecondNum =Number(document.getElementById('secondnum').value);  
    var Total = FirstNum / SecondNum; 
   document.getElementById('divstyle').innerHTML= " Divide of " + FirstNum + " and " + SecondNum+" is " + Total;
}


function multiply() {
    var FirstNum = Number( document.getElementById('firstnum').value);
    var SecondNum =Number(document.getElementById('secondnum').value); 
    var Total = FirstNum * SecondNum;
   document.getElementById('divstyle').innerHTML= " Multiply of " + FirstNum + " and " + SecondNum+" is " + Total;
}