var a = Array();
a[0]=["Juan Pérez","Av. Argentina 3000","Neuquén Capital","154888888"];
a[1]=["Tito Sánchez","Av. Del Trabajador 300","Neuquén Capital","154555555"];
a[2]=["Cecilia Carrizo","Sierra Grande 900","Neuquén Capital","4485895"];
a[3]=["Pedro González","Amaranto Usares 1254","Neuquén Capital","4420444"];
a[4]=["Verónica Lozano","Saturnino Torres 100","Neuquén Capital","5425842"];


function insertar(nombre, direccion, ciudad, telefono) {
    const tabla = document.querySelector("#tabla");

    const tr = document.createElement("tr");

    const crearCelda = (contenido) => {
        const td = document.createElement("td");
        td.textContent = contenido;
        return td;
    };

    tr.appendChild(crearCelda(nombre));
    tr.appendChild(crearCelda(direccion));
    tr.appendChild(crearCelda(ciudad));
    tr.appendChild(crearCelda(telefono));

    const tdBorrar = document.createElement("td");
    const linkBorrar = document.createElement("a");
    linkBorrar.textContent = "Borrar";
    linkBorrar.href = "#";
    linkBorrar.addEventListener("click", function(event) {
        event.preventDefault();
        tabla.removeChild(tr);
    });

    tdBorrar.appendChild(linkBorrar);
    tr.appendChild(tdBorrar);

    tabla.appendChild(tr);
}


a.forEach(element => {
    insertar(element[0],element[1],element[2],element[3])
});

// Cachear las referencias a los elementos del DOM
const ingresarButton = document.getElementById("ingresar");
const nombreInput = document.getElementById("nombre");
const direccionInput = document.getElementById("direccion");
const ciudadInput = document.getElementById("ciudad");
const telefonoInput = document.getElementById("telefono");

// Función para obtener valores de los inputs
const obtenerValores = () => ({
    nombre: nombreInput.value.trim(),
    direccion: direccionInput.value.trim(),
    ciudad: ciudadInput.value.trim(),
    telefono: telefonoInput.value.trim(),
});

// Función para limpiar los campos
const limpiarCampos = () => {
    nombreInput.value = "";
    direccionInput.value = "";
    ciudadInput.value = "";
    telefonoInput.value = "";
};

// Manejador de eventos para el botón 'ingresar'
ingresarButton.addEventListener("click", () => {
    const { nombre, direccion, ciudad, telefono } = obtenerValores();
    insertar(nombre, direccion, ciudad, telefono);
    limpiarCampos();
});
