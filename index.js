var container=document.querySelector('.container')
var h2=document.querySelector('h2')
var btn=document.querySelector('button')
var arr=[]
btn.onclick=function startGame(){
    var reqem =Math.floor(Math.random()*100)
   if(arr.indexOf(reqem)==-1){
    var newDiv=document.createElement('div')
    newDiv.innerText=reqem
    newDiv.setAttribute('class','stone') 
    container.append(newDiv);
    arr.push(reqem)
   }
   if(arr.length==5){
    btn.style.display='none'
    alert('Oyunu bitirdiniz')
    clearInterval(1)
   
   }
}

