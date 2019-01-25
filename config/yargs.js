
const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
}

const completado = {
    alias: 'c',
    default: true,
    desc: 'Cambia el estado a la tarea (completado - pendiente)'
}

// Manejar comandos personalizados
const argv = require('yargs')
            .command('crear', 'Crea un elemento por hacer', {descripcion})
            .command('actualizar', 'Actualiza el estado completado de una tarea', {
                descripcion,
                completado
            })
            // .command('listar', 'Lista todas las tareas y por estado',completado)
            .command('borrar', 'Borra una tarea',{descripcion})
            .help()
            .argv;

module.exports = {
    argv
}