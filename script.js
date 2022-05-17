const message =
"Thank you for your message. Me-a Mario will contact you shortly!"

document
.getElementById("submit-form")
.addEventListener("submit", function(event) {
  event.preventDefault();
  alert(message);
});