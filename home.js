function dig(element) {
  var times = parseInt(element.getAttribute("data-times") || 0);
  if (times === 5) {
    poof("dig");
    reveal("solution");
    reveal("hero");
    setTimeout(function () {
      reveal("stealth");
    }, 2000);
  } else {
    var newText = "˙˙" + element.textContent + "˙˙";
    element.textContent = newText;
    element.setAttribute("data-times", ++times);
  }
}

function showDigDeeper() {
  reveal("dig");
  var element = document.getElementById("problem");
  element.onclick = undefined;
}

function poof(elementId) {
  var classes = document.getElementById(elementId).classList;
  classes.add("poof");
  classes.remove("reveal");
}

function reveal(elementId) {
  var classes = document.getElementById(elementId).classList;
  classes.remove("hide");
  classes.add("reveal");
}

document.addEventListener("DOMContentLoaded", function () {
  reveal("problem");
});
