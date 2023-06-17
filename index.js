//VALIDAR FORMULARIO
function validateForm(){

    let nombre = document.getElementById('inputNombre').value;
    let apellido = document.getElementById('inputApellido').value;
    let dni = document.getElementById('inputDni').value;
    let nacimiento = document.getElementById('inputNacimiento').value;
    let nacionalidad = document.getElementById('inputNacionalidad').value;
    let celular = document.getElementById('inputCel').value;
    let email = document.getElementById('inputEmail').value;
    let materia = document.getElementById('inputMateria').value;
    let hora = document.getElementById('inputHoras').value;
    let carrera = document.getElementById('inputCarrera').value;

    if (nombre == "") {
        alert('El nombre es requerido');
        return false;
    }

    if (apellido == "") {
        alert('El apellido es requerido');
        return false;
    }

    if (dni == "") {
        alert('El dni es requerido');
        return false;
    }

    if (nacimiento == "") {
        alert('La fecha de nacimiento es requerido');
        return false;
    }

    if (nacionalidad == "") {
        alert('La nacionalidad es requerido');
        return false;
    }

    if (celular == "") {
        alert('El telefono es requerido');
        return false;
    }

    if (email == "") {
        alert('El correo es requerido');
        return false;
    }else if (!email.includes("@")) {
        alert('El correo no es valido');
        return false;
    }

    if (materia == "") {
        alert('La materia es necesaria');
        return false;
    }

    if (hora == "") {
        alert('Las horas semanales son necesarias');
        return false;
    }

    if (carrera == "") {
        alert('La carrera es necesaria');
        return false;
    }

    return true;
}

//LEER
function showData(){

    let listAlumnos;

    if (localStorage.getItem('listAlumnos') == null) {
        listAlumnos = [];
    }else{
        listAlumnos = JSON.parse(localStorage.getItem("listAlumnos"));
    }

    var html = "";

    listAlumnos.forEach(function(element, index){
        html += "<tr>";
        html += "<td>" + element.nombre + "</td>";
        html += "<td>" + element.apellido + "</td>";
        html += "<td>" + element.dni + "</td>";
        html += "<td>" + element.nacimiento + "</td>";
        html += "<td>" + element.nacionalidad + "</td>";
        html += "<td>" + element.celular + "</td>";
        html += "<td>" + element.email + "</td>";
        html += "<td>" + element.materia + "</td>";
        html += "<td>" + element.hora + "</td>";
        html += "<td>" + element.carrera + "</td>";
        html += '<td><button onclick="deleteData('+ index +')" class="btn btn-danger">Eliminar</button> <button onclick="updateData('+ index +')" class="btn btn-warning">Editar</button></td>';
        html += "</tr>";
    });

    document.querySelector('#tableData tbody').innerHTML = html;
}

//CREAR
document.onload = showData();

function AddData(){
    if (validateForm() == true) {
        let nombre = document.getElementById('inputNombre').value;
        let apellido = document.getElementById('inputApellido').value;
        let dni = document.getElementById('inputDni').value;
        let nacimiento = document.getElementById('inputNacimiento').value;
        let nacionalidad = document.getElementById('inputNacionalidad').value;
        let celular = document.getElementById('inputCel').value;
        let email = document.getElementById('inputEmail').value;
        let materia = document.getElementById('inputMateria').value;
        let hora = document.getElementById('inputHoras').value;
        let carrera = document.getElementById('inputCarrera').value;

        var listAlumnos;
        if (localStorage.getItem('listAlumnos') == null) {
            listAlumnos = [];
        }else{
            listAlumnos = JSON.parse(localStorage.getItem("listAlumnos"));
        }

        listAlumnos.push({
            nombre: nombre,
            apellido: apellido,
            dni: dni,
            nacimiento: nacimiento,
            nacionalidad: nacionalidad,
            celular: celular,
            email: email,
            materia: materia,
            hora: hora,
            carrera: carrera,
        });

        localStorage.setItem('listAlumnos', JSON.stringify(listAlumnos));

        showData();

        document.getElementById('inputNombre').value = "";
        document.getElementById('inputApellido').value = "";
        document.getElementById('inputDni').value = "";
        document.getElementById('inputNacimiento').value = "";
        document.getElementById('inputNacionalidad').value = "";
        document.getElementById('inputCel').value = "";
        document.getElementById('inputEmail').value = "";
        document.getElementById('inputMateria').value = "";
        document.getElementById('inputHoras').value = "";
        document.getElementById('inputCarrera').value = "";
    }
}

//ELIMINAR
function deleteData(index){

    var listAlumnos;
    if (localStorage.getItem('listAlumnos') == null) {
        listAlumnos = [];
    }else{
        listAlumnos = JSON.parse(localStorage.getItem("listAlumnos"));
    }

    listAlumnos.splice(index, 1);
    localStorage.setItem('listAlumnos', JSON.stringify(listAlumnos));
    showData();
}

//ACTUALIZAR

function updateData(index){
    document.getElementById("btnAdd").style.display = 'none';
    document.getElementById("btnUpdate",btnAdd).style.display = 'block';

    var listAlumnos;
    if (localStorage.getItem('listAlumnos') == null) {
        listAlumnos = [];
    }else{
        listAlumnos = JSON.parse(localStorage.getItem("listAlumnos"));
    }

    document.getElementById('inputNombre').value = listAlumnos[index].nombre;
    document.getElementById('inputApellido').value = listAlumnos[index].apellido;
    document.getElementById('inputDni').value = listAlumnos[index].dni;
    document.getElementById('inputNacimiento').value = listAlumnos[index].nacimiento;
    document.getElementById('inputNacionalidad').value = listAlumnos[index].nacionalidad;
    document.getElementById('inputCel').value = listAlumnos[index].celular;
    document.getElementById('inputEmail').value = listAlumnos[index].email;
    document.getElementById('inputMateria').value = listAlumnos[index].materia;
    document.getElementById('inputHoras').value = listAlumnos[index].hora;
    document.getElementById('inputCarrera').value = listAlumnos[index].carrera;


    document.querySelector("#btnUpdate").onclick = function(){
        if (validateForm() == true) {
            listAlumnos[index].nombre = document.getElementById('inputNombre').value;
            listAlumnos[index].apellido = document.getElementById('inputApellido').value;
            listAlumnos[index].dni = document.getElementById('inputDni').value;
            listAlumnos[index].nacimiento = document.getElementById('inputNacimiento').value;
            listAlumnos[index].nacionalidad = document.getElementById('inputNacionalidad').value;
            listAlumnos[index].celular = document.getElementById('inputCel').value;
            listAlumnos[index].email = document.getElementById('inputEmail').value;
            listAlumnos[index].materia = document.getElementById('inputMateria').value;
            listAlumnos[index].hora = document.getElementById('inputHoras').value;
            listAlumnos[index].carrera = document.getElementById('inputCarrera').value;

            localStorage.setItem('listAlumnos', JSON.stringify(listAlumnos));
            showData();

            document.getElementById('inputNombre').value = "";
            document.getElementById('inputApellido').value = "";
            document.getElementById('inputDni').value = "";
            document.getElementById('inputNacimiento').value = "";
            document.getElementById('inputNacionalidad').value = "";
            document.getElementById('inputCel').value = "";
            document.getElementById('inputEmail').value = "";
            document.getElementById('inputMateria').value = "";
            document.getElementById('inputHoras').value = "";
            document.getElementById('inputCarrera').value = "";

            document.getElementById("btnAdd").style.display = 'block';
            document.getElementById("btnUpdate",btnAdd).style.display = 'none';
        }
    };
}

//BUSCADOR
const listAlumnos = JSON.parse(localStorage.getItem("listAlumnos"));

const formulario = document.querySelector('#formulario');
const buscar = document.querySelector('#buscar');
const resultado = document.querySelector('#resultado');

const filtrar = () => {
  resultado.innerHTML = '';

  const texto = formulario.value.toLowerCase();

  for (let alumno of listAlumnos) {
    const nombreCompleto = `${alumno.nombre} ${alumno.apellido} ${alumno.dni}`.toLowerCase();
    const materiaCarrera = `${alumno.materia} ${alumno.carrera}`.toLowerCase();
    if (nombreCompleto.indexOf(texto) !== -1) {
      resultado.innerHTML += `<li>Alumno: ${alumno.nombre} ${alumno.apellido} - Inscripto: ${alumno.materia} - Carrera: ${alumno.carrera}</li>`;
    } else if (materiaCarrera.indexOf(texto) !== -1) {
        resultado.innerHTML += `<li>Materia: ${alumno.materia} - Carrera: ${alumno.carrera} - Inscripto: ${alumno.nombre} ${alumno.apellido}</li>`
    }
  }

  if (resultado.innerHTML === '') {
    resultado.innerHTML += '<li>Alumno no inscripto...</li>';
  }
};

buscar.addEventListener('click', filtrar);