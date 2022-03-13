Ext.define('EjemploExtJSCRUD.view.contacto.Formulario', {
    extend: 'Ext.window.Window',
    alias : 'widget.contactoform',
 
    requires: ['Ext.form.Panel','Ext.form.field.Text'],
 
    title : 'Datos de la reserva',
    layout: 'fit',
    modal: true,
    autoShow: true,
    width: 430,
     
    iconCls: 'icon-user',
 
    initComponent: function() {
        this.items = [{
            xtype: 'form',
            padding: '5 5 0 5',
            border: false,
            style: 'background-color: #fff;',
                 
            fieldDefaults: {
            	anchor: '100%',
                labelAlign: 'left',                
                combineErrors: true,
                msgTarget: 'side'
            },
            items: [{
            	xtype: 'textfield',
                name: 'id',
                fieldLabel: 'idreserva',
                hidden: true
            },{
                xtype: 'textfield',
                allowBlank: false,
                name: 'nombreapellidos',
                fieldLabel: 'Nom. pasajero'
            },{
                xtype: 'numberfield',
                allowBlank: false,
                name: 'noboleto',
                fieldLabel: 'No. boleto'
            },{
                xtype: 'textfield',
                allowBlank: false,
                name: 'nopasaporte',
                fieldLabel: 'No. Pasaporte'
            },{
                xtype: 'filefield',
                name: 'imagen1',
                fieldLabel: 'Foto 1'
            },{
                xtype: 'filefield',
                name: 'imagen2',
                fieldLabel: 'Foto 2'
            }]
        }];
         
        this.dockedItems = [{
            xtype: 'toolbar',
            dock: 'bottom',
            id: 'buttons',
            ui: 'footer',
            items: ['->', {
                iconCls: 'icon-cancelar',
                text: 'Cancelar',
                scope: this,
                handler: this.close
            },{
                iconCls: 'icon-save',
                text: 'Guardar',
                action: 'crearreserva'
            }]
        }];
 
        this.callParent(arguments);
    }
});