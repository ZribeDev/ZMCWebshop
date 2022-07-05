function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}
function eraseCookie(name) {   
    document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}
window.onload = function(){
    if (typeof getCookie("username") === 'string') {
      if (getCookie("username") === 'skipped') {
        document.getElementById("playerName").innerHTML = "Steve"
        document.getElementById("ProfileImage2").src = "https://minotar.net/avatar/Steve"
      } else {
        document.getElementById("playerName").innerHTML = getCookie("username")
        document.getElementById("ProfileImage2").src = "https://minotar.net/avatar/" + getCookie("username")
      }
      var div = document.getElementById('LoginFormID');
        div.remove()
    }
    document.getElementById('close').onclick = function(){
        
        setCookie("username", "skipped", 0.69446)
        var div = document.getElementById('LoginFormID');
        div.remove()
        document.getElementById("playerName").innerHTML = "Steve"
        document.getElementById("ProfileImage2").src = "https://minotar.net/avatar/Steve"
        return false;
    };

  document.getElementById('login').onclick = function(){
        setCookie("username", document.getElementById("username").value, 1)
        var div = document.getElementById('LoginFormID');
        div.remove()
        document.getElementById("ProfileImage2").src = "https://minotar.net/avatar/" + getCookie("username")

        document.getElementById("playerName").innerHTML = getCookie("username")
        return false;
  };
};

function TypeChange() {
  if (document.getElementById("username").value.includes(".")) {
      document.getElementById("ProfileImage").src = "https://www.craftycreations.net/wp-content/uploads/2020/08/Bedrock-Block.png"
  }
  else if (document.getElementById("username").value !== "") {
    document.getElementById("ProfileImage").src = "https://minotar.net/avatar/" + document.getElementById("username").value
  } else {
    document.getElementById("ProfileImage").src = "https://minotar.net/avatar/Steve"
  }
}
