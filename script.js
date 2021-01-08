document.getElementById("Hover").addEventListener("mouseover",function(){alert('I told you not to hover over me')});
document.getElementById("form").addEventListener("submit", function(e) {
  pass = document.getElementById("pwd").value;
  if(pass=="12345678"){
    e.preventDefault();
    document.getElementsByTagName('h1')[1].innerHTML="Login Successful!"
  }else{
    alert("Wrong password");
  }
});

