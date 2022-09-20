const cambioDolar = 6.89;
let _usuario = localStorage.getItem("usuario"); 
let boxUsuario = document.getElementById("boxUsuario");

verificaSesion();

function verificaSesion (){
    if(_usuario!='' && _usuario!=null && _usuario!=undefined ){
        console.log(_usuario);
        boxUsuario.innerHTML=
            `<label><i class="fa fa-user"></i> ${_usuario}</label>
            <button id="btnSalir">Salir</button>
            `
        ;
        let btnSalir = document.getElementById("btnSalir");
        btnSalir.addEventListener("click", cerrarSesion);

    }else{
        
        boxUsuario.innerHTML = 
            `<form>
                <input type="text" placeholder="usuario" id="inputUsuario">
                <button id="btnIngresar">Ingresar</button>
            </form>`
        ;
        let btnIngresar = document.getElementById("btnIngresar");
        btnIngresar.addEventListener("click", iniciarSesion);
    }
}

let btnCambio = document.getElementById("btnCambio");
btnCambio.addEventListener("click", calcularCambio);

function calcularCambio(){  
    let valorBs = document.getElementById('valorBs').value;
    let resultado = valorBs*cambioDolar;
    document.getElementById("resultadoCambio").innerHTML = resultado.toFixed(2);
};


function iniciarSesion (e){
    e.preventDefault();
    if(document.getElementById("inputUsuario").value!=''){        
        localStorage.setItem("usuario", document.getElementById("inputUsuario").value);
        _estaLogueado = true;
        _usuario = localStorage.getItem("usuario"); 
        verificaSesion();
        swal(`${_usuario}`, `Iniciaste sesión.`, "success");
    }    
}

function cerrarSesion (e){
    e.preventDefault();
    swal(`${_usuario}`, `Cerraste sesión.`, "warning");
    _estaLogueado = false;
    _usuario = null;
    localStorage.removeItem('usuario');
    verificaSesion();    
}
