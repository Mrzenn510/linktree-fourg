function jam(){

let waktu=new Date();

document.getElementById("clock").innerHTML=
waktu.toLocaleTimeString("id-ID");

}

setInterval(jam,1000);

jam();
