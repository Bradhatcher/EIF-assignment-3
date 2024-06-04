var subclassElement = document.getElementById("subclass");
var storedsubclassValue;

function storeSelectedValue() {
  var selectedsubclassValue = subclassElement.value;
  storedsubclassValue = selectedsubclassValue;
  console.log("Stored value: " + storedsubclassValue);

  sessionStorage.setItem('subclass', selectedsubclassValue);

  if (storedsubclassValue === "Moon"){
    window.location.href = "../../Final/final.html"
  }
  else if (storedsubclassValue === "Land"){
    window.location.href = "../../Final/final.html"
  }
}