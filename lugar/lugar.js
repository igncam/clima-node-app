const axios = require('axios');

const getLugarLatLng = async(dirreccion) => {
    let encodeUrl = encodeURI(dirreccion);

    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeUrl}&key=AIzaSyDyJPPlnIMOLp20Ef1LlTong8rYdTnaTXM`)
    if (resp.data.status === 'ZERO_RESULTS') {

        throw new Error(`No hay resultados para la ciudad ${dirreccion}`)
    }


    // console.log(JSON.stringify(resp.data, undefined, 2));

    let location = resp.data.results[0];
    let coors = location.geometry.location;





    return {
        dirreccion: location.formatted_address,
        lat: coors.lat,
        lng: coors.lng
    }
}
module.exports = {
    getLugarLatLng
}