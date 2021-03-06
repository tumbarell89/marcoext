Ext.define('EjemploExtJSCRUD.controller.Contactos', {
    extend: 'Ext.app.Controller',
    stores: ['Contactos'],
    models: ['Contacto'],
    views: ['contacto.Formulario', 'contacto.Grid'],

    refs: [{
            ref: 'contactoPanel',
            selector: 'panel'
        },{
            ref: 'contactoGrid',
            selector: 'grid'
        }
    ],

    init: function() {
        this.control({
            'contactogrid dataview': {
                itemdblclick: this.editarContacto
            },
            'contactogrid button[action=agregar]': {
            	click: this.editarContacto
            },
            'contactogrid button[action=eliminar]': {
                click: this.eliminarContacto
            },
            'contactogrid button[action=eliminarreservacion]': {
                click: this.eliminarReservacion
            },
            'contactoform button[action=guardar]': {
                click: this.actualizarContacto
            },
            'contactoform button[action=crearreserva]': {                
                click: this.crearReserva
            },
            'contactogrid button[action=cerrarsesion]': {                
                click: this.cerrarSesion
            }
        });
    },

    editarContacto: function(p_grid, p_record) {
        var v_editar = Ext.create('EjemploExtJSCRUD.view.contacto.Formulario').show();
        
        // Si se edita un record.
        if(p_record.stores != null){
        	v_editar.down('form').loadRecord(p_record);
        }
    },

    crearReserva: function(p_button) {
        var v_win = p_button.up('window');
        var v_form   = v_win.down('form');
        var v_record = v_form.getRecord();
        var v_values = v_form.getValues();
        
        var v_nuevo = false;
        
		if (v_values.id > 0){
			v_record.set(v_values);
		} else{
			v_record = Ext.create('EjemploExtJSCRUD.model.Reserva');
			v_record.set(v_values);
			this.getContactosStore().add(v_record);
			v_nuevo = true;
		}
        
		v_win.close();
        this.getContactosStore().sync();
        this.getContactosStore().reload();

        if (v_nuevo){ 
        	// Cargar de nuevo el store.
            this.getContactosStore().load();
        }
    },
    
    actualizarContacto: function(p_button) {
        var v_win = p_button.up('window');
        var v_form   = v_win.down('form');
        var v_record = v_form.getRecord();
        var v_values = v_form.getValues();
        
        var v_nuevo = false;
        
		if (v_values.id > 0){
			v_record.set(v_values);
		} else{
			v_record = Ext.create('EjemploExtJSCRUD.model.Contacto');
			v_record.set(v_values);
			this.getContactosStore().add(v_record);
			v_nuevo = true;
		}
        
		v_win.close();
        this.getContactosStore().sync();

        if (v_nuevo){ 
        	// Cargar de nuevo el store.
            this.getContactosStore().load();
        }
    },
    
    eliminarReservacion: function(p_button) {
    	var v_grid = this.getContactoGrid();
    	var v_record = v_grid.getSelectionModel().getSelection();
        var v_store = this.getContactosStore();

        v_store.remove(v_record);
	    this.getContactosStore().sync();
        this.getContactosStore().reload();

        // Cargar de nuevo el store.
        this.getContactosStore().load();
    },
    
    cerrarSesion: function(p_button) {
    	window.location.reload();
    },
    
    eliminarContacto: function(p_button) {
    	var v_grid = this.getContactoGrid();
    	var v_record = v_grid.getSelectionModel().getSelection();
        var v_store = this.getContactosStore();

        v_store.remove(v_record);
	    this.getContactosStore().sync();
        this.getContactosStore().reload();

        // Cargar de nuevo el store.
        this.getContactosStore().load();
    }
});