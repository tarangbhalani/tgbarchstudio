var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
var num3 = document.getElementById("xy");

num3.addEventListener('submit', function() {
    
   if (!num1.value || !num2.value()) {
       alert("Please Enter Something");
   } else {
        var x = parseFloat (num1.value);
        var y = parseFloat (num2.value);
        var result = x / y;
        var percent = result * 100;
        alert("percent");
    }
});