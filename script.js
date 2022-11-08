function init(){
//add your javascrip between these two lines of code
 //window.addEventListener("click",myfunction);
 function myfunction()
 {

   var input = document.getElementById('entryinput');
   alert("Sneha Sunil Patil :" + input.value);


   var outputresult = document.getElementById('textoutput');
   outputresult.innerHTML = inputentry;
 }

   var clickbutton = document. getElementById('entrybutton');
   clickbutton.addEventListener('click' , myfunction);
}
window.addEventListener('load', init);