function validate()
{
var username=document.getElementById("username").value;
var password=document.getElementById("password").value;
if(username=="admin"&& password=="Test@123")
{
alert("login successfully");
window.open("file:///D:/Downloads/main_project/dashboard.html");
return false;
}
else
{
alert("login failed");
}
}