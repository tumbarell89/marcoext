Ext.define('EjemploExtJSCRUD.view.contacto.Grid' ,{
    extend: 'Ext.grid.Panel',
    alias: 'widget.contactogrid',
 
    requires: ['Ext.toolbar.Paging'],
 
    iconCls: 'icon-grid',
 
    title: 'Contactos',
    store: 'Contactos',
 
    columns: [{
        header: "Nombre",
        width: 170,
        flex:1,
        dataIndex: 'name'
    },{
        header: "Telefono",
        width: 160,
        flex:1,
        dataIndex: 'phone'
    },{
        header: "Email",
        width: 170,
        flex:1,
        dataIndex: 'email'
    }],
 
    initComponent: function() {
    	this.dockedItems = [{
            xtype: 'toolbar',
            items: [{
                iconCls: 'icon-save',
                text: 'Agregar',
                action: 'agregar'
            },{
                iconCls: 'icon-delete',
                text: 'Eliminar',
                action: 'eliminar'
            }]
        },{
            xtype: 'pagingtoolbar',
            dock: 'top',
            store: 'Contactos',
            displayInfo: true,
            displayMsg: 'Mostrando Contactos {0} - {1} de {2}',
            emptyMsg: "Ning\u00FAn contacto encontrado."
        }];
     
        this.callParent(arguments);
    }
});