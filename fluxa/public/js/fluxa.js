document.addEventListener("DOMContentLoaded", function(event) {

console.log("Put a message here.");
var elements = document.getElementsByClassName("container");
console.log(elements.length);
for(var i=0;i<elements.length;i++)
{
  elements[i].innerHTML = 'Testing here';
  console.log("Put a message here.");
}});

document.addEventListener("DOMContentLoaded", function(e){
    var slides = document.getElementsByClassName("navbar");
  console.log(slides.length); 
  console.log(slides[0]); 
  });