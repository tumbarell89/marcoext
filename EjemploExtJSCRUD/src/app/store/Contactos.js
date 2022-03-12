Ext.define('EjemploExtJSCRUD.store.Contactos', {
    extend: 'Ext.data.Store',
    model: 'EjemploExtJSCRUD.model.Contacto',
    autoLoad: true,
    pageSize: 35,
    autoLoad: {start: 0, limit: 35},
 
    proxy: {
        type: 'ajax',
        api: {
            create: 'php/crearContacto.php',
            read: 'php/listaContactos.php',
            update: 'php/actualizarContacto.php',
            destroy: 'php/eliminarContacto.php',
        },
        reader: {
            type: 'json',
            root: 'contactos',
            successProperty: 'success'
        },
        writer: {
            type: 'json',
            writeAllFields: true,
            encode: true,
            root: 'contactos'
        }
    }
});