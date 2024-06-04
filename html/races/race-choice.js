var raceElement = document.getElementById("raceselect");
var storedRaceValue;

function storeSelectedValue() {
  var selectedRaceValue = raceElement.value;
  storedRaceValue = selectedRaceValue;
  console.log("Stored value: " + storedRaceValue);

  sessionStorage.setItem('race', selectedRaceValue);

  if (storedRaceValue === "Dragonborn"){
    window.location.href = "../subraces/Dragonborn/dragonborn-choice.html"
  }
  else if (storedRaceValue === "Dwarf"){
    window.location.href = "../subraces/Dwarf/Dwarf-choice.html"
  }
  else if (storedRaceValue === "Elf"){
    window.location.href = "../subraces/Elf/Elf-choice.html"
  }
  else if (storedRaceValue === "Half-Elf"){
    window.location.href = "../levels/level-selector/level.html"
  }
  else if (storedRaceValue === "Human"){
    window.location.href = "../levels/level-selector/level.html"
  }
}
