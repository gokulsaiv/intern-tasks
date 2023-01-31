result=0
num1=document.getElementById("num1");
num2=document.getElementById("num2");

function solve(op){
    switch(op){

        case '+':
            result=parseFloat(num1.value)+parseFloat(num2.value);
            document.getElementById("ans").innerHTML="";
            
            console.log(result);
            
            break;
        case '-':
            result=parseFloat(num1.value)-parseFloat(num2.value);
            break;
        case '*':
            result=parseFloat(num1.value)*parseFloat(num2.value);
            break;
        case '/':
            result=parseFloat(num1.value)/parseFloat(num2.value);
            break;
            
            
    }

    
}
function output(){
    document.getElementById("ans").innerHTML=result;
    num1.value=" ";
    num2.value=" ";
    console.log(result);

}

