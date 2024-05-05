function validateemail()
{
var x=document.querySelectorAll("#email")[0].value;
var atposition=x.indexOf("@");
var dotposition=x.lastIndexOf(".");
if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){
  alert("Invalid email");
  return false;
  }
  else{
    location.replace("/home.html")
    return true;
  }
}