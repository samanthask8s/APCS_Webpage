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
function maths(){
  var x = Math.floor(Math.random()*10);
  var y = Math.floor(Math.random()*10);
  var r = Math.floor(Math.random()*3);
  if(r==0){sums(x,y);}
  else if(r==1){minus(x,y);}
  else{times(x,y)}
}
function sums(x,y){
  var sum = prompt("What is the sum of "+x+" and "+y+"? ");
  if(sum==x+y){
    window.alert("good job!");
    document.getElementById("sum").innerHTML = "new problem?";
  }else if(sum===null){
    window.alert("ok maybe next time.");
  }else{
    window.alert("Sorry that's not right. try again");
    sums(x,y);
  }
}
function minus(x,y){
  var ans = prompt("What is "+x+"-"+y+"?");
  if(ans==x-y){
    window.alert("good job!");
    document.getElementById("sum").innerHTML = "new problem?";
  }else if(ans===null){
    window.alert("ok maybe next time.");
  }else{
    window.alert("Sorry that's not right. try again");
    minus(x,y);
  }
}
function times(x,y){
  var ans = prompt("What is "+x+" times "+y+"?");
  if(ans==x*y){
    window.alert("good job!");
    document.getElementById("sum").innerHTML = "new problem?";
  }else if(ans===null){
    window.alert("ok maybe next time.");
  }else{
    window.alert("Sorry that's not right. try again");
    times(x,y);
  }
}
function input(){
  var numString = prompt("Type a list of numbers with commas between");
  var nums=numString.split(',');
  var sum=0;
  var modes=[];
  for(var i=0; i<nums.length;i++){
    nums[i]=parseInt(nums[i]);
    sum+=nums[i];
    if(modes[nums[i]]==null){
      modes[nums[i]]=0;
    }
    modes[nums[i]]++;
  }
  nums=selectionSort(nums);
  if(nums.length%2==0){
    var med= (nums[nums.length/2]+nums[nums.length/2-1])/2
  }else{
    var med= nums[(nums.length-1)/2]
  }

  var biggest=0;
  if(modes[0]==null){
    modes[0]=0;
  }
  for(var i=0; i<modes.length;i++){
    if(modes[i]>modes[biggest]){
      biggest=i;
    }
  }
  var avg = sum/nums.length;
  var body = document.getElementById("body")
  body.innerHTML=body.innerHTML+"<br><br>"+nums+"<br>Avg:"+avg+"<br>Mode:"+biggest+"<br>Median:"+med;
}
function selectionSort(items){
    var len = items.length,
        min;
    for (i=0; i < len; i++){
        min = i;
        for (j=i+1; j < len; j++){
            if (items[j] < items[min]){
                min = j;
            }
        }
        if (i != min){
            swap(items, i, min);
        }
    }
    return items;
}
function swap(items, firstIndex, secondIndex){
    var temp = items[firstIndex];
    items[firstIndex] = items[secondIndex];
    items[secondIndex] = temp;
}
