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


    let totalCamion = 0;
    let totalCamioneta = 0;
    let totalAutomotor = 0;
    let totalMotos = 0;
    let totalErrores = 0;


    let continua = "";
    continua = prompt("Desea Abrir la caja para comenzar su jornada?(SI / NO) ")
    while (continua === 'SI') {

        let tipoVehiculo = Number(prompt("Inrese el Vehiculo a cobrar - 1 (CAMION)- 2 (CAMIONETA)- 3 (AUTOMOVIL) - 4 (MOTOS)"))

        switch (tipoVehiculo) {
            case 1:

                {
                    contadorCamioneta = contadorCamioneta + 1;

                    totalCamioneta = totalCamioneta + precioCamioneta;

                    console.log(`cantidad de camionetas ${contadorCamioneta} - ${totalCamioneta}`);

                    break;
                }
            case 2:
                {
                    contadorAutomotor = contadorAutomotor + 1;
                    totalAutomotor = totalAutomotor + precioAutomotor;
                    console.log(`cantidad de Automotor ${contadorAutomotor} - ${totalAutomotor}`);
                    break;
                }
            case 3:
                {
                    contadorCamion = contadorCamion + 1;
                    totalCamion = totalCamion + precioCamion;
                    console.log(`cantidad de Automotor ${contadorCamion} - ${totalCamion}`);
                    break;
                }
            case 4:

                {
                    contadorMotos = contadorMotos + 1;
                    totalMotos = totalMotos + precioMotocicleta;
                    console.log(`cantidad de Motocicletas ${contadorMotos} - ${totalMotos}`);
                    break;
                }

            default:
                {
                    contadorErrores++;
                    console.log(`cantidad de errores ${contadorErrores}`);

                }

        }

        let totalCobrado = totalCamioneta + totalCamion + totalAutomotor + totalMotos;
        console.log(`El total cobrado en la fecha es ${totalCobrado}`);


        continua = prompt("desea contuar cobrando ? (SI / NO )");


        if (contadorAutomotor > contadorCamioneta) {
            console.log(`Pasaron más Autos ${contadorAutomotor} que camioneta ${contadorCamioneta}`);

        } else {
            if (contadorAutomotor < contadorCamioneta) {
                console.log(`Pasaron más Camionetas ${contadorCamioneta} que Automoviles ${contadorAutomotor}`);
            } else {
                console.log("son iguales las cantidades");

            }
        }

    }
    console.log(" Esto ocurrira al cierre de la caja");


}