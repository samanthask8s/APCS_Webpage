function hello(){
  var x;
  var r = confirm("Do you want to see a picture of a koala?");
  if (r == true) {
    var elem = document.createElement("img");
    elem.setAttribute("src", "http://www.animalfactguide.com/wp-content/uploads/2013/01/koala2.jpg");
    elem.setAttribute("height", "450px");
    document.getElementById("body").appendChild(elem);
  } else {
    window.alert("Click again if you change your mind.");
  }

}
function math(){
  var sum = prompt("What is the sum of 2 and 3? ");
  if(sum==='5'){
    window.alert("good job!");
    document.getElementById("sum").innerHTML = "done";
  }else if(sum===null){
    window.alert("ok maybe next time.");
  }else{
    window.alert("Sorry that's not right. try again");
    math();
  }
}
