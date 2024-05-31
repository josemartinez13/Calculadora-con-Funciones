function operacion(op) {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var resultado;
    
    switch (op) {
        case 's':
            resultado = num1 + num2;
            break;
        case 'r':
            resultado = num1 - num2;
            break;
        case 'm':
            resultado = num1 * num2;
            break;
        case 'd':
            if (num2 === 0) {
                alert("No se puede dividir por cero");
                return;
            }
            resultado = num1 / num2;
            break;
        default:
            alert("Operación no válida");
            return;
    }
    
    document.getElementById('resultado').value = resultado;
}
