// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
function showModal(obj) {
  modal = document.getElementById(obj);
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
function close(obj) {
  console.log("HELLO");
  modal = document.getElementById(obj);
  console.log(modal);
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

function LarsNilsFunction(x) {
  x.classList.toggle("change");
  let dropdown = document.getElementById('hamburger-items-container');
  dropdown.classList.toggle("show");
}