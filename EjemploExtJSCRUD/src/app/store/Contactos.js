Ext.define('EjemploExtJSCRUD.store.Contactos', {
    extend: 'Ext.data.Store',
    model: 'EjemploExtJSCRUD.model.Reserva',
    autoLoad: true,
    pageSize: 35,
    autoLoad: {start: 0, limit: 35},
    
    proxy: {
        type: 'ajax',
        api: {
            create: 'php/crearReserva.php',
            read: 'php/listaContactos.php',
            update: 'php/actualizarContacto.php',
            destroy: 'php/eliminarReservacion.php',
        },
        reader: {
            type: 'json',
            root: 'reserva',
            successProperty: 'success'
        },
        writer: {
            type: 'json',
            writeAllFields: true,
            encode: true,
            root: 'reserva'
        }
    }
});