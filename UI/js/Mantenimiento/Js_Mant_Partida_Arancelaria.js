$(document).ready(function () {

  

    //var ID = ($.session.get('SESSION_ID'));
    //var USUARIO = ($.session.get('SESSION_USUARIO'));
    //var NOMBRES = ($.session.get('SESSION_NOMBRES'));
    //var PERFIL = ($.session.get('SESSION_PERFIL'));
    //var APELLIDOS = ($.session.get('SESSION_APELLIDOS'));
    //var CORREO = ($.session.get('SESSION_CORREO'));


    //if (typeof NOMBRES === "undefined") {
    //    location.href = '../Login.aspx';

    //}

    //if (USUARIO != 'admin') {
    //    location.href = 'Login.aspx';

    //}


    //OBTENER_COMBO_EMPRESA();
    //$('#txtfecnac').datetimepicker({
    //    //format: 'YYYY-MM-DD HH:mm'
    //    format: 'DD/MM/YYYY'
    //});
    //$('#txtfecnac').data("DateTimePicker").show();
    OBTENER_COMBO_TONO();
    OBTENER_COMBO_PARTIDA_ARTICULO();
    $('#tab2').addClass('disabled'); // Opcional: Agregar una clase CSS para indicar que está desactivado
    $('#tab2 a').prop('disabled', true);
    $("#btnnuevo").css('cursor', 'pointer');
    $("#btnnuevo2").css('cursor', 'pointer');
    
    function BUSCAR_PARTIDA_ARANCELARIA() {

        var NROPARTIDA = $('#txtnropartida_buscar').val();
        var DESCRIPCION = $('#txtdescripcion_buscar').val();
        var ESTADO = $('#ddlestado_buscar').val();

        var table = $('#Tabla_Partida_Arancelaria').DataTable();
        table.clear().draw();

        if (NROPARTIDA == '') { NROPARTIDA = 0; }



        var ajax_data = { "NROPARTIDA": NROPARTIDA, "DESCRIPCION": DESCRIPCION, "ESTADO": ESTADO };
        $.ajax({
            type: "POST",
            url: '../ServiciosWeb/SW_Partida_Arancelaria.asmx/Buscar_Partida_Arancelaria',
            data: JSON.stringify(ajax_data),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: true,
            beforeSend: function () {
                $('body').addClass('loading');
            },
            success: function (respuesta) {
                var datos = (typeof respuesta.d) == 'string' ?
                    eval('(' + respuesta.d + ')') :
                    respuesta.d;

                for (var i = 0; i < datos.length; i++) {


                    $('#Tabla_Partida_Arancelaria').dataTable({
                        columnDefs: [
                            { className: 'text-center', targets: [0, 2,3,4] },
                            { className: 'text-left', targets: [1] }
                        ],
                        destroy: true

                    }).fnAddData([
                        
                        "<a class='link' style='font-weight: bold;text-decoration:underline;color: #1ab394;' title='Ir a Conexión'>"+ datos[i].NROPAR +"</a>",
                        datos[i].DESPAR,
                        datos[i].STAPAR,
                    
                        "<img src='../img/editar_2.png' class='editar' style='width:20px;height:20px' />",
                        "<img src='../img/ELIMINAR.png' class='eliminar' style='width:20px;height:20px'/>"
                    ]);

                }
                $('body').removeClass('loading'); //Removemos la clase loading
                $("#Tabla_Partida_Arancelaria").show();
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                var error = eval("(" + XMLHttpRequest.responseText + ")");
                // alert(error.Message);
                swal("Error!", "Por favor, prueba los pasos siguientes: <b></br>1.      Cierre todas sus sesiones y vuelva a ingresar al sistema. </br>2.      Compruebe su conexión a Internet.</br> 3.      Reinicie su equipo.</br> 4.      En caso no resuelva la situación, envíe un correo a sistemas <b/> ", "error");
            }
        });

      
    }
    function BUSCAR_PARTIDA_ARANCELARIA_CONEXION() {

        var NROPARTIDA = $('#txtnropartida_conexion').val();
   
        var table = $('#Tabla_Partida_Arancelaria_Conexion').DataTable();
        table.clear().draw();

        if (NROPARTIDA == '') { NROPARTIDA = 0; }



        var ajax_data = { "NROPARTIDA": NROPARTIDA };
        $.ajax({
            type: "POST",
            url: '../ServiciosWeb/SW_Partida_Arancelaria.asmx/Buscar_Partida_Arancelaria_Conexion',
            data: JSON.stringify(ajax_data),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: true,
            beforeSend: function () {
                $('body').addClass('loading');
            },
            success: function (respuesta) {
                var datos = (typeof respuesta.d) == 'string' ?
                    eval('(' + respuesta.d + ')') :
                    respuesta.d;

                for (var i = 0; i < datos.length; i++) {


                    $('#Tabla_Partida_Arancelaria_Conexion').dataTable({
                        columnDefs: [
                            { targets: [0,4,6], visible: false },
                            { className: 'text-center', targets: [0, 1, 2, 3, 4,5,6,7,8,9,10] }

                        ],
                        destroy: true

                    }).fnAddData([

                        datos[i].CODCIA,
                        datos[i].DESCRIPCIONCOMPAÑIA,
                        datos[i].CODARTICULO,
                        datos[i].DESCRIPCIONARTICULO,
                        datos[i].CODIGOTIPOARTICULO,
                        datos[i].DESCRIPCIONTIPOARTICULO,
                        datos[i].CODIGOTONO, 
                        datos[i].DESCRIPCIONTONO,
                        datos[i].NROPAR,
                        datos[i].ESTADO,

                       /* "<img src='../img/editar_2.png' class='editar_conexion' style='width:20px;height:20px' />",*/
                        "<img src='../img/ELIMINAR.png' class='eliminar_conexion' style='width:20px;height:20px' />",
                       
                    ]);

                }
                $('body').removeClass('loading'); //Removemos la clase loading
                $("#Tabla_Partida_Arancelaria_Conexion").show();
                $('#Tabla_Partida_Arancelaria_Conexion').removeAttr('style');
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                var error = eval("(" + XMLHttpRequest.responseText + ")");
                // alert(error.Message);
                swal("Error!", "Por favor, prueba los pasos siguientes: <b></br>1.      Cierre todas sus sesiones y vuelva a ingresar al sistema. </br>2.      Compruebe su conexión a Internet.</br> 3.      Reinicie su equipo.</br> 4.      En caso no resuelva la situación, envíe un correo a sistemas <b/> ", "error");
            }
        });


    }
    function BUSCAR_PARTIDA_ARANCELARIA_ARTICULO() {

        var NRO_ARTICULO = $('#ddlarticulo_buscar').val();

        var table = $('#Tabla_Partida_Arancelaria_Articulo').DataTable();
        table.clear().draw();

        if (NRO_ARTICULO == '') { NRO_ARTICULO = 0; }



        var ajax_data = { "NRO_ARTICULO": NRO_ARTICULO };
        $.ajax({
            type: "POST",
            url: '../ServiciosWeb/SW_Partida_Arancelaria.asmx/Buscar_Partida_Arancelaria_Articulo',
            data: JSON.stringify(ajax_data),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: true,
            beforeSend: function () {
                $('body').addClass('loading');
            },
            success: function (respuesta) {
                var datos = (typeof respuesta.d) == 'string' ?
                    eval('(' + respuesta.d + ')') :
                    respuesta.d;

                for (var i = 0; i < datos.length; i++) {


                    $('#Tabla_Partida_Arancelaria_Articulo').dataTable({
                        columnDefs: [
                          
                            { className: 'text-center', targets: [0, 1] }

                        ],
                        destroy: true

                    }).fnAddData([
                        "<a class='link_articulo'   style='font-weight: bold;text-decoration:underline;color: #1ab394;' title='Ir a Conexión'>" + datos[i].NROPAR + "</a>",
                  
                        datos[i].DESPAR
                  

                    ]);

                }
                $('body').removeClass('loading'); //Removemos la clase loading
                $("#Tabla_Partida_Arancelaria_Articulo").show();
                $('#Tabla_Partida_Arancelaria_Articulo').removeAttr('style');
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                var error = eval("(" + XMLHttpRequest.responseText + ")");
                // alert(error.Message);
                swal("Error!", "Por favor, prueba los pasos siguientes: <b></br>1.      Cierre todas sus sesiones y vuelva a ingresar al sistema. </br>2.      Compruebe su conexión a Internet.</br> 3.      Reinicie su equipo.</br> 4.      En caso no resuelva la situación, envíe un correo a sistemas <b/> ", "error");
            }
        });


    }

    //NUEVO
    $("#btnnuevo").click(function (e) {
        $("#Titulo_Panel").text('Nueva Partida Arancelaria');
        $("#txtpartida").val('');
        $("#txtdescripcion").val('');
        $("#txtpartida").prop("disabled", false);
        $("#ddlestado").val(0);


        $("#div_estado_buscar").hide();
        $("#btnGuardar").show();
        $("#btnActualizar").hide();
        $('#modal_nuevo').modal().addClass('animated bounceIn');

        /*Eliminar las clases de error*/
        $("#txtpartida").removeClass('error_campo_vacio');
        $("#txtdescripcion").removeClass('error_campo_vacio');
       



    });
    $("#btnnuevo2").click(function (e) {
       /* $('#example1').prop('checked', false);*/
        $("#ddlcompañia").removeClass('error_campo_vacio');
        $("#ddlarticulo").removeClass('error_campo_vacio');
        $("#ddltono").removeClass('error_campo_vacio');
        
        $(".select2-container").removeClass('error_campo_vacio');
        $("#Titulo_Panel2").text('Nueva Conexion Partida Arancelaria');
        $('#txtnropartida_conexion_nuevo').val($('#txtnropartida_conexion').val());
        $('#ddltipo_articulo').empty().append('<option value=0> << SELECCIONAR >> </option>');
        $('#ddltono').empty().append('<option value=0> << SELECCIONAR >> </option>');
        $('#ddlarticulo').empty();
        $('#ddlarticulo').val(null).trigger('change');
        $('#modal_nuevo2').modal().addClass('animated lightSpeedIn'); 
        OBTENER_COMBO_COMPANIA();
        OBTENER_COMBO_TONO();
        OBTENER_COMBO_ARTICULO();
       
       
   
        
       
    });
    /************/
    $("#btnbuscar").click(function (e) {

        BUSCAR_PARTIDA_ARANCELARIA();

    });
    
    $("#btnbuscar_partida_articulo").click(function (e) {

        BUSCAR_PARTIDA_ARANCELARIA_ARTICULO();

    });
    $(document).on('click', '.eliminar', function (e) {
        var NROPARTIDA, DESCRIPCION;
        NROPARTIDA = $(this).parents("tr").find("td").find("a").eq(0).html();
        DESCRIPCION = $(this).parents("tr").find("td").eq(3).html();

        var ajax_data_val = { "PARTIDA": NROPARTIDA };

        $.ajax({
            type: "POST",
            url: '../ServiciosWeb/SW_Partida_Arancelaria.asmx/Validar_Eliminar_Partida',
            data: JSON.stringify(ajax_data_val),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: true,
            beforeSend: function () {
                $('body').addClass('loading');
            },
            success: function (respuesta) {
                var cantidad = (typeof respuesta.d) == 'string' ?
                    eval('(' + respuesta.d + ')') :
                    respuesta.d;

                if (cantidad > 0) {
                    toastr.warning('No se puede eliminar la Partida, tiene conexiones activas.!', "Validación del Sistema.. !");

                }
                else {


                    Swal.fire({
                        title: 'Eliminar Registro?',
                        text: "¿Estás seguro de eliminar la Partida Arancelaria :  " + NROPARTIDA + " ?",
                        type: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#1ab394',
                        cancelButtonColor: '#6c757d',
                        confirmButtonText: 'Si, Eliminar !'
                    }).then((result) => {
                        if (result.value) {


                            var ajax_data = {
                                "NROPARTIDA": NROPARTIDA

                            };

                            $.ajax({
                                type: "POST",
                                url: '../ServiciosWeb/SW_Partida_Arancelaria.asmx/Eliminar_Partida_Arancelaria',
                                data: JSON.stringify(ajax_data),
                                contentType: "application/json; charset=utf-8",
                                dataType: "json",
                                async: true,
                                beforeSend: function () {
                                    $('body').addClass('loading');
                                },
                                success: function (respuesta) {
                                    var num = respuesta.d;
                                    if (num > 0) {

                                        Swal.fire('Eliminado !', 'El Registro ha sido eliminado.', 'success');
                                    }
                                    $('#Tabla_Partida_Arancelaria').dataTable().fnClearTable();
                                    BUSCAR_PARTIDA_ARANCELARIA();
                                    $('body').removeClass('loading'); //Removemos la clase loading
                                },
                                error: function (XMLHttpRequest, textStatus, errorThrown) {
                                    var error = eval("(" + XMLHttpRequest.responseText + ")");
                                    alert(error.Message);
                                }
                            });




                        }
                    })
                }

                $('body').removeClass('loading'); //Removemos la clase loading

            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                var error = eval("(" + XMLHttpRequest.responseText + ")");
                // alert(error.Message);
                swal("Error!", "Por favor, prueba los pasos siguientes: <b></br>1.      Cierre todas sus sesiones y vuelva a ingresar al sistema. </br>2.      Compruebe su conexión a Internet.</br> 3.      Reinicie su equipo.</br> 4.      En caso no resuelva la situación, envíe un correo a sistemas <b/> ", "error");
            }
        });








      


    });

    $(document).on('click', '.editar', function (e) {
       

        /*Eliminar las clases de error*/
        $("#txtpartida").removeClass('error_campo_vacio');
        $("#txtdescripcion").removeClass('error_campo_vacio');
        $("#txtpartida").prop("disabled", true);


        $("#Titulo_Panel").text('Actualizar Partida Arancelaria');
        $("#div_estado_buscar").show();
        $('#modal_nuevo').modal().removeClass('animated bounceIn'); 
        $('#modal_nuevo').modal().addClass('animated rotateInUpRight'); 
        $("#btnGuardar").hide();
        $("#btnActualizar").show();

        var ajax_data = {
            "NROPARTIDA":  $(this).parents("tr").find("td").find("a").eq(0).html()
        };


        $.ajax({
            type: "POST",
            url: '../ServiciosWeb/SW_Partida_Arancelaria.asmx/Obtener_Partida_Arancelaria',
            data: JSON.stringify(ajax_data),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: true,
            success: function (respuesta) {
                var datos = (typeof respuesta.d) == 'string' ?
                    eval('(' + respuesta.d + ')') :
                    respuesta.d;

                for (var i = 0; i < datos.length; i++) {

                    $("#txtpartida").val(datos[i].NROPAR);
                    $("#txtdescripcion").val(datos[i].DESPAR);
                    $("#ddlestado").val(datos[i].STAPAR);
                  
                }
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                var error = eval("(" + XMLHttpRequest.responseText + ")");
                alert(error.Message);
            }
        });



    });
    
    $(document).on('click', '.link', function (e) {


        /*Eliminar las clases de error*/
        //$("#txtpartida").removeClass('error_campo_vacio');
        //$("#txtdescripcion").removeClass('error_campo_vacio');
        //$("#txtpartida").prop("disabled", true);


        //$("#Titulo_Panel").text('Actualizar Partida Arancelaria');
        //$("#div_estado_buscar").show();
        //$('#modal_nuevo').modal();
        //$("#btnGuardar").hide();
        //$("#btnActualizar").show();
        var NROPARTIDA = $(this).parents("tr").find("td").find("a").eq(0).html();
        var DESCRIPCIONPARTIDA = $(this).parents("tr").find("td").eq(1).html();
        $("#txtnropartida_conexion").val(NROPARTIDA);
        $("#txtdescripcionpartida_conexion").val(DESCRIPCIONPARTIDA);
        
        $(".tab-pane").removeClass("active");
        $("#tab-2").addClass("active");
        $("#tab1").removeClass("active");
        $("#tab2").addClass("active");
      
        $('a[data-toggle="tab"][href="#tab-1"]').attr('aria-expanded', 'false');
        $('a[data-toggle="tab"][href="#tab-2"]').attr('aria-expanded', 'true');
     
        BUSCAR_PARTIDA_ARANCELARIA_CONEXION();
        

    });
    $(document).on('click', '.link_articulo', function (e) {


        /*Eliminar las clases de error*/
        //$("#txtpartida").removeClass('error_campo_vacio');
        //$("#txtdescripcion").removeClass('error_campo_vacio');
        //$("#txtpartida").prop("disabled", true);


        //$("#Titulo_Panel").text('Actualizar Partida Arancelaria');
        //$("#div_estado_buscar").show();
        //$('#modal_nuevo').modal();
        //$("#btnGuardar").hide();
        //$("#btnActualizar").show();
        var NROPARTIDA = $(this).parents("tr").find("td").find("a").eq(0).html();
        var DESCRIPCIONPARTIDA = $(this).parents("tr").find("td").eq(1).html();
        $("#txtnropartida_conexion").val(NROPARTIDA);
        $("#txtdescripcionpartida_conexion").val(DESCRIPCIONPARTIDA);

        $(".tab-pane").removeClass("active");
        $("#tab-2").addClass("active");
        $("#tab3").removeClass("active");
        $("#tab2").addClass("active");

        $('a[data-toggle="tab"][href="#tab-3"]').attr('aria-expanded', 'false');
        $('a[data-toggle="tab"][href="#tab-2"]').attr('aria-expanded', 'true');

        BUSCAR_PARTIDA_ARANCELARIA_CONEXION();


    });

    

    $("#btnGuardar").click(function (e) {




        var resultado_validacion = validar_input_vacios();



        if (resultado_validacion == 0) {

            var NROPARTIDA = $("#txtpartida").val();
            var DESCRIPCION = $("#txtdescripcion").val();
          

            var ajax_data = {
                "NROPARTIDA": NROPARTIDA,
                "DESCRIPCION": DESCRIPCION
               

            };
            $.ajax({
                type: "POST",
                url: '../ServiciosWeb/SW_Partida_Arancelaria.asmx/Grabar_Partida_Arancelaria',
                data: JSON.stringify(ajax_data),
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                async: true,
                beforeSend: function () {
                    $('body').addClass('loading');
                },
                success: function (resultado) {
                    var num = resultado.d;

                    if  (num == -1) {
                        $('#modal_nuevo').modal('hide');
                        Swal.fire('Excelente!', 'El registro se Grabo Satisfactoriamente.!', 'success')
                    }

                    else {

                        if (num = 45000) {
                            $('#modal_nuevo').modal('hide');
                            Swal.fire('Advertencia!', 'La Partida Arancelaria ya existe.!', 'warning')
                        }
                        else {
                            Swal.fire('Error!', 'El registro no Grabo.!', 'error')
                            
                        }
                       
                    }
                    $('#modal_nuevo').modal('hide');
                    $('body').removeClass('loading'); //Removemos la clase loading
                    BUSCAR_PARTIDA_ARANCELARIA();

                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    var error = eval("(" + XMLHttpRequest.responseText + ")");
                    alert(error.Message);
                }
            });

        }

    


        });

     $("#btnActualizar").click(function (e) {

            var resultado_validacion = validar_input_vacios();


            if (resultado_validacion == 0) {

                var NROPARTIDA = $("#txtpartida").val();
                var DESCRIPCION = $("#txtdescripcion").val();
                var ESTADO = $("#ddlestado").val();

                var ajax_data = {
                    "NROPARTIDA": NROPARTIDA,
                    "DESCRIPCION": DESCRIPCION,
                    "ESTADO": ESTADO
                };

                $.ajax({
                    type: "POST",
                    url: '../ServiciosWeb/SW_Partida_Arancelaria.asmx/Actualizar_Partida_Arancelaria',
                    data: JSON.stringify(ajax_data),
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    async: true,
                    beforeSend: function () {
                        $('body').addClass('loading');
                    },
                    success: function (resultado) {
                        var num = resultado.d;
                        if (num == -1) {
                            $('#modal_nuevo').modal('hide');
                            Swal.fire('Excelente!', 'El registro se Actualizo Satisfactoriamente.!', 'success')
                        }

                        else {

                            if (num = 45000) {
                                $('#modal_nuevo').modal('hide');
                                Swal.fire('Advertencia!', 'La Partida Arancelaria ya existe.!', 'warning')
                            }
                            else {
                                Swal.fire('Error!', 'El registro no Grabo.!', 'error')

                            }

                        }

                        $('#modal_nuevo').modal('hide');
                        $('body').removeClass('loading'); //Removemos la clase loading
                        BUSCAR_PARTIDA_ARANCELARIA();
                    },
                    error: function (XMLHttpRequest, textStatus, errorThrown) {
                        var error = eval("(" + XMLHttpRequest.responseText + ")");
                        alert(error.Message);
                    }
                });

            }






        });
    function validar_input_vacios() {
     
            /*Eliminar las clases de error*/
            $("#txtpartida").removeClass('error_campo_vacio');
            $("#txtdescripcion").removeClass('error_campo_vacio');


            var validar = 0;

            var CODIGO_PARTIDA = $("#txtpartida").val();
            var DESCRIPCION = $("#txtdescripcion").val();

            if (CODIGO_PARTIDA == '') {
                validar = 1;
               
                toastr.warning('El Campo <b> Nro Partida Arancelaria </b> no debe estar vacio.!', "Validación del Sistema.. !");
              /*  alertify.error('El Campo <b> Nro Partida Arancelaria </b> no debe estar vacio.!');*/
                $("#txtpartida").addClass('error_campo_vacio');
                return validar;
            }
            else { $("#txtpartida").removeClass('error_campo_vacio'); }
            if (DESCRIPCION == '') {
                validar = 1;
                toastr.warning('El Campo <b> Descripcion </b> no debe estar vacio.!', "Validación del Sistema.. !");
              
                $("#txtdescripcion").addClass('error_campo_vacio');
                return validar;
            }
            else { $("#txtdescripcion").removeClass('error_campo_vacio'); }



            return validar;
        }
    
    function validar_input_vacios_conexion() {
        /*Eliminar las clases de error*/
        $("#ddlcompañia").removeClass('error_campo_vacio');
        $("#ddlarticulo").removeClass('error_campo_vacio');
        $("#ddltono").removeClass('error_campo_vacio');
        $('#ddlarticulo').next('.select2-container').find('.select2-selection').removeClass('error_campo_vacio');

        var validar = 0;

        var COMPAÑIA = $("#ddlcompañia").val();
        var ARTICULO = $("#ddlarticulo").val();
        var TONO = $("#ddltono").val();

        if (COMPAÑIA == '') {
            validar = 1;
            toastr.warning('El Campo <b> Compañia </b> no debe estar vacio.!', "Validación del Sistema.. !");
            
            $("#ddlcompañia").addClass('error_campo_vacio');
            return validar;
        }
        else { $("#ddlcompañia").removeClass('error_campo_vacio'); }

        if (ARTICULO == null) {
            validar = 1;
            toastr.warning('El Campo <b> Articulo </b> no debe estar vacio.!', "Validación del Sistema.. !");
           
            $('#ddlarticulo').next('.select2-container').find('.select2-selection').addClass('error_campo_vacio');
          
            
            return validar;
        }
        else {
            $('#ddlarticulo').next('.select2-container').find('.select2-selection').removeClass('error_campo_vacio');
           
        }

        if (TONO == 0) {
            validar = 1;
            toastr.warning('El Campo <b> Tono </b> no debe estar vacio.!', "Validación del Sistema.. !");
          
            $("#ddltono").addClass('error_campo_vacio');
            return validar;
        }
        else { $("#ddltono").removeClass('error_campo_vacio'); }

        return validar;
    }
    $("#btncerrar").click(function (e) {

        window.location.href = "Principal.aspx";

    });

   


    function OBTENER_COMBO_TONO() {

        $('#ddltono').empty().append('<option value=0> << SELECCIONAR >> </option>');
        $('#ddltono_editar').empty().append('<option value=0> << SELECCIONAR >> </option>');


        $.ajax({
            type: "POST",
            url: '../ServiciosWeb/SW_Partida_Arancelaria.asmx/Obtener_Combo_Tono',
            data: JSON.stringify(),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: true,
            beforeSend: function () { $('body').addClass('loading'); },
            success: function (respuesta) {
                var data = (typeof respuesta.d) === 'string' ? eval('(' + respuesta.d + ')') : respuesta.d;

                for (var i = 0; i < data.length; i++) {

                    $('#ddltono').append('<option value="' + data[i].CODIGOTONO + '">' + data[i].DESCRIPCIONTONO + '</option>');
                    $('#ddltono_editar').append('<option value="' + data[i].CODIGOTONO + '">' + data[i].DESCRIPCIONTONO + '</option>');


                }
              

                $('body').removeClass('loading');
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                var error = eval("(" + XMLHttpRequest.responseText + ")");
                swal("Error!", "Por favor, prueba los pasos siguientes: <b></br>1.      Cierre todas sus sesiones y vuelva a ingresar al sistema. </br>2.      Compruebe su conexión a Internet.</br> 3.      Reinicie su equipo.</br> 4.      En caso no resuelva la situación, envíe un correo a sistemas <b/> ", "error");
            }
        });


    }
    function OBTENER_COMBO_COMPANIA() {

        $('#ddlcompañia').empty().append('<option value=0> << SELECCIONAR >> </option>');
        $('#ddlcompañia_editar').empty().append('<option value=0> << SELECCIONAR >> </option>');


        $.ajax({
            type: "POST",
            url: '../ServiciosWeb/SW_Partida_Arancelaria.asmx/Obtener_Combo_Compañia',
            data: JSON.stringify(),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: true,
            beforeSend: function () { $('body').addClass('loading'); },
            success: function (respuesta) {
                var data = (typeof respuesta.d) === 'string' ? eval('(' + respuesta.d + ')') : respuesta.d;

                for (var i = 0; i < data.length; i++) {

                    $('#ddlcompañia').append('<option value="' + data[i].CODIGOCOMPAÑIA + '">' + data[i].DESCRIPCIONCOMPAÑIA + '</option>');
                    $('#ddlcompañia_editar').append('<option value="' + data[i].CODIGOCOMPAÑIA + '">' + data[i].DESCRIPCIONCOMPAÑIA + '</option>');

                }

                $('#ddlcompañia').val(10);
                $('body').removeClass('loading');
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                var error = eval("(" + XMLHttpRequest.responseText + ")");
                swal("Error!", "Por favor, prueba los pasos siguientes: <b></br>1.      Cierre todas sus sesiones y vuelva a ingresar al sistema. </br>2.      Compruebe su conexión a Internet.</br> 3.      Reinicie su equipo.</br> 4.      En caso no resuelva la situación, envíe un correo a sistemas <b/> ", "error");
            }
        });


    }
    function OBTENER_COMBO_PARTIDA_ARTICULO() {
        $('#ddlarticulo_buscar').empty().append('<option value=0> << SELECCIONAR >> </option>');

        $('#ddlarticulo_buscar').select2({
            /* dropdownParent: $('#modal_editar'),*/
            ajax: {
                url: '../ServiciosWeb/SW_Partida_Arancelaria.asmx/Obtener_Combo_Articulo',
                dataType: 'xml',
                type: 'GET',
                delay: 300,
                data: function (params) {
                    return {
                        buscar: params.term
                    };
                },
                processResults: function (data) {
                    var results = [];
                    $(data).find('BE_Partida_Arancelaria').each(function () {
                        var CODIGOTONO = $(this).find('CODARTICULO').text();
                        var DESCRIPCIONTONO = $(this).find('DESCRIPCIONARTICULO').text();
                        results.push({
                            id: CODIGOTONO,
                            text: DESCRIPCIONTONO
                        });
                    });
                    return { results: results };
                },
                cache: true
            },
            placeholder: 'Seleccione Articulo',
            minimumInputLength: 2,
            templateSelection: function (selectedData, container) {
                // Si no hay selección, mostrar el texto predeterminado
                if (selectedData.length === 0) {
                    return 'Selecciona una opción';
                }

                // Crear el elemento de selección con el botón de borrado
                var $option = $('<span class="select2-selection__choice">' + selectedData.text + '</span>');
                var $removeButton = $('<span class="select2-selection__clear">×</span>');

                // Agregar el evento de clic al botón de borrado
                $removeButton.on('click', function (e) {

                    e.stopPropagation(); // Evitar que se cierre el dropdown al hacer clic en el botón de borrado
                    $('#ddlarticulo_buscar').val(null).trigger('change');
                    $('#ddlarticulo_buscar').trigger('select2:unselect');
                    $('#ddlarticulo_buscar').empty().append('<option value=0> << SELECCIONAR >> </option>').trigger('change');


                });

                // Agregar el botón de borrado al elemento de selección
                $option.append($removeButton);

                return $option;

            }
        });
    }
    function OBTENER_COMBO_ARTICULO() {
        $('#ddltipo_articulo').empty().append('<option value=0> << SELECCIONAR >> </option>');
        $('#ddltipo_articulo_editar').empty().append('<option value=0> << SELECCIONAR >> </option>');
    $('#ddlarticulo').select2({
        dropdownParent: $('#modal_nuevo2'),
        ajax: {
            url: '../ServiciosWeb/SW_Partida_Arancelaria.asmx/Obtener_Combo_Articulo',
            dataType: 'xml',
            type: 'GET',
            delay: 300,
            data: function (params) {
                return {
                    buscar: params.term
                };
            },
            processResults: function (data) {
                var results = [];
                $(data).find('BE_Partida_Arancelaria').each(function () {
                    var CODIGOTONO = $(this).find('CODARTICULO').text();
                    var DESCRIPCIONTONO = $(this).find('DESCRIPCIONARTICULO').text();
                    results.push({
                        id: CODIGOTONO,
                        text: DESCRIPCIONTONO
                    });
                });
                return { results: results };
            },
            cache: true
        },
        placeholder: 'Seleccione Articulo',
        minimumInputLength: 2
    });

    $('#ddlarticulo_editar').select2({
            dropdownParent: $('#modal_editar'),
            ajax: {
                url: '../ServiciosWeb/SW_Partida_Arancelaria.asmx/Obtener_Combo_Articulo',
                dataType: 'xml',
                type: 'GET',
                delay: 300,
                data: function (params) {
                    return {
                        buscar: params.term
                    };
                },
                processResults: function (data) {
                    var results = [];
                    $(data).find('BE_Partida_Arancelaria').each(function () {
                        var CODIGOTONO = $(this).find('CODARTICULO').text();
                        var DESCRIPCIONTONO = $(this).find('DESCRIPCIONARTICULO').text();
                        results.push({
                            id: CODIGOTONO,
                            text: DESCRIPCIONTONO
                        });
                    });
                    return { results: results };
                },
                cache: true
            },
            placeholder: 'Seleccione Articulo',
            minimumInputLength: 2
    });
        

        $('#txtarticulo_buscar').select2({
           /* dropdownParent: $('#modal_editar'),*/
            ajax: {
                url: '../ServiciosWeb/SW_Partida_Arancelaria.asmx/Obtener_Combo_Articulo',
                dataType: 'xml',
                type: 'GET',
                delay: 300,
                data: function (params) {
                    return {
                        buscar: params.term
                    };
                },
                processResults: function (data) {
                    var results = [];
                    $(data).find('BE_Partida_Arancelaria').each(function () {
                        var CODIGOTONO = $(this).find('CODARTICULO').text();
                        var DESCRIPCIONTONO = $(this).find('DESCRIPCIONARTICULO').text();
                        results.push({
                            id: CODIGOTONO,
                            text: DESCRIPCIONTONO
                        });
                    });
                    return { results: results };
                },
                cache: true
            },
            placeholder: 'Seleccione Articulo',
            minimumInputLength: 2
        });
    }

    $('#ddlarticulo').change(function () {


        $("#ddltipo_articulo").empty();
        var CODIGO_ARTICULO = $('#ddlarticulo').val();
        if (CODIGO_ARTICULO == null)
        {
            $('#ddltipo_articulo').empty().append('<option value=0> << SELECCIONAR >> </option>');
        }
        else {
             var ajax_data = { "CODIGO_ARTICULO": CODIGO_ARTICULO };

        $.ajax({
            type: "POST",
            url: '../ServiciosWeb/SW_Partida_Arancelaria.asmx/Obtener_Combo_Tipo_Articulo',
            data: JSON.stringify(ajax_data),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: true,
            beforeSend: function () { $('body').addClass('loading'); },
            success: function (respuesta) {
                var data = (typeof respuesta.d) === 'string' ? eval('(' + respuesta.d + ')') : respuesta.d;

                for (var i = 0; i < data.length; i++) {

                    $('#ddltipo_articulo').append('<option value="' + data[i].CODIGOTIPOARTICULO + '">' + data[i].DESCRIPCIONTIPOARTICULO + '</option>');
                }
               var tipo_art= $('#ddltipo_articulo').val();

                if (tipo_art == 1) {
                    $('#ddltono').prop('disabled', true);
                    $('#ddltono').val(4);
                }
                else {
                    $('#ddltono').prop('disabled', false);
                    $('#ddltono').val(0);
                }

                $('body').removeClass('loading');
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                var error = eval("(" + XMLHttpRequest.responseText + ")");
                swal("Error!", "Por favor, prueba los pasos siguientes: <b></br>1.      Cierre todas sus sesiones y vuelva a ingresar al sistema. </br>2.      Compruebe su conexión a Internet.</br> 3.      Reinicie su equipo.</br> 4.      En caso no resuelva la situación, envíe un correo a sistemas <b/> ", "error");
            }
        });
        }
       
      


    });

    $('#ddlarticulo_editar').change(function () {


        $("#ddltipo_articulo_editar").empty();
        var CODIGO_ARTICULO = $('#ddlarticulo_editar').val();

        var ajax_data = { "CODIGO_ARTICULO": CODIGO_ARTICULO };

        $.ajax({
            type: "POST",
            url: '../ServiciosWeb/SW_Partida_Arancelaria.asmx/Obtener_Combo_Tipo_Articulo',
            data: JSON.stringify(ajax_data),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: true,
            beforeSend: function () { $('body').addClass('loading'); },
            success: function (respuesta) {
                var data = (typeof respuesta.d) === 'string' ? eval('(' + respuesta.d + ')') : respuesta.d;

                for (var i = 0; i < data.length; i++) {

                    $('#ddltipo_articulo_editar').append('<option value="' + data[i].CODIGOTIPOARTICULO + '">' + data[i].DESCRIPCIONTIPOARTICULO + '</option>');
                }
                

              

                $('body').removeClass('loading');
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                var error = eval("(" + XMLHttpRequest.responseText + ")");
                swal("Error!", "Por favor, prueba los pasos siguientes: <b></br>1.      Cierre todas sus sesiones y vuelva a ingresar al sistema. </br>2.      Compruebe su conexión a Internet.</br> 3.      Reinicie su equipo.</br> 4.      En caso no resuelva la situación, envíe un correo a sistemas <b/> ", "error");
            }
        });


    });
    $(document).on('click', '.editar_conexion', function (e) {
       
       
        $("#ddlcompañia").removeClass('error_campo_vacio');
        $("#ddlarticulo").removeClass('error_campo_vacio');
        $("#ddltono").removeClass('error_campo_vacio');
        $(".select2-container").removeClass('error_campo_vacio');

        $('#ddlarticulo').empty();
        $("#Titulo_Panel_editar").text('Actualizar Partida Arancelaria Conexion');
        $("#div_estado_buscar").show();
        $('#modal_editar').modal().addClass('animated rotateInUpRight');
        $("#btnGuardar_Conexion_editar").hide();
        $("#btnActualizar_Conexion_editar").show();
        OBTENER_COMBO_COMPANIA();
      
        OBTENER_COMBO_ARTICULO();
        var fila = $(this).closest('tr');
        var dataTable = $('#Tabla_Partida_Arancelaria_Conexion').DataTable();

        var CODIGOCIA = dataTable.row(fila).data()[0];
        var CODIGOARTICULO = dataTable.row(fila).data()[2];
        var CODIGOTIPOARTICULO = dataTable.row(fila).data()[4];
        var CODIGOTONOCOLOR = dataTable.row(fila).data()[6];
        var PARTIDA = dataTable.row(fila).data()[8];


        var ajax_data = {
            "CODIGOCIA": CODIGOCIA,
            "CODIGOARTICULO": CODIGOARTICULO,
            "CODIGOTIPOARTICULO": CODIGOTIPOARTICULO,
            "CODIGOTONOCOLOR": CODIGOTONOCOLOR,
            "PARTIDA": PARTIDA
        };
      
       
       
        $.ajax({
            type: "POST",
            url: '../ServiciosWeb/SW_Partida_Arancelaria.asmx/Obtener_Partida_Arancelaria_Conexion',
            data: JSON.stringify(ajax_data),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: true,
            success: function (respuesta) {
                var datos = (typeof respuesta.d) == 'string' ?
                    eval('(' + respuesta.d + ')') :
                    respuesta.d;
               
                for (var i = 0; i < datos.length; i++) {

                    $("#txtnropartida_conexion_editar").val(datos[i].NROPAR);
                    $("#ddlcompañia_editar").val(datos[i].CODCIA);
                 
                   
                    $("#ddltipo_articulo_editar").val(datos[i].CODIGOTIPOARTICULO);
                   
                    $("#ddlestado_editar").val(datos[i].ESTADO);
                   
                    $('#ddlarticulo_editar').append($('<option>', {
                        value: datos[i].CODARTICULO,
                        text: datos[i].DESCRIPCIONARTICULO
                    }));
                    $('#ddlarticulo_editar').val(datos[i].CODARTICULO).trigger('change');
                   
                   
                }

                
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                var error = eval("(" + XMLHttpRequest.responseText + ")");
                alert(error.Message);
            }
        });
       
        $("#ddltono_editar").val(CODIGOTONOCOLOR);
        


    });
    $(document).on('click', '.eliminar_conexion', function (e) {
        var fila = $(this).closest('tr');
        var dataTable = $('#Tabla_Partida_Arancelaria_Conexion').DataTable();
        var CODIGOCIA = dataTable.row(fila).data()[0];
        var CODIGOARTICULO = dataTable.row(fila).data()[2];
        var CODIGOTIPOARTICULO = dataTable.row(fila).data()[4];
        var CODIGOTONOCOLOR = dataTable.row(fila).data()[6];
        var PARTIDA = dataTable.row(fila).data()[8];


        var ajax_data_val = { "PARTIDA": PARTIDA, "COD_ARTICULO": CODIGOARTICULO };

        $.ajax({
            type: "POST",
            url: '../ServiciosWeb/SW_Partida_Arancelaria.asmx/Validar_Eliminar_Conexion',
            data: JSON.stringify(ajax_data_val),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: true,
            beforeSend: function () {
                $('body').addClass('loading');
            },
            success: function (respuesta) {
                var cantidad = (typeof respuesta.d) == 'string' ?
                    eval('(' + respuesta.d + ')') :
                    respuesta.d;

                if (cantidad > 0) {
                    toastr.warning('No se puede eliminar la Partida, el Articulo de la Partida se encuentra asociado.!', "Validación del Sistema.. !");

                }
                else {

                    Swal.fire({
                        title: 'Eliminar Registro?',
                        text: "¿Estás seguro de eliminar la Conexion ?",
                        type: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#1ab394',
                        cancelButtonColor: '#6c757d',
                        confirmButtonText: 'Si, Eliminar !'
                    }).then((result) => {
                        if (result.value) {


                            var ajax_data = {
                                "COD_CIA": CODIGOCIA,
                                "COD_ARTICULO": CODIGOARTICULO,
                                "TIPO_ARTICULO": CODIGOTIPOARTICULO,
                                "COD_TONO": CODIGOTONOCOLOR,
                                "NRO_PARTIDA": PARTIDA
                            };

                            $.ajax({
                                type: "POST",
                                url: '../ServiciosWeb/SW_Partida_Arancelaria.asmx/Eliminar_Partida_Arancelaria_Conexion',
                                data: JSON.stringify(ajax_data),
                                contentType: "application/json; charset=utf-8",
                                dataType: "json",
                                async: true,
                                beforeSend: function () {
                                    $('body').addClass('loading');
                                },
                                success: function (respuesta) {
                                    var num = respuesta.d;
                                    if (num > 0) {

                                        Swal.fire('Eliminado !', 'El Registro ha sido eliminado.', 'success');
                                    }
                                    $('#Tabla_Partida_Arancelaria_Conexion').dataTable().fnClearTable();
                                    BUSCAR_PARTIDA_ARANCELARIA_CONEXION();
                                    $('body').removeClass('loading'); //Removemos la clase loading
                                },
                                error: function (XMLHttpRequest, textStatus, errorThrown) {
                                    var error = eval("(" + XMLHttpRequest.responseText + ")");
                                    alert(error.Message);
                                }
                            });




                        }
                    })

                }

                $('body').removeClass('loading'); //Removemos la clase loading

            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                var error = eval("(" + XMLHttpRequest.responseText + ")");
                // alert(error.Message);
                swal("Error!", "Por favor, prueba los pasos siguientes: <b></br>1.      Cierre todas sus sesiones y vuelva a ingresar al sistema. </br>2.      Compruebe su conexión a Internet.</br> 3.      Reinicie su equipo.</br> 4.      En caso no resuelva la situación, envíe un correo a sistemas <b/> ", "error");
            }
        });


      

       


    });
  
    $("#btnGuardar_Conexion").click(function (e) {
       
       


        var resultado_validacion_conexion = validar_input_vacios_conexion();


        if (resultado_validacion_conexion == 0) {

          
       
        var NRO_PARTIDA = $("#txtnropartida_conexion_nuevo").val();
        var COD_CIA = $("#ddlcompañia").val();
        var COD_ARTICULO = $("#ddlarticulo").val();
        var TIPO_ARTICULO = $("#ddltipo_articulo").val();
        var COD_TONO = $("#ddltono").val();


            var ajax_data = {
                "NRO_PARTIDA": NRO_PARTIDA,
                "COD_CIA": COD_CIA,
                "COD_ARTICULO": COD_ARTICULO,
                "TIPO_ARTICULO": TIPO_ARTICULO,
                "COD_TONO": COD_TONO


            };
            $.ajax({
                type: "POST",
                url: '../ServiciosWeb/SW_Partida_Arancelaria.asmx/Grabar_Partida_Arancelaria_Conexion',
                data: JSON.stringify(ajax_data),
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                async: true,
                beforeSend: function () {
                    $('body').addClass('loading');
                },
                success: function (resultado) {
                    var num = resultado.d;

                    if (num == -1) {
                        $('#modal_nuevo').modal('hide');
                        Swal.fire('Excelente!', 'El registro se Grabo Satisfactoriamente.!', 'success')
                    }

                    else {

                        if (num = 45000) {
                            $('#modal_nuevo').modal('hide');
                            Swal.fire('Advertencia!', 'El registro ya existe.!', 'warning')
                        }
                        else {
                            Swal.fire('Error!', 'El registro no Grabo.!', 'error')

                        }

                    }
                    
                    if ($('#switch_cerrar_ventana').is(':checked')) {
                        // El interruptor está marcado
                        $('#modal_nuevo2').modal('hide');
                    } else {
                       
                    }


                    $('body').removeClass('loading'); //Removemos la clase loading
                    BUSCAR_PARTIDA_ARANCELARIA_CONEXION();

                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    var error = eval("(" + XMLHttpRequest.responseText + ")");
                    alert(error.Message);
                }
            });

        }




    });

    $("#btnActualizar_Conexion_editar").click(function (e) {


            var NRO_PARTIDA = $("#txtnropartida_conexion_editar").val();
            var COD_CIA = $("#ddlcompañia_editar").val();
            var COD_ARTICULO = $("#ddlarticulo_editar").val();
            var TIPO_ARTICULO = $("#ddltipo_articulo_editar").val();
            var COD_TONO = $("#ddltono_editar").val();
            var ESTADO = $("#ddlestado_editar").val();

            var ajax_data = {
                "NRO_PARTIDA": NRO_PARTIDA,
                "COD_CIA": COD_CIA,
                "COD_ARTICULO": COD_ARTICULO,
                "TIPO_ARTICULO": TIPO_ARTICULO,
                "COD_TONO": COD_TONO,
                "ESTADO": ESTADO


            };
            $.ajax({
                type: "POST",
                url: '../ServiciosWeb/SW_Partida_Arancelaria.asmx/Actualizar_Partida_Arancelaria_Conexion',
                data: JSON.stringify(ajax_data),
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                async: true,
                beforeSend: function () {
                    $('body').addClass('loading');
                },
                success: function (resultado) {
                    var num = resultado.d;

                    if (num == -1) {
                        $('#modal_editar').modal('hide');
                        Swal.fire('Excelente!', 'El registro se Actualizo Satisfactoriamente.!', 'success')
                    }

                    else {

                        if (num = 45000) {
                            $('#modal_editar').modal('hide');
                            Swal.fire('Advertencia!', 'El registro ya existe.!', 'warning')
                        }
                        else {
                            Swal.fire('Error!', 'El registro no se Actualizo.!', 'error')

                        }

                    }
                    $('#modal_editar').modal('hide');
                    $('body').removeClass('loading'); //Removemos la clase loading
                    BUSCAR_PARTIDA_ARANCELARIA_CONEXION();

                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    var error = eval("(" + XMLHttpRequest.responseText + ")");
                    alert(error.Message);
                }
            });

      




    });
   
});
