var levelElement = document.getElementById("levelselect");
var storedlevelValue;

function storeSelectedValue() {
  var selectedlevelValue = levelElement.value;
  storedlevelValue = selectedlevelValue;
  console.log("Stored value: " + storedlevelValue);

  sessionStorage.setItem('level', selectedlevelValue);

  if (storedlevelValue === "Level 1"){
    window.location.href = "../../classes/main-class/main-class.html"
  }
  else if (storedlevelValue === "Level 2"){
    window.location.href = "../../classes/main-class/main-class.html"
  }
  else if (storedlevelValue === "Level 3"){
    window.location.href = "../../classes/main-class/main-class.html"
  }
  else if (storedlevelValue === "Level 4"){
    window.location.href = "../../classes/main-class/main-class.html"
  }
  else if (storedlevelValue === "Level 5"){
    window.location.href = "../../classes/main-class/main-class.html"
  }
}