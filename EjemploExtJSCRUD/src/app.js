Ext.Loader.setConfig({
	enabled : true
});
 
 
Ext.onReady(function(){
    var win;
    objPrincipal = new CmpPrincipal();
    
    if (!win) {
        win = Ext.create('widget.window', {
            xtype: 'login-form',

            title: 'Autenticaci&oacute;n',
            frame: true,
            width: 320,
            bodyPadding: 10,
            closable: false,
            defaultType: 'textfield',
            defaults: {
                anchor: '100%'
            },

            items: [
                {
                    allowBlank: false,
                    fieldLabel: 'Usuario',
                    name: 'user',
                    emptyText: 'user id'
                },
                {
                    allowBlank: false,
                    fieldLabel: 'Contrase&ntilde;a',
                    name: 'pass',
                    emptyText: 'password',
                    inputType: 'password'
                }
            ],

            buttons: [
                {
                    text: 'Aceptar',
                    iconCls: 'icon-user',
                    handler: function () {

							win.close();

                    var win2 = new Ext.Window({
                        title: 'Lista de reservaciones' ,
                        maximized: true,
                        closable:false,
                        //html: "<iframe id='8600000000000000002' src='/planificacion/inversiones/index.php/gestplaninversiones/gestcapfondos' style='width:100%;height:100%;border:none;'></iframe>'",
                        items:[objPrincipal.pPrincipal],
                        buttons: [{
                                    //icon: perfil.dirImg + 'cancelar.png',
                                    iconCls: 'btn',
                                    text: 'Cerrar',
                                    tooltip: 'Cerrar la ventana',
                                    handler: function() {
                                        win2.destroy();
                                        win.show();
                //                        _this.objEquipo.CmbComponentes.clearValue();
                //                        _this.objEquipo.CmbPlan.clearValue();
                                    }
                     }],
                });
                    win2.show();
                    objPrincipal.stPrincipal.reload();
                    }
                }
            ]
        });
    }
    win.show();

    /*
     //button.dom.disabled = true;
     if (win.isVisible()) {
     win.hide(this, function() {
     //button.dom.disabled = false;
     });
     } else {
     win.show(this, function() {
     //button.dom.disabled = false;
     });
     }*/

});
/*
 Ext.create('widget.window',{
 //extend: 'Ext.form.Panel',
 xtype: 'login-form',
 
 
 title: 'Login',
 frame:true,
 width: 320,
 bodyPadding: 10,
 
 defaultType: 'textfield',
 defaults: {
 anchor: '100%'
 },
 
 items: [
 {
 allowBlank: false,
 fieldLabel: 'User ID',
 name: 'user',
 emptyText: 'user id'
 },
 {
 allowBlank: false,
 fieldLabel: 'Password',
 name: 'pass',
 emptyText: 'password',
 inputType: 'password'
 },
 {
 xtype:'checkbox',
 fieldLabel: 'Remember me',
 name: 'remember'
 }
 ],
 
 buttons: [
 { text:'Register' },
 { text:'Login' }
 ]
 });
 
 
 */


/*Ext.application({
 name: 'EjemploExtJSCRUD',
 
 controllers: ['Contactos'],
 
 autoCreateViewport: true
 });*/