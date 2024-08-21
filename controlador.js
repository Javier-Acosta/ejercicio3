{
    const precioCamion = 22000;
    const precioCamioneta = 12000;
    const precioAutomotor = 4000;
    const precioMotocicleta = 1500;



    let contadorCamion = 0;
    let contadorCamioneta = 0;
    let contadorAutomotor = 0;
    let contadorMotos = 0;
    let contadorErrores = 0;


    let continua = "";
    continua = prompt("Desea Abrir la caja para comenzar su jornada?(SI / NO) ")
    while (continua === 'SI') {

        let tipoVehiculo = Number(prompt("Inrese el Vehiculo a cobrar - 1 (CAMION)- 2 (CAMIONETA)- 3 (AUTOMOVIL) - 4 (MOTOS)"))

        switch (tipoVehiculo) {
            case 1:

                {
                    contadorCamion = contadorCamion + 1;

                    console.log(`cantidad de camionetas ${contadorCamioneta}`);

                    break;
                }
            case 2:
                {
                    contadorCamioneta = contadorCamioneta + 1;
                    console.log(`cantidad de Automotor ${contadorAutomotor}`);
                    break;
                }
            case 3:
                {
                    contadorAutomotor = contadorAutomotor + 1;
                    console.log(`cantidad de Automotor ${contadorCamion}`);
                    break;
                }
            case 4:

                {
                    contadorMotos = contadorMotos + 1;
                    console.log(`cantidad de Motocicletas ${contadorMotos}`);
                    break;
                }

            default:
                {
                    contadorErrores++;
                    console.log(`cantidad de errores ${contadorErrores}`);

                }

        }


        continua = prompt("desea contuar cobrando ? (SI / NO )");
    }
    console.log(" Esto ocurrira al cierre de la caja");


}