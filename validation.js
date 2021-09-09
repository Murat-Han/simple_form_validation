"use strict";

var textarea1=document.querySelector("#textarea1");
var counter=document.querySelector("#counter");
var characterlenght, charlimit=150;
function lengthCheck(){
    characterlenght=this.value.length;
    if (charlimit>=characterlenght){
        var remlength=charlimit-characterlenght;
        counter.textContent=remlength+ " karakter kaldı.";
    } else {
        this.value=this.value.substr(0,charlimit);
    }
}
textarea1.onkeydown=lengthCheck;
textarea1.onkeyup=lengthCheck;

var btn=document.querySelector("#btn");
var selectbox=document.querySelector("#country");
btn.addEventListener("click",function(){
const selectedValue=selectbox.options[selectbox.selectedIndex].textContent;
  var result2=document.getElementById("result2");
  result2.style.display="block";
  result2.textContent="Ülkeniz: "+selectedValue;
setTimeout(function(){ result2.style.display="none"; }, 2000);
});

function deleteWarnings(){
    setTimeout(function(){ result.style.display="none"; }, 2000);
}
          function formValidation(){
            var valueUsername, valuePassword, result;
            valueUsername=document.getElementById("username").value;
            valuePassword=document.getElementById("password").value;
            result=document.getElementById("result");
            if (valueUsername=="" && valuePassword==""){
                result.style.display="block";
                result.className="alert alert-danger mt-3 col-6";
                result.innerHTML="Kullanıcı adı ve parola boş bırakılamaz!...";
                deleteWarnings();
                return false;
            } else if (valueUsername==""){
                result.style.display="block";
                result.className="alert alert-danger mt-3 col-6";
                result.innerHTML="Kullanıcı adı boş bırakılamaz!...";
                deleteWarnings();
                return false;
            } else if (valuePassword==""){
                result.style.display="block";
                result.className="alert alert-danger mt-3 col-6";
                result.innerHTML="Parola boş bırakılamaz!...";
                deleteWarnings();
                return false;
            } else {
                result.style.display="block";
                result.className="alert alert-success mt-3 col-6";
                result.innerHTML="Giriş Başarılı!...";
                deleteWarnings();
            }
    
    }

