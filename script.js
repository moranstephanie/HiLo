// JavaScript File


$(document).ready(function () {
  // All code goes here
  var correctnumber = "7";

  $("#life").click(function(){

  if($("#userinput").val() === correctnumber){
       alert("Congratulations!");
        
  }
   else{
        alert("WRONG");
    }
});
  
});