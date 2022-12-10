/*SQUARE*/
document.getElementById("corPlaca").onchange = function () {
    console.log("Sign color has changed");
    var select = document.getElementById("corPlaca").value;
    let shape = document.querySelector('#square').style.background = select;
   
}

document.getElementById("corTexto").onchange = function () {
    console.log("Text color has changed");
    var select = document.getElementById("corTexto").value;
    let shape = document.querySelector('#square').style.color = select;
   
}

document.getElementById("textoPlaca").onkeyup = function () {
    console.log("Text has changed");
    var select = document.getElementById("textoPlaca").value;
    let shape = document.querySelector('#square').innerHTML = select; 
}

/*CIRCLE*/
document.getElementById("corPlaca").onchange = function () {
    console.log("Sign color has changed");
    var select = document.getElementById("corPlaca").value;
    let circle = document.querySelector('#circle').style.background = select;
   
}

document.getElementById("corTexto").onchange = function () {
    console.log("Text color has changed");
    var select = document.getElementById("corTexto").value;
    let shape = document.querySelector('#circle').style.color = select;
   
}

document.getElementById("textoPlaca").onkeyup = function () {
    console.log("Text has changed");
    var select = document.getElementById("textoPlaca").value;
    let shape = document.querySelector('#circle').innerHTML = select; 
}

document.getElementyById("reset").onclick = function()
{
    
}


