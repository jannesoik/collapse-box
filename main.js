var inner = document.getElementsByClassName("inner");
var outer = document.getElementsByClassName("outer");
var def1=document.getElementById("col-1").innerHTML.defaultValue="Open Section 1";
console.log(def1);
var text = document.getElementsByClassName("text");
var i;
// console.log(text[0].innerHTML);


Array.prototype.forEach.call(outer, function(item, i) {
  // console.log(item.innerHTML);

  outer[i].addEventListener('click', function(){
    this.classList.toggle("active");
    
    if(this.classList.value==='outer active'){
      outer[i].innerHTML=text[i].innerHTML;
    } else {
      outer[i].innerHTML=def1;
    }
  });
});