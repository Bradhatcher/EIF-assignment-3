var ELfElement = document.getElementById("Elf-choice");
var storedELfValue;

function storeSelectedValue() {
  var selectedELfValue = ELfElement.value;
  storedELfValue = selectedELfValue;
  console.log("Stored value: " + storedELfValue);

  sessionStorage.setItem('subrace', selectedELfValue);

  if (storedELfValue === "Wood"){
    window.location.href = "../../levels/level-selector/level.html"
  }
  else if (storedELfValue === "High"){
    window.location.href = "../../levels/level-selector/level.html"
  }
}