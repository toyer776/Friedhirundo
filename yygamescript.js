//Make the DIV element draggagle:
var divs = document.getElementsByClassName("moving");
for(var x = 0 ; x < divs.length ; x++){
	dragElement(divs[x]);
}

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (elmnt.querySelector(".moving")) {
    /* if present, the header is where you move the DIV from:*/
    elmnt.querySelector(".moving").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }  
  
  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }

}

function makeupclick(){
var k = document.getElementById("makeupbox");
if (k.style.display == "none"){
  k.style.display = "block";
}else{
  k.style.display = "none";
}
}

function oneclick(){
  var q = document.getElementById("click1box");
  if (q.style.display == "none"){
    q.style.display = "block";
  }else{
    q.style.display = "none";
  }
  }


function twoclick(){
  var w = document.getElementById("click2box");
  if (w.style.display == "none"){
    w.style.display = "block";
  }else{
      w.style.display = "none";
  }
   }

function threeclick(){
  var e = document.getElementById("click3box");
  if (e.style.display == "none"){
      e.style.display = "block";
  }else{
        e.style.display = "none";
}
  }

function fourclick(){
  var r = document.getElementById("click4box");
  if (r.style.display == "none"){
      r.style.display = "block";
}else{
      r.style.display = "none";
}
  }

  function fire(){
    var tr = document.getElementById("fire");
    if (tr.style.display == "none"){
        tr.style.display = "block";
  }else{
        tr.style.display = "none";
  }
    }

