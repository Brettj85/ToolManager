var level = document.getElementById("UserLevel");

var sub = document.querySelector(".SubmitButton")
sub.addEventListener("click", function(e) {
        OpenPage();
      e.preventDefault();
    });
    function OpenPage()
{
    if (level.Value == "manager")
    {
        window.open("user.html");
    }
    else
    {
        window.open("user.html");
    }
}