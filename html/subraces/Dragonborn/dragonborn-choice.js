var DragonbornElement = document.getElementById("dragonborn-choice");
var storedDragonbornValue;

function storeSelectedValue() {
  var selectedDragonbornValue = DragonbornElement.value;
  storedDragonbornValue = selectedDragonbornValue;
  console.log("Stored value: " + storedDragonbornValue);

  sessionStorage.setItem('subrace', selectedDragonbornValue);

  if (storedDragonbornValue === "Red"){
    window.location.href = "../../levels/level-selector/level.html"
  }
  else if (storedDragonbornValue === "Blue"){
    window.location.href = "../../levels/level-selector/level.html"
  }
}