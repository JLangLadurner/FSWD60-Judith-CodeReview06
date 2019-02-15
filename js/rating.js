var x=document.getElementsByClassName("star");
for(var i=0;i<x.length;i++){
  x[i].addEventListener("click",function(){
    var value=this.getAttribute("value");
    clearClass();
    for(var j=value-1;j>=0;j--){
      x[j].classList.toggle('a');
    }
  })
};

function clearClass(){
  var x=document.getElementsByClassName("star");
  for(var i=0;i<x.length;i++){
      //console.log(x[i].classList);
      x[i].classList.remove('a');
  };
}