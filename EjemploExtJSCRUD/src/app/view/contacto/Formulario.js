CmpFormulario = function (opciones) {
    Ext.apply(Ext.data.proxy.Ajax.prototype, {
        actionMethods: {create: "POST", read: "POST", update: "POST", destroy: "POST"}
    });
    var _this = this;
    //***barra de progreso
    this.nombreapellidos = new Ext.form.field.Text({
        disabled: false,
        fieldLabel: 'Nom. pasajero',
        allowBlank: false,
    });
    
    this.noboleto = new Ext.form.field.Number({
        disabled: false,
        fieldLabel: 'No. boleto',
        allowBlank: false,
    });

    this.nopasaporte = new Ext.form.field.Text({
        disabled: false,
        fieldLabel: 'No. Pasaporte',
        allowBlank: false,
    });
    
    this.imagen1 = new Ext.form.field.File({
        disabled: false,
        fieldLabel: 'Foto 1',
        allowBlank: false,
    });
    
    this.imagen2 = new Ext.form.field.File({
        disabled: false,
        fieldLabel: 'Foto 2',
        allowBlank: false,
    });
    
    this.btnCancelar = new Ext.Button({
        iconCls: 'icon-cancelar',
        text: 'Cancelar',
        handler: function () {
             //_this.Modificar(_this.smItinerario);
        }
    });
    this.btnCancelar22 = new Ext.Button({
        iconCls: 'icon-cancelar',
        text: 'Cancelar',
        handler: function () {
             //_this.Modificar(_this.smItinerario);
        }
    });

    this.btnGuardar = new Ext.Button({
        iconCls: 'icon-save',
        text: 'Guardar',
        handler: function () {
             //_this.Eliminar(_this.smItinerario);
        }
    });
    
    this.stItinerario = new Ext.data.Store({
        //url: 'cargarItinerario',
        //autoLoad: true,
        fields: [
            {name: 'idreserva'},
            {name: 'nombreapellidos'},
            {name: 'noboleto'},
            {name: 'nopasaporte'}

        ],
        proxy: {
            type: 'ajax',
            url: 'php/listaContactos.php',
            //method:'POST',
            reader: {
                totalProperty: 'total',
                root: "reserva"
            }
        },
        listeners: {
            beforeload: function (st) {
            },
            load: function () {
                //Ext.MessageBox.hide();
                // _this.cargarDatosGrid(_this.stCapacidaProd);
            }
        }
    });
    this.smItinerario = Ext.create('Ext.selection.RowModel', {
        //singleSelect: true,
        mode: "SINGLE",
        listeners: {
            select: function (s, i, r) {
                if (opciones.editableinversion == 1)
                    _this.btnEliminarItinerario.enable();
            },
            deselect: function (s, i, r) {
                _this.btnEliminarItinerario.disable();

            }

        }
    });

    this.cmItinerario = [
        {
            text: 'No. Reserva',
            minWidth: 250,
            flex: 1,
            dataIndex: 'idreserva',
            align: 'left',
        },
        {
            text: 'Nombre y Apellidos',
            minWidth: 80,
            flex: 1,
            resizable: false,
            dataIndex: 'nombreapellidos',
            align: 'left',
        },
        {
            text: 'No. boleto',
            minWidth: 80,
            flex: 1,
            resizable: false,
            dataIndex: 'noboleto',
            align: 'left',
        },
        {
            text: 'No. pasaporte',
            minWidth: 80,
            flex: 1,
            resizable: false,
            dataIndex: 'nopasaporte',
            align: 'left',
        },

    ];

    this.gpItinerario = new Ext.grid.Panel({
        //region: 'center',
        columnLines: true,
        layout: 'fit',
        bodyStyle: 'background:white',
        height: 200,
        selModel: _this.smItinerario,
        plugins: [Ext.create('Ext.grid.plugin.CellEditing', {
            clicksToEdit: 2,
            listeners: {
                beforeedit: function (yo, e) {
                }
            },
        })],
        editable: true,
        store: _this.stItinerario,
        listeners: {
            click: function () {
            },
            focus: function () {
            },
            edit: function (obj) {

            },
            beforeedit: function (obj) {


            }
        },
        loadMask: {
            msg: 'Cargando...'
        },
        viewConfig: {
            getRowClass: function (record, index) {


            }
        },
        columns: _this.cmItinerario,
        tbar: [_this.btnCancelar22]
    });
    
    this.pDatos = new Ext.form.Panel({
        //frame: true,
//        width: 1000,
        //width: window.innerWidth-325,
        modal: true,
        layout: 'fit',
        fileUpload: true,
        border: false,
        items: [{
                xtype: 'form',
                padding: '5 5 0 5',
                style: 'background-color: #fff;',
                layout: 'column',
                border: false,
                fieldDefaults: {
                        anchor: '100%',
                        labelAlign: 'left',                
                        combineErrors: true,
                        msgTarget: 'side'
                    },
                items: [{
                        columnWidth: 1,
                        layout: 'form',
                        border: false,
                        items: _this.nombreapellidos
                    }, {
                        columnWidth: 0.5,
                        layout: 'form',
                        border: false,
                        items: _this.noboleto
                    }, {
                        columnWidth: 0.5,
                        layout: 'form',
                        border: false,
                        items: _this.nopasaporte
                    }, {
                        columnWidth: 1,
                        layout: 'form',
                        border: false,
                        items: _this.imagen1
                    }
                    , {
                        columnWidth: 1,
                        layout: 'form',
                        border: false,
                        items: _this.imagen2
                    }
                    , {
                        columnWidth: 1,
                        layout: 'form',
                        border: false,
                        padding: '5 5 0 5',
                        items: _this.gpItinerario
                    }
                ]

            }]
    });
    
    this.winVistaAdicionar = new Ext.Window({
        title: 'Adicionar reservacion',
        width: '60%',
        height: 400,
        layout: 'fit',
        closeAction: 'hide',
        style: 'background-color: #fff;',        
        resizable: false,
        modal: true,
        frame: true,
        items: [_this.pDatos],
        buttons: [_this.btnCancelar, _this.btnGuardar]

    });
    //winVistaActualizar.show();


}
//
//
//
////Ext.define('EjemploExtJSCRUD.view.contacto.Formulario', {
//    extend: 'Ext.window.Window',
//    alias : 'widget.contactoform',
// 
//    requires: ['Ext.form.Panel','Ext.form.field.Text'],
// 
//    title : 'Datos de la reserva',
//    layout: 'fit',
//    modal: true,
//    autoShow: true,
//    width: 430,
//    
//    iconCls: 'icon-user',
// 
//    initComponent: function() {
//        this.items = [{
//            xtype: 'form',
//            padding: '5 5 0 5',
//            border: false,
//            style: 'background-color: #fff;',
//            fileUpload: true,    
//            fieldDefaults: {
//            	anchor: '100%',
//                labelAlign: 'left',                
//                combineErrors: true,
//                msgTarget: 'side'
//            },
//            items: [{
//            	xtype: 'textfield',
//                name: 'id',
//                fieldLabel: 'idreserva',
//                hidden: true
//            },{
//                xtype: 'textfield',
//                allowBlank: false,
//                name: 'nombreapellidos',
//                fieldLabel: 'Nom. pasajero'
//            },{
//                xtype: 'numberfield',
//                allowBlank: false,
//                name: 'noboleto',
//                fieldLabel: 'No. boleto'
//            },{
//                xtype: 'textfield',
//                allowBlank: false,
//                name: 'nopasaporte',
//                fieldLabel: 'No. Pasaporte'
//            },{
//                xtype: 'fileuploadfield',
//                name: 'imagen1',
//                fieldLabel: 'Foto 1'
//            },{
//                xtype: 'fileuploadfield',
//                name: 'imagen2',
//                fieldLabel: 'Foto 2'
//            }]
//        }];
//                        
//        this.dockedItems = [{
//            xtype: 'toolbar',
//            dock: 'bottom',
//            id: 'buttons',
//            ui: 'footer',
//            items: ['->', {
//                iconCls: 'icon-cancelar',
//                text: 'Cancelar',
//                scope: this,
//                handler: this.close
//            },{
//                iconCls: 'icon-save',
//                text: 'Guardar',
//                action: 'crearreserva'
//            }]
//        }];
// 
//        this.callParent(arguments);
//    }
//});