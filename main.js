var coll = document.getElementsByClassName("collapsible");
var text = document.getElementsByClassName("text");
var i;
console.log(text.length);

for (i = 0; i < text.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    this.innerHTML=content.innerHTML;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}