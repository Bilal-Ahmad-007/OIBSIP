function getElement(num){
    const element= document.getElementById('input');
    element.value+=num;
}

function getResult(){
    const element=document.getElementById('input');
    element.value=eval(element.value);
    
}
function clearResult(){
    const element=document.getElementById('input');
    element.value=''
}
function square(){
    const element=document.getElementById('input');
    element.value=Math.sqrt(element.value)
    
}
function Delete(){
    const element=document.getElementById('input');
    element.value=element.value.slice(0,-1);

}