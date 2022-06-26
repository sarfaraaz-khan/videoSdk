var mainContainer = document.createElement("div");
mainContainer.setAttribute("class", "mainContainer");

function htmlover() {
  var datacontainer = document.createElement("div");
  var heading = document.createElement("h1");

  heading.innerText = "sarfaraaz khan";
  datacontainer.appendChild(heading);
  mainContainer.appendChild(datacontainer);
}

function render() {
  htmlover();
  var root = document.getElementById("root");
  root.appendChild(mainContainer);
}

render();
