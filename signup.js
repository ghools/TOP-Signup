
function passMatch() {
    let pass = document.getElementById("password");
    let passConf = document.getElementById("password");
    
    if(pass != passConf){
        alert("ERROR: Passwords Must Match")
    }
}
