
/*var a=900000;
var b=300000;
browser.browserAction.onClicked(settime(a,b));
function settime(a,b){
  var a=prompt("Enter Learning Period(Ideal=15 min) :");
  alert(a);
  a=a*60000;
  return a;
}
*/
//---------------------------------------------
var sel=confirm("Do you want to enter learning mode?");

if(sel==true){
  var a=prompt("Enter Learning Period(Ideal=15 min) :");
  a=a*60000;
  var pos=setInterval(lmess,a);


}



else
{
  var b=prompt("Enter Chillout Period(Ideal=5-10 min) :");
  b=b*60000;
  var pos=setInterval(emess,b);

}

function lmess(){
  alert("Wazzah ! You have been learning stuff for a while. Take a break for healthy brain function.");
}
function emess(){
  alert("You've been bingeing Youtube for a while now. Learn something for heathy brain function.");
}
