document.getElementById("button1").addEventListener("click",function(){alert(`I'm right!!`)});
document.getElementById("button2").addEventListener("click",function(){alert(`NO, I'm right!!`)});
document.getElementById("Hover").addEventListener("mouseover",function(){alert('I told you not to hover over me')});
let check= function(str){
if(str==="12345678")
document.getElementsByTagName('h1')[0].innerText="Nice";
else
alert('Wrong Password');
}
document.getElementById("pwd").addEventListener("submit",check(document.getElementById("pwd").value));
