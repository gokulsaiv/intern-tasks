//code for cal
str="";
dt=""
btns=document.querySelectorAll('.btn');
Array.from(btns).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        
        if(e.target.innerText==='C'){
            dt=str;
            str='';
            document.querySelector('input').value=" ";

        }
        
        else if(e.target.innerHTML==='='){
            str=eval(str);
            dt=str;
            console.log(dt)
            document.querySelector('input').value=str;

        }
        else if(e.target.innerHTML==="previous"){
            str=dt
            document.querySelector('input').value=str;

        }
        
        else{
            
        str=str+e.target.innerHTML;
        document.querySelector('input').value=str;
        }
        
    });
})

//code for cal2
