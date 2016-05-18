function hello(){
  var x;
  var r = confirm("Press a button");
  if (r == true) {
    x = "You pressed OK!";
  } else {
    x = "You pressed Cancel!";
  }
  window.alert(x);
}
function math(){
  var sum = prompt("What is the sum of 2 and 3? ");
  if(sum==='5'){
    window.alert("good job!");
  }else if(sum===null){
    window.alert("ok maybe next time.");
  }else{
    window.alert("Sorry that's not right. try again");
    math();
  }
}
