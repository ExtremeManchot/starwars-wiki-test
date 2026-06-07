function ValidateEmail(input) {

  var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (input.value.match(validRegex)) {


    return true;

  } else {

    alert("Adresse email invalide");


    return false;

  }

}

function validateForm() {
  let x = document.forms["monForm"]["fnom"].value;
  let y = document.forms["monForm"]["fnom2"].value;
  let z = document.forms["monForm"]["fnom3"].value;
  var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (!(x == "") && !(y=="") && !(z=="")) {
	  if (input.value.match(validRegex)) {

		alert("Le formulaire à été envoyé")
		return true;
	} 
	else {

		alert("Adresse email invalide");

		return false;

	  }
  }
  else{
	  alert("Les vides doivent être remplis (sauf le commentaire)");
	  return false;
  }
}

document.addEventListener("DOMContentLoaded", () => {
        const banner = document.getElementById("cookie-banner");
        const acceptButton = document.getElementById("accept-cookies");
        const declineButton = document.getElementById("decline-cookies");
        const closeButton = document.getElementById("close-banner");

        if (!localStorage.getItem("cookiesAccepted")) {
            banner.style.display = "flex";
        }

        acceptButton.addEventListener("click", () => {
            localStorage.setItem("cookiesAccepted", "true");
            banner.style.display = "none";
        });

        declineButton.addEventListener("click", () => {
            localStorage.setItem("cookiesAccepted", "true");/*oups.... code des gestions de cookies de google on dirait*/
            banner.style.display = "none";
        });

        closeButton.addEventListener("click", () => {
			localStorage.setItem("cookiesAccepted", "true");/*oups.... code des gestions de cookies de google on dirait*/
            banner.style.display = "none";
        });
    });

