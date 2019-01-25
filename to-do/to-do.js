
const fs = require('fs');

let listadoPorHacer = [];

const guardarDB = () => {

    let data = JSON.stringify(listadoPorHacer);

    // const datos = new Uint8Array(Buffer.from(data));

    fs.writeFile('db/data.json', data, (err) => {
        
        if (err) throw new Error('No se pudo grabar', err);
             
    })
}

const cargarDB = () => {

    try {
        listadoPorHacer = require('../db/data.json');
        
    } catch (error) {
        listadoPorHacer = [];        
    }
}

const crear = (descripcion) => {

    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    }

    listadoPorHacer.push(porHacer);

    guardarDB();

    return listadoPorHacer;
}

const getListado = () => {
    cargarDB();

    // let index = listadoPorHacer.findIndex( tarea => {
        
    //     return tarea.completado === completado;

    // });

    // if ( index >= 0) {
    //     listadoPorHacer[index].completado = completado;
    //     guardarDB();
    //     return true;
    // } else {
    //     return false;
    // }


    return listadoPorHacer;
}

const actualizar = (descripcion, completado) => {

    cargarDB();

    let index = listadoPorHacer.findIndex( tarea => {
        
        return tarea.descripcion === descripcion;

    });

    if ( index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }

}

const borrar = (descripcion) => {

    cargarDB();

    let index = listadoPorHacer.findIndex( tarea => {
        return tarea.descripcion === descripcion;
    });

    if ( index >= 0) {
        listadoPorHacer.splice(index, 1);
        guardarDB();
        return true;
    } else {
        return false;
    }


}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}
