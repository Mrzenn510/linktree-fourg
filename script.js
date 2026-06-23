function jam(){

let sekarang = new Date();

document.getElementById("clock").innerHTML =
sekarang.toLocaleTimeString("id-ID");

}

setInterval(jam,1000);

jam();
