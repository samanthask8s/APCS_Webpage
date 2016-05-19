
function hello(){
  var r = confirm("Do you want to see a picture of a koala?");
  if (r == true) {
    removeImg();
    var elem = document.createElement("img");
    elem.setAttribute("src", "http://www.animalfactguide.com/wp-content/uploads/2013/01/koala2.jpg");
    elem.setAttribute("height", "450px");
    document.getElementById("body").appendChild(elem);
  } else {
    window.alert("Ok. Here's a gif instead.");
    removeImg();
    var elem = document.createElement("img");
    elem.setAttribute("src", "https://67.media.tumblr.com/7f7a35ed8d7caae7ddd6a05c9b712634/tumblr_nhmaa8HmXf1te5ruso1_500.gif");
    elem.setAttribute("height", "450px");
    document.getElementById("body").appendChild(elem);
  }

}
function removeImg(){
  if(document.getElementById("body").childNodes.length!=1){
    document.getElementById("body").removeChild(document.getElementById("body").childNodes[1]);
  }
}
function math(){
  var x = Math.floor(Math.random()*10);
  var y = Math.floor(Math.random()*10);
  var sum = prompt("What is the sum of "+x+" and "+y+"? ");
  var sumxy=x+y;
  if(sum===sumxy.toString()){
    window.alert("good job!");
    document.getElementById("sum").innerHTML = "done";
  }else if(sum===null){
    window.alert("ok maybe next time.");
  }else{
    window.alert("Sorry that's not right. try again");
    math();
  }
}
