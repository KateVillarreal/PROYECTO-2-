
/* conectando con el segundo html */
var app = angular.module('myApp', []);
app.controller('myCtrl', function ($scope, $http) {
    $scope.irAPagina2 = function () {
        $http.get('pagina2.html').then(function (response) {
            var htmlContent = response.data;
            var htmlDiv = document.getElementById('myContent');
            htmlDiv.innerHTML = htmlContent;
        });
    };
});

// archivo main.js
function index() {
    window.location.href = "index.html";
}


// caja de texto
function cifrar() {
    const textoSecreto = document.getElementById('textoSecreto').value;
    const claveSecreta = document.getElementById('claveSecreta').value;
    let resultado = '';
    for (let i = 0; i < textoSecreto.length; i++) {
        const ascii = textoSecreto.charCodeAt(i);
        const cifrado = String.fromCharCode((ascii + Number(claveSecreta)) % 256);
        resultado += cifrado;
    }
    document.getElementById('resultado').value = resultado;
}

function descifrar() {
    const textoCifrado = document.getElementById('textoSecreto').value;
    const claveSecreta = document.getElementById('claveSecreta').value;
    let resultado = '';
    for (let i = 0; i < textoCifrado.length; i++) {
        const ascii = textoCifrado.charCodeAt(i);
        const descifrado = String.fromCharCode((ascii - Number(claveSecreta) + 256) % 256);
        resultado += descifrado;
    }
    document.getElementById('resultado').value = resultado;
}

