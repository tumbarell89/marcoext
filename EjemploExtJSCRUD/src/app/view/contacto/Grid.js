CmpPrincipal = function (opciones) {
    Ext.apply(Ext.data.proxy.Ajax.prototype, {
        actionMethods: {create: "POST", read: "POST", update: "POST", destroy: "POST"}
    });
    var _this = this;
    var p_record = null;
    //***barra de progreso
    this.BarraEstado = function (mensaje) {
        Ext.MessageBox.show({
            msg: mensaje + '.',
            title: 'Por favor espere...',
            width: 300,
            wait: true
        });
    };

    this.btnAdicionar = new Ext.Button({
        iconCls: 'icon-save',
        text: 'Adicionar reserva',
        //disabled: true,
        handler: function () {
             _this.Adicionar();
        }
    });
    this.btnModificar = new Ext.Button({
        iconCls: 'icon-modificar',
        text: 'Modificar reserva',
        //disabled: true,
        handler: function () {
             _this.Modificar(_this.smPrincipal);
        }
    });

    this.btnEliminar = new Ext.Button({
        iconCls: 'icon-delete',
        text: 'Eliminar reserva',
        //disabled: true,
        handler: function () {
             _this.Eliminar(_this.smPrincipal);
        }
    });
    
    this.buscar = new Ext.form.field.Text({
        name: 'nombreapellidos',
        allowBlank: false,        
        emptyText: 'Buscar por Id. reserva'
    });
    
    this.btnBuscar = new Ext.Button({
        iconCls: 'icon-buscar',
        //disabled: true,
        handler: function () {
             _this.Buscar();
        }
    });
    this.btnCerrar = new Ext.Button({
        iconCls: 'icon-cancelar',
        text: 'Cerrar sesi&oacute;n',
        //disabled: true,
        handler: function () {
             _this.cerrarSesion();
        }
    });

    //creando el repositorio de datos  
    this.stPrincipal = new Ext.data.Store({
        //url: 'cargarPrincipal',
        //autoLoad: true,
        fields: [
            {name: 'idreserva'},
            {name: 'nombreapellidos'},
            {name: 'noboleto'},
            {name: 'nopasaporte'},
            {name: 'imagen1'},
            {name: 'imagen2'}
            

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
    this.smPrincipal = Ext.create('Ext.selection.RowModel', {
        //singleSelect: true,
        mode: "SINGLE",
        listeners: {
            select: function (s, i, r) {
                p_record=i;
            },
            deselect: function (s, i, r) {

            }

        }
    });

    this.cmPrincipal = [
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

    this.gpPrincipal = new Ext.grid.Panel({
        region: 'center',
        columnLines: true,
        layout: 'border',
        bodyStyle: 'background:white',
        selModel: _this.smPrincipal,
        plugins: [Ext.create('Ext.grid.plugin.CellEditing', {
            clicksToEdit: 2,
            listeners: {
                beforeedit: function (yo, e) {
                }
            },
        })],
        editable: true,
        store: _this.stPrincipal,
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
        columns: _this.cmPrincipal,
        tbar: ['|',_this.btnAdicionar,'|', _this.btnModificar,'|', _this.btnEliminar,'|',_this.buscar,_this.btnBuscar,'|','->',_this.btnCerrar ],
        bbar: new Ext.PagingToolbar({
            pageSize: 20,
            store: _this.stPrincipal,
            displayInfo: true
        })
    });

    this.pPrincipal = new Ext.Panel({
        layout: 'border',
        region: 'center',
        border: false,
        maximized: true,
        frame: true,
        // width: 1070,
        height: 1500,
        items: [_this.gpPrincipal]
    });
    
    this.Adicionar = function () {
        objFormulario = new CmpFormulario();
        objFormulario.winVistaAdicionar.show();
    }
    this.Modificar = function (accion) {
        console.log(p_record);
        objFormulario = new CmpFormulario();
        objFormulario.winVistaAdicionar.down('form').loadRecord(p_record);
        objFormulario.winVistaAdicionar.show();
    }
    this.Eliminar = function (accion) {
        window.location.reload();
    }
    this.cerrarSesion = function (accion) {
        window.location.reload();
    }

}