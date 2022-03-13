Ext.define('EjemploExtJSCRUD.view.contacto.Grid' ,{
    extend: 'Ext.grid.Panel',
    alias: 'widget.contactogrid',
 
    requires: ['Ext.toolbar.Paging'],
 
    iconCls: 'icon-grid',
 
    title: 'Listado de reservas',
    store: 'Contactos',
 
    columns: [{
        header: "Id reserva",
        width: 80,
        //flex:1,
        dataIndex: 'idreserva'
    },{
        header: "Nombre y apellidos",
        width: 170,
        flex:1,
        dataIndex: 'nombreapellidos'
    },{
        header: "No. boleto",
        width: 160,
        flex:1,
        dataIndex: 'noboleto'
    },{
        header: "No. pasaporte",
        width: 170,
        flex:1,
        dataIndex: 'nopasaporte'
    }],
 
    initComponent: function() {
    	this.dockedItems = [{
            xtype: 'toolbar',
            items: [{
                iconCls: 'icon-save',
                text: 'Adicionar reserva',
                action: 'agregar'
            },'|',{
                iconCls: 'icon-modificar',
                text: 'Modificar reserva',
                action: 'modificarreserva'
            },'|',{
                iconCls: 'icon-delete',
                text: 'Eliminar reserva',
                action: 'eliminarreservacion'
            },'|',{
                xtype: 'textfield',
                //allowBlank: false,
                name: 'nombreapellidos',
                //fieldLabel: 'Buscar',
                emptyText: 'Buscar por Id. reserva'
            },{
                iconCls: 'icon-buscar',
                //text: 'Eliminar reserva',
                action: 'buscarreservacion'
            },'->',{
                iconCls: 'icon-cancelar',
                text: 'Cerrar sesi&oacute;n',
                action: 'cerrarsesion'
            }]
        },{
            xtype: 'pagingtoolbar',
            dock: 'bottom',
            store: 'Contactos',
            displayInfo: true,
            displayMsg: 'Mostrando Contactos {0} - {1} de {2}',
            emptyMsg: "Ning\u00FAn contacto encontrado."
        }];
     
        this.callParent(arguments);
    }
});