const opts = {
    city: {
        alias: 'd',
        desc: 'Nombre de la ciudad para obtener el clima',
        demand: true
    }
}

const argv = require('yargs').options(opts).argv;

module.exports = {
    argv
}