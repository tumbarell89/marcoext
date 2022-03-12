Ext.define('EjemploExtJSCRUD.view.contacto.Formulario', {
    extend: 'Ext.window.Window',
    alias : 'widget.contactoform',
 
    requires: ['Ext.form.Panel','Ext.form.field.Text'],
 
    title : 'Editar/Crear Contacto',
    layout: 'fit',
    modal: true,
    autoShow: true,
    width: 280,
     
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
                allowBlank: false,
                combineErrors: true,
                msgTarget: 'side'
            },
            items: [{
            	xtype: 'textfield',
                name: 'id',
                fieldLabel: 'id',
                hidden: true
            },{
                xtype: 'textfield',
                name: 'name',
                fieldLabel: 'Nombre'
            },{
                xtype: 'textfield',
                name: 'phone',
                fieldLabel: 'Tel\u00E9fono'
            },{
                xtype: 'textfield',
                name: 'email',
                fieldLabel: 'Email'
            }]
        }];
         
        this.dockedItems = [{
            xtype: 'toolbar',
            dock: 'bottom',
            id: 'buttons',
            ui: 'footer',
            items: ['->', {
                iconCls: 'icon-save',
                text: 'Guardar',
                action: 'guardar'
            },{
                iconCls: 'icon-reset',
                text: 'Cancelar',
                scope: this,
                handler: this.close
            }]
        }];
 
        this.callParent(arguments);
    }
});