const url =
  "https://discordapp.com/api/webhooks/1013775493276913665/DzqnYuI_h84LN_VwEUsW8UAh1AIp_loVnENVMgQN2lM1YdSUEzP4MXHMsL2RdhSv8KDH";

let message_template = {
  
}

function formSubmit() {
  let email = document.getElementById("email").value;
  let name = document.getElementById("name").value;
  let message = document.getElementById("message").value;

  if (email == "") {
    document.getElementById("response").innerText = "Venligst skriv inn en epost";
    return
  }
  if (name == "") {
    document.getElementById("response").innerText = "Venligst skriv inn navnet ditt";
    return
  }
  if (message == "") {
    document.getElementById("response").innerText = "Venligst skriv inn en melding";
    return
  }

  var xhr = new XMLHttpRequest();
  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send(
    JSON.stringify({
      content: email + "\n" + name + "\n" + message,
    })
  );

  document.getElementById("response").innerText =
    "Din melding har blit sendt. Jeg tar kontakt så snart jeg kan.";
  document.getElementById("submit").disabled = true;
  
}
