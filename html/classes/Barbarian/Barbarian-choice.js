var subclassElement = document.getElementById("subclass");
var storedsubclassValue;

function storeSelectedValue() {
  var selectedsubclassValue = subclassElement.value;
  storedsubclassValue = selectedsubclassValue;
  console.log("Stored value: " + storedsubclassValue);

  sessionStorage.setItem('subclass', selectedsubclassValue);

  if (storedsubclassValue === "Berserker"){
    window.location.href = "../../Final/final.html"
  }
  else if (storedsubclassValue === "Zealot"){
    window.location.href = "../../Final/final.html"
  }
}