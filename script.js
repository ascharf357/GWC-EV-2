/************************************************/
/********* ADD CHECKLIST FUNCTIONALITY **********/
/************************************************/

/* TODO: Add a variable to store the "my-list" element */


/* TODO: Create the event listener that listens for a mouse click and runs the checkOffList function */


/* TODO: Declare the function checkOffList and add actions inside the { } */




var my_list = document.getElementById("my-list");

if (my_list){
  my_list.addEventListener("click",checkOffItem);
}


function checkOffItem(clicked){
    if (clicked.target.tagName == "LI") {
     clicked.target.classList.toggle("all-done");
      myMove();
    
    }
}

  var pos = -1200;
  function myMove() {
    var elem = document.getElementById("balloon");   
    var elem2 = document.getElementById("balloons"); 
    
    var id = setInterval(frame, 10);
    function frame() {
      if (pos == 800) {
        clearInterval(id);
        elem.style.top = "-1200px";
        elem2.style.top = "-1200px"; 
        pos = -1200;
        return;
      } else {
        pos = pos+10; 
        elem.style.top = pos + 'px'; 
        elem2.style.top = pos + "px";

    }
  }
}