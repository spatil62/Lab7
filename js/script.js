function init() {
  //add your javascrip between these two lines of code
  //window.addEventListener("click",myfunction);
  function myTaskFunction() {

    var inputval = document.getElementById('entryinput');
    var outputval = document.getElementById('textoutput');

    alert("Sneha Patil :" + inputval.value);
    outputval.innerHTML = inputval.value;
    
  }
  var clickbutton = document.getElementById('entrybutton');
  clickbutton.addEventListener('click', myTaskFunction);
}
window.addEventListener('load', init);