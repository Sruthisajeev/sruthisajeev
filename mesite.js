function Validates(){

var user=document.f1.username.value;
var place1=document.f1.place.value;
var email=document.f1.email.value;
var mobile=document.f1.mobile.value;

    if (user=="null" || user=="")
    {
        document.getElementById("user").innerHTML="Please enter the username";

    }
    if (place1=="null" || place1=="")
    {
        document.getElementById("place").innerHTML="Please enter the Place";

    }
    if (email=="null" || email=="")
    {
        document.getElementById("email").innerHTML="Please enter the Email";
    }
    if ((mobile=="null" || mobile=="") && (mobile.length<10)) 
    {
        document.getElementById("mobile").innerHTML="Please enter 10 digit phone number";

    }
    
}
