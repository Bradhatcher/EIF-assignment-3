var DwarfElement = document.getElementById("dwarf-choice");
var storedDwarfValue;

function storeSelectedValue() {
  var selectedDwarfValue = DwarfElement.value;
  storedDwarfValue = selectedDwarfValue;
  console.log("Stored value: " + storedDwarfValue);

  sessionStorage.setItem('subrace', selectedDwarfValue);

  if (storedDwarfValue === "Hill"){
    window.location.href = "../../levels/level-selector/level.html"
  }
  else if (storedDwarfValue === "Mountain"){
    window.location.href = "../../levels/level-selector/level.html"
  }
}