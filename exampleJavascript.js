
function changeHTML(){
  document.getElementById("demo").innerHTML ="Hello World!";
}

function changeImage(){
  document.getElementById("goku").src ="images/goku siayan.jpg";
}

function changeHeading(){
  document.getElementById("headingDemo").innerHTML="Big Header";
}

function changeFontSize(){
  document.getElementById("demo").style.fontSize='100px';
}

function changeimageSize(){
  document.getElementById("goku").style.width='100px';
  document.getElementById("goku").style.height='100px';
}

function changeColor(){
  document.getElementById("demo").style.color="#89CFF0";
  alert("Color has changed")
}

function validateForm(){
  let x = document.forms["myForm"]["name"].value;
  if(x==""){
    alert("Name must be filled out");
    return false;
  }
}
