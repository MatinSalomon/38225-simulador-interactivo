alert ("Bienvenido. Esta servicio calculara pagos en cuentas sobre en monto");
/**
 * Esta funcion calcula el valor de cada cuota dependiendo del monto a pagar y de las cantidad de cuotas a hacer 
 * @monto almacena el total a pagar 
 * @cantCuotas la cantidad de cuotas a hacer
 * @resultado cuanto seria lo que deberia pagar por cuota   
 */
function calcularCuotas(){
    let monto = parseFloat(prompt("ingrese el monto: "))
    let cantCuotas = parseInt(prompt("Ingrese las cantidad de cuotas: "))
    let resultado;
    resultado = monto / cantCuotas;
    alert(parseInt(resultado))
    }

calcularCuotas();