window.onload=function(){
    var sub = document.getElementById("SubmitButton");
    sub.addEventListener("click",  () => {OpenPage();});
}

function OpenPage()
{
    var level = document.getElementById("UserLevel");  
    if (level.value == "manager")
    {
        window.open("manager.html","_self");
    }
    else if (level.value == "user")
    {
        window.open("user.html","_self");
    }
    else
    {
        window.open("admin.html","_self");
    }
}