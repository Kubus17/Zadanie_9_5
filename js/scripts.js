// scripts.js
var k = document.getElementsByClassName('button');
var menyLength = k.length;
for (var i = 0; i < menyLength; i++){
    k[i].innerText = "Button nr. " + i;
    alert("Zmieniam przycisk nr " + i);
    console.log(k[i]);
 }
