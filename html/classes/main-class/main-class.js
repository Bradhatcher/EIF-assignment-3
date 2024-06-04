var classElement = document.getElementById("main-class");
var storedclassValue;

function storeSelectedValue() {
  var selectedclassValue = classElement.value;
  storedclassValue = selectedclassValue;
  console.log("Stored value: " + storedclassValue);

  level = sessionStorage.getItem("level");
  sessionStorage.setItem('class', selectedclassValue);

  if (storedclassValue === "Barbarian" && level === "Level 3"| level === "Level 4" | level === "Level 5"){
    window.location.href = "../Barbarian/Barbarian-choice.html"
  }
  else if (storedclassValue === "Druid" && level === "Level 2" | level === "Level 3" | level === "Level 4" | level === "Level 5"){
    window.location.href = "../Druid/Druid-choice.html"
  }
  else if (storedclassValue === "Fighter" && level === "Level 3"| level === "Level 4" | level === "Level 5"){
    window.location.href = "../Fighter/Fighter-choice.html"
  }
  else if (storedclassValue === "Wizard" && level === "Level 2" | level === "Level 3" | level === "Level 4" | level === "Level 5"){
    window.location.href = "../Wizard/Wizard-choice.html"
  }
  else{
    window.location.href = "../../Final/final.html"
  }
}