/*Simple simulation about generic behavior...*/
window.onload = function() {
  document.getElementById('location').innerHTML = "You're in <strong>Home</strong>"
  document.getElementById('title1').innerHTML = "come on!"
  document.getElementById('title2').innerHTML = "Welcome to my blog"
  document.getElementById('about').onclick = showAbout;
  document.getElementById('hobbies').onclick = showHobbies;
  document.getElementById('contact').onclick = showContact;
};
//Functions change headers and show you location in template.
function showAbout(){
  document.getElementById('location').innerHTML = "You're in <strong>About</strong>"
  document.getElementById('title1').innerHTML = "About Blog"
  document.getElementById('title2').innerHTML = "About topics in Blog"
}
function showHobbies(){
  document.getElementById('location').innerHTML = "You're in <strong>Hobbies</strong>"
  document.getElementById('title1').innerHTML = "Origami and Tv Series"
  document.getElementById('title2').innerHTML = "Studio Ghibli's films"
}

function showContact(){
  document.getElementById('location').innerHTML = "You're in <strong>Contact me</strong>"
  document.getElementById('title1').innerHTML = "Who Am I?"
  document.getElementById('title2').innerHTML = "Do you want contact me?"
}