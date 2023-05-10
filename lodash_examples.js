const _ = require('lodash')

let computadores = [
    { id: 1001, marca: 'MSI', ram: 32, ssd: 1024 },
    { id: 1002, marca: 'Apple', ram: 16, ssd: 512 },
    { id: 1003, marca: 'Clone', ram: 128, ssd: 720 },
    { id: 1004, marca: 'HP', ram: 128, ssd: 720, board: 'Asus' }
]

let resultado = _.filter(computadores, _.iteratee({ marca: 'Apple' }))
console.log(`resultado:`, resultado);

console.log();

resultado = _.filter(computadores, _.iteratee({ marca: 'Apple', ram: 8 }))
console.log(`resultado:`, resultado);

console.log();

resultado = _.filter(computadores, _.iteratee('marca'))
console.log(`resultado:`, resultado);

console.log();

resultado = _.filter(computadores, _.iteratee('board'))
console.log(`resultado:`, resultado);

console.log();

resultado = _.map(computadores, _.iteratee('marca'))
console.log(`resultado:`, resultado);
