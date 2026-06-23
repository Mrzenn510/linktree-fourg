function jam(){
let now = new Date();

document.getElementById("clock").innerHTML =
now.toLocaleTimeString("id-ID");
}

setInterval(jam,1000);
jam();
