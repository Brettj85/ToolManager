var list = document.querySelectorAll(".Report");
for (var i = 0; i < list.length; i++) {
  list[i].addEventListener("click", function(e) {
    openUser(this.getAttribute("data-origin"));
    e.preventDefault();
  });
}

function openUser(user)
{
    document.getElementById("userData").innerHTML = user;

    if (user == "Smith, John")
    {
      document.getElementById("smithProfile").classList.add("expand");
      document.getElementById("doeProfile").classList.remove("expand");
      document.getElementById("rest").classList.remove("expand");
    }
    else if (user == "Doe, Jane")
    {
      document.getElementById("smithProfile").classList.remove("expand");
      document.getElementById("doeProfile").classList.add("expand");
      document.getElementById("rest").classList.remove("expand");
    }
    else
    {
      document.getElementById("smithProfile").classList.remove("expand");
      document.getElementById("doeProfile").classList.remove("expand");
      document.getElementById("rest").classList.add("expand");
    }
}