var lamp = document.getElementById("lamp");
var inter = false;

lamp.addEventListener("click", lig_des)

function lig_des(){
    if(!inter){
    lamp.src="assets/lamp_on.png"
    lamp.alt="Lâmpada acesa"
    document.body.style.background = "radial-gradient(circle, white 8%, yellow 100%"
    inter = true
    }else{
    lamp.src="assets/lamp_off.png"
    lamp.alt="Lâmpada apagada"
    document.body.style.background = "radial-gradient(circle, white 8%, black 100%"
    inter = false
    }
}
