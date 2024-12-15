let user = document.querySelector("#user");
user.addEventListener("keyup",function(){
   let u_times=document.querySelector(".u_times");
   let u_check=document.querySelector(".u_check");
   if(user.value.length == 0 || user.value.length<6){
    user.style.border = "1px solid red";
    u_times.style.display = "block";
    u_check.style.display = "none"
   }
else{
     user.style.border = "1px solid green";
    u_times.style.display = "none";
    u_check.style.display = "block"
}
})
let email = document.querySelector("#email");
email.addEventListener("keyup",function(){
   let e_times=document.querySelector(".e_times");
   let e_check=document.querySelector(".e_check");
   if(email.value.length==0||email.value.length<8){
    email.style.border = "1px solid red";
    e_times.style.display = "block";
    e_check.style.display = "none"
   }
else{
   email.style.border="1px solid green";
    e_times.style.display="none";
    e_check.style.display="block"
}
})
let password = document.querySelector("#pass");
password.addEventListener("keyup",function(){
   let p_times=document.querySelector(".p_times");
   let p_check=document.querySelector(".p_check");
   if(password.value.length==0||password.value.length<8){
    password.style.border="1px solid red";
    p_times.style.display="block";
    p_check.style.display="none"
   }
else{
     password.style.border="1px solid green";
    p_times.style.display="none";
    p_check.style.display="block"
}
})
function validate(){
    if(user.value.length==0||user.value.length<6){
        document.getElementById("error").innerHTML="please fill the required form.⚠"
        return false;
    }
    else if(email.value.length==0||email.value.length<6){
        document.getElementById("error").innerHTML="please fill the required form.⚠"
        return false;
    }
    else if(pass.value.length==0||pass.value.length<6){
        document.getElementById("error").innerHTML="please fill the required form. ⚠"
        return false;
    }
    else{
        swal("Good job!", "Your form has been submit", "success")
        return false;
    }
}