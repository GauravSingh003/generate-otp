let ganerate = document.getElementById("btn");
ganerate.addEventListener("click",function(length){
    let otp = "";
    for(i=0; i< length;i++){
        otp += Math.floor(Math.random() * 10).toString();
    }
    alert("Your OTP is : ");
    return otp;
});