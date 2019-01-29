const lugar = require('./lugar/lugar')
const clima = require('./clima/clima')
const argv = require('yargs').options({
    dirreccion: {
        alias: 'd',
        desc: 'Dirreccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv

let getInfo = async(dirreccion) => {
    try {
        let coors = await lugar.getLugarLatLng(dirreccion);
        let temp = await clima.getClima(coors.lat, coors.lng)

        return `El clima en ${coors.dirreccion} es de ${temp} `

    } catch (e) {
        return `No se pudo determinar el clima en ${dirreccion}`
    }
}


// lugar.getLugarLatLng(argv.dirreccion).then(resp => {
//     console.log(resp);
// }).catch(e => console.log(e))

// clima.getClima(-34.6036844, -58.3815591)
//     .then(temp => console.log(temp))
//     .catch(e => console.log(e))

getInfo(argv.dirreccion)
    .then(mensaje => console.log(mensaje))
    .catch(e => console.log(e))