var nd = null;
var cnd = null;
var parentdiv = document.getElementsByClassName("grid")[0];

function gridmaker(numberofElements) {
  for (var i = 1; i <= numberofElements; i++) {
    cnd = document.createElement("div");
    cnd.className = "column flex-container-row";
    parentdiv.appendChild(cnd);
    for (var j = 1; j <= numberofElements; j++) {
      nd = document.createElement("div");
      nd.className = "row flex-container-column";
      cnd.appendChild(nd);
    }
  }
  console.log(parentdiv);
  return;
}

function popup() {
  let N = parseInt(prompt("enter the Value of N for the N*N grid"));
  gridmaker(N);
}
