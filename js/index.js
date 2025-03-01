// class Persona {
//     constructor(nombreApellido, telefono, email, tipoTorta = []) {
//         this.nombreApellido = nombreApellido;
//         this.telefono = telefono;
//         this.email = email;
//         this.tipoTorta = tipoTorta = [];
//     }
//     pedirDatos() {
//         this.nombreApellido = prompt("Buenas, ingresa tu Nombre y Apellido:");
//         this.telefono = prompt("Ingresa tu número de teléfono:");
//         while (isNaN(this.telefono)) {
//             this.telefono = prompt("Ingresa un número de teléfono válido!");
//         }
//         this.email = prompt("Ingresa tu email:");
//         let cont = 0;
//         let seguir = null;
//         let torta = null;
//         do {
//             if (cont == 0) {
//                 torta = prompt("¿Que tipo de torta deseas? ¿Personalizada o Clásica?:");
//                 this.tipoTorta.push(torta)
//             }
//             else {
//                 torta = prompt("Ingresa el nombre de la otra torta que deseas:");
//                 this.tipoTorta.push(torta)
//             }
//             cont++;
//             seguir = prompt("¿Deseas otra torta SI o NO?")
//         } while (seguir.toLowerCase() == "si")
//     }
//     datos() {
//         console.log("Hola " + this.nombreApellido + ", Bienvenido a Sweet Sugar");
//         console.log("Los datos que ingresaste fueron los siguientes:\n- Nombre y Apellido: " + this.nombreApellido + "\n- Telefono: " + this.telefono + "\n- email: " + this.email + "\n- Tipo de Torta: " + this.tipoTorta.join(", "));
//     }
// }

// class Torta {
//     constructor(pisos, relleno, cantidad) {
//         this.pisos = pisos;
//         this.relleno = relleno;
//         this.cantidad = cantidad;
//     }
//     registroTorta() {
//         this.pisos = parseInt(prompt('Ingrese cantidad de pisos entre 1 y 3'));
//         this.relleno = prompt('Ingrese un relleno. debe ser chocolate o arequipe');
//         this.cantidad = parseInt(prompt('Ingrese cantidad de tortas que desea comprar'));
//         while (isNaN(this.pisos) || this.pisos > 3 || this.pisos < 0) {
//             this.pisos = parseInt(prompt('Ingrese un numero de pisos que sea correcto esta vez (debe ser entre 1 y 3 pisos!).'))
//         }
//         while ((this.relleno != "chocolate") && (this.relleno != "arequipe")) {
//             this.relleno = prompt('Ingrese un relleno válido entre chocolate o arequipe!');
//         }
//         while (isNaN(this.cantidad) || this.cantidad > 3 || this.cantidad < 0) {
//             this.cantidad = parseInt(prompt('Ingrese una cantidad de tortas que sea correcto esta vez (debe ser entre 1 y 3!).'))
//         }
        
//         return console.log('El registro de la torta se ha realizado correctamente')
//     }
//     calcularPrecio() {
//         let precioBase = this.pisos;
//         let resultado = precioBase;
//         let total = resultado;

//         precioBase = this.pisos * 10;
//         if (this.relleno == "arequipe") {
//             resultado = precioBase + 5;
//         } else (this.relleno == "chocolate")
//         resultado = precioBase + 8;
//         this.total = resultado * this.cantidad;
//     }
//     calcularPrecioMasIva() {
//         this.total = this.total * 1.21;
//     }
//     mostrarPrecio() {
//         this.total = this.total * 1.21;
//         console.log("Tu cotización es: " + this.cantidad + " tortas, rellena de " + this.relleno + " con " + this.pisos + " pisos, por un costo de " + this.total + "$");
//     }
// }

// class Adicional {
//     constructor(dulce = [], unidades, precio, total) {
//         this.dulce = dulce = [];        
//         this.unidades = unidades;
//         this.precio = precio;
//         this.total = total;
//     }
//     serviciosAdicionales() {
//         let cont = 0;
//         let seguir = null;
//         let dulceAdic = null;
//         do {
//             if (cont == 0) {
//                 dulceAdic = prompt("¿Ingrese el nombre del servicio de dulce adicional con el que deseas acompañar a tu pedido?: ¿MiniCupcakes, MiniBrownies o MiniPavlovas?");
//                 this.dulce.push(dulceAdic)
//             }
//             else {
//                 dulceAdic = prompt("Ingresa el nombre del otro servicio de dulce que deseas:");
//                 this.dulce.push(dulceAdic)
//             }
//             cont++;
//             seguir = prompt("¿Deseas otra servicio de dulce SI o NO?")
//         } while (seguir.toLowerCase() == "si")
//         this.unidades = parseInt(prompt("Ingresa el número de unidades que deseas:"));
//         while (isNaN(this.unidades)) {
//             this.unidades = prompt("Ingresa un número de unidades válido!");
//         }        
//     }
//     precioDeAdicionales() {
//         this.precio = 2 * this.unidades;
//         this.total = this.precio * 1.21;
//     }
//     mostrarPrecioAdicionales() {
//         this.total = this.precio * 1.21;
//         console.log("Tu cotización de Servicios Adicionales es: " + this.unidades + " mini dulces por un costo de " + this.total + "$");
//     }
// }


// const persona1 = new Persona();
// persona1.pedirDatos();
// persona1.datos();

// const torta1 = new Torta();
// torta1.registroTorta();
// torta1.calcularPrecio();
// torta1.calcularPrecioMasIva();
// torta1.mostrarPrecio();

// const adicionales1 = new Adicional (this.dulce, 2, this.unidades, 0)
// adicionales1.serviciosAdicionales();
// adicionales1.precioDeAdicionales();
// adicionales1.mostrarPrecioAdicionales();

