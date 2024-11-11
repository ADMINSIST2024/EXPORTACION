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


   
    $('#tab2').addClass('disabled');
    $('#tab3').addClass('disabled');
    $('#tab2 a').prop('disabled', true);
    $('#tab3 a').prop('disabled', true);
    $('input[type="text"]').on('input', function () {
        // Obtener el valor actual del campo
        var currentValue = $(this).val();
        // Convertir el valor a mayúsculas
        var uppercaseValue = currentValue.toUpperCase();
        // Asignar el valor en mayúsculas al campo
        $(this).val(uppercaseValue);
    });

    OBTENER_COMBO_PARTIDA();
    OBTENER_COMBO_CLIENTE();
    OBTENER_COMBO_COMPANIA();
    $("#btnnuevo").css('cursor', 'pointer');
    $("#btnnuevo_serie").css('cursor', 'pointer');

    function OBTENER_COMBO_PARTIDA() {

        $('#ddlpartida').empty().append('<option value=0> << SELECCIONAR >> </option>');
        $('#ddlpartida_buscar').empty().append('<option value=0> << SELECCIONAR >> </option>');
        $('#ddlpartida_serie').empty().append('<option value=0> << SELECCIONAR >> </option>');

        $('#ddlpartida').select2({
            dropdownParent: $('#modal_nuevo'),
            ajax: {
                url: '../ServiciosWeb/SW_DAM.asmx/Obtener_Combo_Partida',
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
                    $(data).find('BE_DAM').each(function () {
                        var NROPAR = $(this).find('NROPAR').text();
                        /*  var DESCRIPCIONTONO = $(this).find('DESCRIPCIONARTICULO').text();*/
                        results.push({
                            id: NROPAR,
                            text: NROPAR
                        });
                    });
                    return { results: results };
                },
                cache: true
            },
            placeholder: 'Seleccione Partida Arancelaria',
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
                    $('#ddlpartida').val(null).trigger('change');
                    $('#ddlpartida').trigger('select2:unselect');
                    $('#ddlpartida').empty().append('<option value=0> << SELECCIONAR >> </option>').trigger('change');


                });

                // Agregar el botón de borrado al elemento de selección
                $option.append($removeButton);

                return $option;

            }
        });

        $('#ddlpartida_buscar').select2({

            /*dropdownParent: $('#modal_nuevo'),*/
            ajax: {
                url: '../ServiciosWeb/SW_DAM.asmx/Obtener_Combo_Partida',
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
                    $(data).find('BE_DAM').each(function () {
                        var NROPAR = $(this).find('NROPAR').text();
                        /*  var DESCRIPCIONTONO = $(this).find('DESCRIPCIONARTICULO').text();*/
                        results.push({
                            id: NROPAR,
                            text: NROPAR
                        });
                    });
                    return { results: results };
                },
                cache: true
            },
            placeholder: 'Seleccione Partida Arancelaria',
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
                    $('#ddlpartida_buscar').val(null).trigger('change');
                    $('#ddlpartida_buscar').trigger('select2:unselect');
                    $('#ddlpartida_buscar').empty().append('<option value=0> << SELECCIONAR >> </option>').trigger('change');;


                });

                // Agregar el botón de borrado al elemento de selección
                $option.append($removeButton);

                return $option;

            }
        });
        $('#ddlpartida_serie').select2({
            dropdownParent: $('#modal_nuevo_serie'),
            ajax: {
                url: '../ServiciosWeb/SW_DAM.asmx/Obtener_Combo_Partida',
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
                    $(data).find('BE_DAM').each(function () {
                        var NROPAR = $(this).find('NROPAR').text();
                        /*  var DESCRIPCIONTONO = $(this).find('DESCRIPCIONARTICULO').text();*/
                        results.push({
                            id: NROPAR,
                            text: NROPAR
                        });
                    });
                    return { results: results };
                },
                cache: true
            },
            placeholder: 'Seleccione Partida Arancelaria',
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
                    $('#ddlpartida_serie').val(null).trigger('change');
                    $('#ddlpartida_serie').trigger('select2:unselect');
                    $('#ddlpartida_serie').empty().append('<option value=0> << SELECCIONAR >> </option>').trigger('change');


                });

                // Agregar el botón de borrado al elemento de selección
                $option.append($removeButton);

                return $option;

            }
        });
    }
    function OBTENER_COMBO_CLIENTE() {

        $('#ddlcliente').empty().append('<option value=0> << SELECCIONAR >> </option>');
        $('#ddlcliente_buscar').empty().append('<option value=0> << SELECCIONAR >> </option>');

        $('#ddlcliente_buscar').select2({
            /* dropdownParent: $('#modal_nuevo'),*/
            ajax: {
                url: '../ServiciosWeb/SW_DAM.asmx/Obtener_Combo_Cliente',
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
                    $(data).find('BE_DAM').each(function () {
                        var CODCLI = $(this).find('CODCLI').text();
                        var RAZCLI = $(this).find('RAZCLI').text();
                        results.push({
                            id: CODCLI,
                            text: RAZCLI
                        });
                    });
                    return { results: results };
                },
                cache: true
            },
            placeholder: 'Seleccione Partida Arancelaria',
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
                    $('#ddlcliente_buscar').val(null).trigger('change');
                    $('#ddlcliente_buscar').trigger('select2:unselect');
                    $('#ddlcliente_buscar').empty().append('<option value=0> << SELECCIONAR >> </option>').trigger('change');


                });

                // Agregar el botón de borrado al elemento de selección
                $option.append($removeButton);

                return $option;

            }
        });
        $('#ddlcliente').select2({
            dropdownParent: $('#modal_nuevo'),
            ajax: {
                url: '../ServiciosWeb/SW_DAM.asmx/Obtener_Combo_Cliente',
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
                    $(data).find('BE_DAM').each(function () {
                        var CODCLI = $(this).find('CODCLI').text();
                        var RAZCLI = $(this).find('RAZCLI').text();
                        results.push({
                            id: CODCLI,
                            text: RAZCLI
                        });
                    });
                    return { results: results };
                },
                cache: true
            },
            placeholder: 'Seleccione Partida Arancelaria',
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
                    $('#ddlcliente').val(null).trigger('change');
                    $('#ddlcliente').trigger('select2:unselect');
                    $('#ddlcliente').empty().append('<option value=0> << SELECCIONAR >> </option>').trigger('change');


                });

                // Agregar el botón de borrado al elemento de selección
                $option.append($removeButton);

                return $option;

            }
        });


    }
    function OBTENER_COMBO_COMPANIA() {

        $('#ddlcia_buscar').empty().append('<option value=0> << SELECCIONAR >> </option>');
        $('#ddlcompañia').empty().append('<option value=0> << SELECCIONAR >> </option>');


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

                    $('#ddlcia_buscar').append('<option value="' + data[i].CODIGOCOMPAÑIA + '">' + data[i].DESCRIPCIONCOMPAÑIA + '</option>');
                    $('#ddlcompañia').append('<option value="' + data[i].CODIGOCOMPAÑIA + '">' + data[i].DESCRIPCIONCOMPAÑIA + '</option>');

                }

                $('#ddlcia_buscar').val(10);
                $('#ddlcompañia').val(10);
                $('body').removeClass('loading');
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                var error = eval("(" + XMLHttpRequest.responseText + ")");
                swal("Error!", "Por favor, prueba los pasos siguientes: <b></br>1.      Cierre todas sus sesiones y vuelva a ingresar al sistema. </br>2.      Compruebe su conexión a Internet.</br> 3.      Reinicie su equipo.</br> 4.      En caso no resuelva la situación, envíe un correo a sistemas <b/> ", "error");
            }
        });


    }
    function BUSCAR_DAM() {


        var COMPAÑIA_BUSCAR = $('#ddlcia_buscar').val();
        var DAM_BUSCAR = $('#txtDAM_buscar').val();
        var CLIENTE_BUSCAR = $('#ddlcliente_buscar').val();
        var ESTADO_BUSCAR = $('#ddlestado_buscar').val();



        var table = $('#Tabla_DAM').DataTable();
        table.clear().draw();

        var ajax_data = { "COMPAÑIA_BUSCAR": COMPAÑIA_BUSCAR, "DAM_BUSCAR": DAM_BUSCAR, "CLIENTE_BUSCAR": CLIENTE_BUSCAR, "ESTADO_BUSCAR": ESTADO_BUSCAR };
        $.ajax({
            type: "POST",
            url: '../ServiciosWeb/SW_DAM.asmx/Buscar_DAM',
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


                    $('#Tabla_DAM').DataTable({
                        destroy: true,
                        columnDefs: [
                            { className: 'text-center', targets: [0, 1, 2, 3, 4, 5, 6,7] }
                        ],
                        data: datos.map(function (item) {
                            return [
                                item.DESCRIPCION_CIA,
                                item.DAM ,
                                item.RAZCLI,
                                item.ESTADO,
                                "<img src='../img/selectivo.gif' class='guia' style='width:25px;height:25px' />",
                                "<img src='../img/serie.png' class='serie' style='width:20px;height:20px' />",
                                "<img src='../img/editar_2.png' class='editar' style='width:20px;height:20px' />",
                                "<img src='../img/ELIMINAR.png' class='eliminar' style='width:20px;height:20px'/>"
                            ];
                        }),
                        columns: [
                            { title: 'COMPAÑIA' },
                            { title: 'DAM' },
                            { title: 'CLIENTE' },
                            { title: 'ESTADO' },
                            { title: 'GUIA' },
                            { title: 'SERIE' },
                            { title: 'EDITAR' },
                            { title: 'ELIMINAR' }
                        ]
                    });



                }

                $('body').removeClass('loading'); //Removemos la clase loading
                $('#Tabla_DAM').removeAttr('style');
                $("#Tabla_DAM").show();
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                var error = eval("(" + XMLHttpRequest.responseText + ")");
                // alert(error.Message);
                swal("Error!", "Por favor, prueba los pasos siguientes: <b></br>1.      Cierre todas sus sesiones y vuelva a ingresar al sistema. </br>2.      Compruebe su conexión a Internet.</br> 3.      Reinicie su equipo.</br> 4.      En caso no resuelva la situación, envíe un correo a sistemas <b/> ", "error");
            }
        });


    }
    function BUSCAR_PARTIDAS() {


        var DAM = $('#txtDAM_Serie_popup').val();
      


        var table = $('#Tabla_Partidas').DataTable();
        table.clear().draw();

        var ajax_data = { "DAM": DAM};
        $.ajax({
            type: "POST",
            url: '../ServiciosWeb/SW_DAM.asmx/Buscar_Partidas_DAM',
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


                    $('#Tabla_Partidas').DataTable({
                        destroy: true,
                        searching: false,
                        columnDefs: [
                            { className: 'text-center', targets: [0, 1, 2, 3, 4, 5, 6, 7,8] }
                        ],
                        data: datos.map(function (item) {
                            return [
                                "<td><input type='checkbox' class='i-checks' name='input[]'></td>",
                                item.NRO,
                                item.CANTIDAD,
                                item.CODIGO_ARTICULO,
                                item.DESCRIPCION_ARTICULO,
                                item.DESCRIPCION_COLOR,
                                item.NUMERO_PARTIDA,
                                item.TIPO_ARTICULO,
                                item.CODIGO_COLOR

                            ];
                        }),
                        columns: [
                            { title: '' },
                            { title: 'NRO', visible: false },
                            { title: 'CANTIDAD' },
                            { title: 'CODIGO' },
                            { title: 'DESCRIPCION' },
                            { title: 'COLOR' },
                            { title: 'NRO PARTIDA' },
                            { title: 'TIPO ARTICULO', visible: false },
                            { title: 'CODIGO COLOR', visible: false }
                        ]
                    });
                 


                }

                $('body').removeClass('loading'); //Removemos la clase loading
                $('#Tabla_Partidas').removeAttr('style');
                $("#Tabla_Partidas").show();
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                var error = eval("(" + XMLHttpRequest.responseText + ")");
                // alert(error.Message);
                swal("Error!", "Por favor, prueba los pasos siguientes: <b></br>1.      Cierre todas sus sesiones y vuelva a ingresar al sistema. </br>2.      Compruebe su conexión a Internet.</br> 3.      Reinicie su equipo.</br> 4.      En caso no resuelva la situación, envíe un correo a sistemas <b/> ", "error");
            }
        });


    }
    $('#Tabla_Partidas').on('change', 'input[type="checkbox"]', function () {
       
        // Deseleccionar otros checkboxes
        $('#Tabla_Partidas input[type="checkbox"]').not(this).prop('checked', false);

        // Remover la clase de fila seleccionada de todas las filas
        $('#Tabla_Partidas tbody tr').removeClass('selected-row');

        if ($(this).is(':checked')) {
            var $row = $(this).closest('tr');
            $row.addClass('selected-row');

            // Obtener los datos de la fila usando la instancia del DataTable
            var table = $('#Tabla_Partidas').DataTable();
            var rowData = table.row($row).data();


          
            var nro = JSON.stringify(rowData[1]);
            var cantidad = JSON.stringify(rowData[2]);
            var codigoArticulo = JSON.stringify(rowData[3]);
            var descripcionArticulo = JSON.stringify(rowData[4]);
            var descripcionColor = JSON.stringify(rowData[5]);
            var numeroPartida = JSON.stringify(rowData[6]);
            var tipoArticulo = JSON.stringify(rowData[7]);
            var codigoColor = JSON.stringify(rowData[8]);


            $('#txtpartida').val(numeroPartida);
            $('#txtCodArticulo').val(codigoArticulo);
            $('#txtTipoArticulo').val(tipoArticulo);
            $('#txtCodigoColor').val(codigoColor);
            

        }

    });
    $("#btnnuevo").click(function (e) {
        $("#Titulo_Panel").text('Nuevo DAM');
        $("#txtDAM").prop('disabled', false);
        $('#ddlcliente').empty().append('<option value=0> << SELECCIONAR >> </option>').trigger('change');
        $("#txtDAM").val('');
        $("#ddlestado").val(0);
        $("#div_estado_buscar").hide();
        $("#btnGuardar").show();
        $("#btnActualizar").hide();
        $('#modal_nuevo').modal().removeClass('animated rotateInUpRight');
        $('#modal_nuevo').modal().addClass('animated lightSpeedIn');
        /*Eliminar las clases de error*/
        $("#ddlcompañia").removeClass('error_campo_vacio');
        $("#txtDAM").removeClass('error_campo_vacio');
        $('#ddlcliente').next('.select2-container').find('.select2-selection').removeClass('error_campo_vacio');

       
    });
    $("#btnnuevo_serie").click(function (e) {
        $("#Titulo_Panel").text('Nuevo DAM');
        /*  $('#ddlpartida').empty();*/
        $("#pregunta_cerrar_popup").show();
        $('#ddlpartida_serie').empty().append('<option value=0> << SELECCIONAR >> </option>').trigger('change');
        /*$("#txtserie").val('');*/
        $("#txtDAM_Serie_popup").val($("#txtnroDAM_Serie").val());
        $("#ddlestado").val(0);
        $("#txtDAM").prop('disabled', false);
        $("#txtserie").prop('disabled', false);

        $("#txtserie").val('');

        $("#div_estado_buscar_Serie").hide();
        $("#btnGuardar_serie").show();
        $("#btnActualizar_Serie").hide();
        $('#modal_nuevo_serie').modal().removeClass('animated bounceIn');
        $('#modal_nuevo_serie').modal().addClass('animated bounceIn');


        /*Eliminar las clases de error*/

        $("#txtDAM_Serie_popup").removeClass('error_campo_vacio');
        $("#txtserie").removeClass('error_campo_vacio');
        $('#ddlpartida_serie').next('.select2-container').find('.select2-selection').removeClass('error_campo_vacio');

        $('#txtpartida').val('');
        $('#txtCodArticulo').val('');
        $('#txtTipoArticulo').val('');
        $('#txtCodigoColor').val('');


        BUSCAR_PARTIDAS();

    });
    $("#btnbuscar").click(function (e) {

        BUSCAR_DAM();

    });
    $('#txtserie').on('blur', function () {
        var value = $(this).val();

        // Elimina cualquier carácter no numérico
        value = value.replace(/\D/g, '');

        // Completa con ceros a la izquierda
        value = value.padStart(4, '0'); // Completa con ceros a la izquierda

        $(this).val(value);
    });
    $(document).on('click', '.eliminar', function (e) {
        DAM = $(this).parents("tr").find("td").eq(1).html();


        var ajax_data_val = { "DAM": DAM};

        $.ajax({
            type: "POST",
            url: '../ServiciosWeb/SW_DAM.asmx/Validar_Eliminar_DAM',
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
                    toastr.warning('No se puede eliminar la DAM, existen guias asociadas.!', "Validación del Sistema.. !");
                 
                }
                else {

                    Swal.fire({
                        title: 'Eliminar Registro?',
                        text: "¿Estás seguro de eliminar el Registro  :  " + DAM + " ?",
                        type: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#1ab394',
                        cancelButtonColor: '#6c757d',
                        confirmButtonText: 'Si, Eliminar !'
                    }).then((result) => {
                        if (result.value) {


                            var ajax_data = {
                                "DAM": DAM
                            };

                            $.ajax({
                                type: "POST",
                                url: '../ServiciosWeb/SW_DAM.asmx/Eliminar_DAM',
                                data: JSON.stringify(ajax_data),
                                contentType: "application/json; charset=utf-8",
                                dataType: "json",
                                async: true,
                                beforeSend: function () {
                                    $('body').addClass('loading');
                                },
                                success: function (respuesta) {
                                    var num = respuesta.d;
                                    if (num == -1) {

                                        Swal.fire('Eliminado !', 'El Registro ha sido eliminado.', 'success');
                                    }
                                    $('#Tabla_Usuarios').dataTable().fnClearTable();
                                    BUSCAR_DAM();
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
    $(document).on('click', '.eliminar_Serie', function (e) {

        var table = $('#Tabla_Serie_DAM').DataTable();
        var tr = $(this).closest('tr');
        var rowData = table.row(tr).data();


        var DAM = $("#txtnroDAM_Serie").val();
        var SERIE = $(this).parents("tr").find("td").eq(0).html();
        var NRO_PARTIDA = $(this).parents("tr").find("td").eq(1).html();
        var COD_ARTICULO = $(this).parents("tr").find("td").eq(2).html();
        var COD_COLOR = JSON.stringify(rowData[6]);
       


        
        Swal.fire({
            title: 'Eliminar Registro?',
            text: "¿Estás seguro de eliminar el registro con Serie  :  " + SERIE + " ?",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#1ab394',
            cancelButtonColor: '#6c757d',
            confirmButtonText: 'Si, Eliminar !'
        }).then((result) => {
            if (result.value) {


                var ajax_data = {
                    "DAM": DAM,
                    "SERIE": SERIE,
                    "NRO_PARTIDA": NRO_PARTIDA,
                    "COD_ARTICULO": COD_ARTICULO,
                    "COD_COLOR": COD_COLOR
                };

                $.ajax({
                    type: "POST",
                    url: '../ServiciosWeb/SW_DAM.asmx/Eliminar_Serie',
                    data: JSON.stringify(ajax_data),
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    async: true,
                    beforeSend: function () {
                        $('body').addClass('loading');
                    },
                    success: function (respuesta) {
                        var num = respuesta.d;
                        if (num == -1) {

                            Swal.fire('Eliminado !', 'El Registro ha sido eliminado.', 'success');
                        }
                        $('#Tabla_Serie').dataTable().fnClearTable();
                        BUSCAR_SERIE();
                        $('body').removeClass('loading'); //Removemos la clase loading
                    },
                    error: function (XMLHttpRequest, textStatus, errorThrown) {
                        var error = eval("(" + XMLHttpRequest.responseText + ")");
                        alert(error.Message);
                    }
                });




            }
        })
        

    });
    $(document).on('click', '.editar', function (e) {

        /*Eliminar las clases de error*/
        $("#ddlcompañia").removeClass('error_campo_vacio');
        $("#txtDAM").removeClass('error_campo_vacio');
        $('#ddlcliente').next('.select2-container').find('.select2-selection').removeClass('error_campo_vacio');


        $("#txtDAM").prop('disabled', true);

        //$("#ddlpartida").prop('disabled', true);


        $("#Titulo_Panel").text('Actualizar DAM');
        $("#div_estado_buscar").show();
        $('#modal_nuevo').modal().removeClass('animated lightSpeedIn');
        $('#modal_nuevo').modal().addClass('animated rotateInUpRight');

        $("#btnGuardar").hide();
        $("#btnActualizar").show();


        var ajax_data = {
            "DAM": $(this).parents("tr").find("td").eq(1).html() 
        };
        $.ajax({
            type: "POST",
            url: '../ServiciosWeb/SW_DAM.asmx/Obtener_DAM',
            data: JSON.stringify(ajax_data),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: true,
            success: function (respuesta) {
                var datos = (typeof respuesta.d) == 'string' ?
                    eval('(' + respuesta.d + ')') :
                    respuesta.d;

                for (var i = 0; i < datos.length; i++) {

                    $("#ddlcompañia").val(datos[i].CODCIA);
                    $("#txtDAM").val(datos[i].DAM);
                    $("#ddlcliente").val(datos[i].CODCLI);

                    $("#ddlestado").val(datos[i].ESTADO);
                    $('#ddlcliente').append($('<option>', {
                        value: datos[i].CODCLI,
                        text: datos[i].RAZCLI
                    }));
                    $('#ddlcliente').val(datos[i].CODCLI).trigger('change');
                }
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                var error = eval("(" + XMLHttpRequest.responseText + ")");
                alert(error.Message);
            }
        });
    });
    $(document).on('click', '.editar_serie', function (e) {

        /*Eliminar las clases de error*/
        $("#txtDAM_Serie_popup").removeClass('error_campo_vacio');
        $("#txtserie").removeClass('error_campo_vacio');
        $('#ddlpartida_serie').next('.select2-container').find('.select2-selection').removeClass('error_campo_vacio');
        $("#txtserie").prop('disabled', true);

        $("#Titulo_Panel_Serie").text('Actualizar Serie');
        $("#div_estado_buscar_serie").show();

        $('#modal_nuevo_serie').modal().removeClass('animated lightSpeedIn');
        $('#modal_nuevo_serie').modal().addClass('animated rotateInUpRight');
        $("#btnGuardar_serie").hide();
        $("#btnActualizar_Serie").show();
        $("#pregunta_cerrar_popup").hide();

        var ajax_data = {
            "DAM": $("#txtnroDAM_Serie").val(),
            "SERIE": $(this).parents("tr").find("td").eq(0).html()
        };
        $.ajax({
            type: "POST",
            url: '../ServiciosWeb/SW_DAM.asmx/Obtener_Serie',
            data: JSON.stringify(ajax_data),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: true,
            success: function (respuesta) {
                var datos = (typeof respuesta.d) == 'string' ?
                    eval('(' + respuesta.d + ')') :
                    respuesta.d;

                for (var i = 0; i < datos.length; i++) {

                    $("#txtDAM_Serie_popup").val(datos[i].DAM);
                    $("#txtserie").val(datos[i].SERIE);
                    $("#ddlestado").val(datos[i].ESTADO);
                    $('#ddlpartida_serie').append($('<option>', {
                        value: datos[i].NROPAR,
                        text: datos[i].NROPAR
                    }));
                    $('#ddlpartida_serie').val(datos[i].NROPAR).trigger('change');
                }
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                var error = eval("(" + XMLHttpRequest.responseText + ")");
                alert(error.Message);
            }
        });
    });

    $("#btnGuardar").click(function (e) {

        var resultado_validacion = validar_input_vacios();

        if (resultado_validacion == 0) {

            var DAM = $("#txtDAM").val();
            var CLIENTE = $("#ddlcliente").val();
            var COMPAÑIA = $("#ddlcompañia").val();


            var ajax_data = {
                "DAM": DAM,
                "CLIENTE": CLIENTE,
                "COMPAÑIA": COMPAÑIA

            };
            $.ajax({
                type: "POST",
                url: '../ServiciosWeb/SW_DAM.asmx/Grabar_DAM',
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


                    $('#modal_nuevo').modal('hide');
                    $('body').removeClass('loading'); //Removemos la clase loading
                    BUSCAR_DAM();

                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    var error = eval("(" + XMLHttpRequest.responseText + ")");
                    alert(error.Message);
                }
            });

        }
    });
    $("#btnGuardar_serie").click(function (e) {

        var resultado_validacion = validar_input_vacios_serie();

        if (resultado_validacion == 0) {

            var DAM = $("#txtDAM_Serie_popup").val();
            var SERIE = $("#txtserie").val();
            var PARTIDA = $("#txtpartida").val();
            var COD_ARTICULO = $("#txtCodArticulo").val();
            var TIP_ARTICULO = $('#txtTipoArticulo').val();
            var COD_COLOR = $('#txtCodigoColor').val();

           

            var ajax_data = {
                "DAM": DAM,
                "SERIE": SERIE,
                "PARTIDA": PARTIDA,
                "COD_ARTICULO": COD_ARTICULO,
                "TIP_ARTICULO": TIP_ARTICULO,
                "COD_COLOR": COD_COLOR

            };
            $.ajax({
                type: "POST",
                url: '../ServiciosWeb/SW_DAM.asmx/Grabar_Serie',
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

                        Swal.fire('Excelente!', 'El registro se Grabo Satisfactoriamente.!', 'success')
                    }

                    else {

                        if (num = 45000) {

                            Swal.fire('Advertencia!', 'El registro ya existe.!', 'warning')
                        }
                        else {
                            Swal.fire('Error!', 'El registro no Grabo.!', 'error')

                        }


                    }
                    if ($('#switch_cerrar_ventana').is(':checked')) {

                        // El interruptor está marcado
                        $('#modal_nuevo_serie').modal('hide');
                    } else {
                        BUSCAR_PARTIDAS();
                    }
                    $('body').removeClass('loading'); //Removemos la clase loading
                    BUSCAR_SERIE();

                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    var error = eval("(" + XMLHttpRequest.responseText + ")");
                    alert(error.Message);
                }
            });

        }
    });

    $("#btnActualizar").click(function (e) {


        var ajax_data_val = { "DAM": $("#txtDAM").val() };

        $.ajax({
            type: "POST",
            url: '../ServiciosWeb/SW_DAM.asmx/Validar_Eliminar_DAM',
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
                    toastr.warning('No se puede eliminar la DAM, existen guias asociadas.!', "Validación del Sistema.. !");

                }
                else {

                    var resultado_validacion = validar_input_vacios();
                    if (resultado_validacion == 0) {

                        var DAM = $("#txtDAM").val();
                        var CLIENTE = $("#ddlcliente").val();
                        var COMPAÑIA = $("#ddlcompañia").val();
                        var ESTADO = $("#ddlestado").val();

                        var ajax_data = {
                            "DAM": DAM,
                            "CLIENTE": CLIENTE,
                            "COMPAÑIA": COMPAÑIA,
                            "ESTADO": ESTADO
                        };

                        $.ajax({
                            type: "POST",
                            url: '../ServiciosWeb/SW_DAM.asmx/Actualizar_DAM',
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

                                    Swal.fire('Excelente!', 'El registro se Actualizó Satisfactoriamente.!', 'success')
                                }

                                else {

                                    Swal.fire('Error!', 'El registro no Actualizó.!', 'error')
                                    $('#modal_nuevo').modal('hide');
                                }
                                $('body').removeClass('loading'); //Removemos la clase loading
                                BUSCAR_DAM();
                            },
                            error: function (XMLHttpRequest, textStatus, errorThrown) {
                                var error = eval("(" + XMLHttpRequest.responseText + ")");
                                alert(error.Message);
                            }
                        });

                    }

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
    $("#btnActualizar_Serie").click(function (e) {

        var resultado_validacion = validar_input_vacios_serie();

        if (resultado_validacion == 0) {

            var DAM = $("#txtDAM_Serie_popup").val();
            var SERIE = $("#txtserie").val();
            var PARTIDA = $("#ddlpartida_serie").val();
            var ESTADO = $("#ddlestado_serie").val();

            var ajax_data = {
                "DAM": DAM,
                "SERIE": SERIE,
                "PARTIDA": PARTIDA,
                "ESTADO": ESTADO

            };

            $.ajax({
                type: "POST",
                url: '../ServiciosWeb/SW_DAM.asmx/Actualizar_Serie',
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



                        Swal.fire('Excelente!', 'El registro se Actualizó Satisfactoriamente.!', 'success')
                    }

                    else {

                        Swal.fire('Error!', 'El registro no Actualizó.!', 'error')

                    }
                    $('body').removeClass('loading'); //Removemos la clase loading
                    BUSCAR_SERIE();
                    $('#modal_nuevo_serie').modal('hide');
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    var error = eval("(" + XMLHttpRequest.responseText + ")");
                    alert(error.Message);
                }
            });

        }

    });


    $(document).on('click', '.serie', function (e) {



        var NRO_DAM = $(this).parents("tr").find("td").eq(1).html();
        var DESCRIPCION_CLIENTE = $(this).parents("tr").find("td").eq(2).html();

        $("#txtnroDAM_Serie").val(NRO_DAM);
        $("#txtCliente_Serie").val(DESCRIPCION_CLIENTE);

        $(".tab-pane").removeClass("active");
        $("#tab-2").addClass("active");
        $("#tab1").removeClass("active");
        $("#tab2").addClass("active");

        $('a[data-toggle="tab"][href="#tab-1"]').attr('aria-expanded', 'false');
        $('a[data-toggle="tab"][href="#tab-2"]').attr('aria-expanded', 'true');

        BUSCAR_SERIE();


    });

    function validar_input_vacios() {
        /*Eliminar las clases de error*/
        $("#ddlcompañia").removeClass('error_campo_vacio');
        $("#txtDAM").removeClass('error_campo_vacio');
        $('#ddlcliente').next('.select2-container').find('.select2-selection').removeClass('error_campo_vacio');

        var validar = 0;

        if ($("#txtDAM").val() == '') {
            validar = 1;
            toastr.warning('El Campo <b> DAM </b> no debe estar vacio.!', "Validación del Sistema.. !");

            $("#txtDAM").addClass('error_campo_vacio');
            return validar;
        } else { $("#txtDAM").removeClass('error_campo_vacio'); }


        if ($("#ddlcompañia").val() == '') {
            validar = 1;

            toastr.warning('El Campo <b> Compañia </b> no debe estar vacio.!', "Validación del Sistema.. !");
            $("#ddlcompañia").addClass('error_campo_vacio');
            return validar;
        }
        else { $("#ddlcompañia").removeClass('error_campo_vacio'); }
        if ($("#ddlcliente").val() == 0) {
            validar = 1;
            toastr.warning('El Campo <b> Cliente </b> no debe estar vacio.!', "Validación del Sistema.. !");
            /* $(".select2-container").addClass('error_campo_vacio');*/
            $('#ddlcliente').next('.select2-container').find('.select2-selection').addClass('error_campo_vacio');
            return validar;
        }
        else { $("#ddlcliente").removeClass('error_campo_vacio'); }




        return validar;
    }
    function validar_input_vacios_serie() {

        $("#txtDAM_Serie_popup").removeClass('error_campo_vacio');
        $("#txtserie").removeClass('error_campo_vacio');
        $("#txtpartida").removeClass('error_campo_vacio');

        var validar = 0;

        if ($("#txtDAM_Serie_popup").val() == '') {
            validar = 1;
            toastr.warning('El Campo <b> DAM </b> no debe estar vacio.!', "Validación del Sistema.. !");

            $("#txtDAM_Serie_popup").addClass('error_campo_vacio');
            return validar;
        } else { $("#txtDAM_Serie_popup").removeClass('error_campo_vacio'); }


        if ($("#txtserie").val() == '') {
            validar = 1;

            toastr.warning('El Campo <b> Serie </b> no debe estar vacio.!', "Validación del Sistema.. !");
            $("#txtserie").addClass('error_campo_vacio');
            return validar;
        }
        else { $("#txtserie").removeClass('error_campo_vacio'); }

       
        if ($("#txtpartida").val() == '') {
            validar = 1;

            toastr.warning('El Campo <b> Partida </b> no debe estar vacio.!', "Validación del Sistema.. !");
            $("#txtpartida").addClass('error_campo_vacio');
            return validar;
        }
        else { $("#txtpartida").removeClass('error_campo_vacio'); }


        return validar;
    }
    function BUSCAR_SERIE() {


        var NRO_DAM = $('#txtnroDAM_Serie').val();

        var Tabla_Serie_DAM = $('#Tabla_Serie_DAM').DataTable();
        Tabla_Serie_DAM.clear().draw();

        var ajax_data = { "NRO_DAM": NRO_DAM };
        $.ajax({
            type: "POST",
            url: '../ServiciosWeb/SW_DAM.asmx/Buscar_Serie',
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



                    $('#Tabla_Serie_DAM').DataTable({
                        destroy: true,
                        columnDefs: [
                            { className: 'text-center', targets: [0, 1, 2, 3, 4,5,6,7,8] }
                        ],
                        data: datos.map(function (item) {
                            return [
                                item.SERIE,
                                item.NROPAR,
                                item.CODIGO_ARTICULO,
                                item.DESCRIPCION_ARTICULO,
                                item.DESCRIPCION_COLOR,
                                item.TIPO_ARTICULO,
                                item.CODIGO_COLOR,
                                item.ESTADO,
                               
                                "<img src='../img/ELIMINAR.png' class='eliminar_Serie' style='width:20px;height:20px'/>"
                            ];
                        }),
                        columns: [
                            { title: 'SERIE' },
                            { title: 'NRO PARTIDA' },
                            { title: 'COD. ART' },
                            { title: 'ARTICULO' },
                            { title: 'COLOR' },
                            { title: 'TIPO ARTICULO', visible: false },
                            { title: 'COD COLOR', visible: false },
                            { title: 'ESTADO' },
                             { title: 'ELIMINAR' }
                        ]
                    });

                }
                $('body').removeClass('loading'); //Removemos la clase loading
                $('#Tabla_Serie_DAM').removeAttr('style');
                $("#Tabla_Serie_DAM").show();
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                var error = eval("(" + XMLHttpRequest.responseText + ")");
                // alert(error.Message);
                swal("Error!", "Por favor, prueba los pasos siguientes: <b></br>1.      Cierre todas sus sesiones y vuelva a ingresar al sistema. </br>2.      Compruebe su conexión a Internet.</br> 3.      Reinicie su equipo.</br> 4.      En caso no resuelva la situación, envíe un correo a sistemas <b/> ", "error");
            }
        });


    }

    $("#btncerrar").click(function (e) {

        window.location.href = "Principal.aspx";

    });

    /****************************************** TAB 3 - GUIAS *************************************************************** */

    $(document).on('click', '.guia', function (e) {

        var NRO_DAM = $(this).parents("tr").find("td").eq(1).html();
        var DESCRIPCION_CLIENTE = $(this).parents("tr").find("td").eq(2).html();

        $("#txtnroDAM_guia").val(NRO_DAM);
        $("#txtCliente_guia").val(DESCRIPCION_CLIENTE);

        $(".tab-pane").removeClass("active");
        $("#tab-3").addClass("active");
        $("#tab1").removeClass("active");
        $("#tab2").removeClass("active");
        $("#tab3").addClass("active");

        $('a[data-toggle="tab"][href="#tab-1"]').attr('aria-expanded', 'false');
        $('a[data-toggle="tab"][href="#tab-2"]').attr('aria-expanded', 'false');
        $('a[data-toggle="tab"][href="#tab-3"]').attr('aria-expanded', 'true');

        var ajax_data = {
            "DAM": NRO_DAM
        };
        $.ajax({
            type: "POST",
            url: '../ServiciosWeb/SW_DAM.asmx/Obtener_DAM',
            data: JSON.stringify(ajax_data),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: true,
            success: function (respuesta) {
                var datos = (typeof respuesta.d) == 'string' ?
                    eval('(' + respuesta.d + ')') :
                    respuesta.d;

                for (var i = 0; i < datos.length; i++) {

                    $("#txtcod_Cliente_guia").val(datos[i].CODCLI);

                }

                var ajax_data2 = {
                    "COD_CLIENTE": $("#txtcod_Cliente_guia").val()
                };

                $.ajax({
                    type: "POST",
                    url: '../ServiciosWeb/SW_DAM.asmx/Obtener_Guias_Cliente',
                    data: JSON.stringify(ajax_data2),
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    async: true,
                    success: function (respuesta) {
                        var datos = (typeof respuesta.d) == 'string' ?
                            eval('(' + respuesta.d + ')') :
                            respuesta.d;
                        $('#completed').empty();
                        $('#todo').empty();
                        for (var i = 0; i < datos.length; i++) {


                            if (datos[i].DAM == NRO_DAM) {
                                $("#todo").append(

                                    '<li class= "warning-element" id = "' + datos[i].CODIGO_COMPLETO_GUIA + '" >' +
                                    '<i class="fa fa-building-o"></i> <span>' + datos[i].DESCRIPCION_CIA + '</span>' +
                                    '<br/>Factura : <span>' + datos[i].NUMERO_FACTURA + '</span>' +
                                    '<br/> <span style="font-weight: bold;">Guia : </span><span style="font-weight: bold;">' + datos[i].SERIE_GUIA + '-' + datos[i].NUMERO_GUIA + '</span>' +
                                    '<div class="agile-detail">' +
                                    '<a href="#" class="val_guia pull-right btn btn-xs btn-primary">Ver Validacion</a>' +
                                    '<i class="fa fa-clock-o"></i> <span>' + datos[i].FECHA_EMISION_GUIA + '</span>' +
                                    '</div>' +
                                    '</li>');
                            }
                            else {
                                $("#completed").append(

                                    '<li class= "warning-element" id = "' + datos[i].CODIGO_COMPLETO_GUIA + '" >' +
                                    '<i class="fa fa-building-o"></i> <span>' + datos[i].DESCRIPCION_CIA + '</span>' +
                                    '<br/>Factura : <span>' + datos[i].NUMERO_FACTURA + '</span>' +
                                    '<br/> <span style="font-weight: bold;">Guia : </span><span style="font-weight: bold;">' + datos[i].SERIE_GUIA + '-' + datos[i].NUMERO_GUIA + '</span>' +
                                    '<div class="agile-detail">' +
                                    '<a href="#" class="val_guia pull-right btn btn-xs btn-primary">Ver Validacion</a>' +
                                    '<i class="fa fa-clock-o"></i> <span>' + datos[i].FECHA_EMISION_GUIA + '</span>' +
                                    '</div>' +
                                    '</li>');
                            }




                        }
                        actualizarVariableTodo();

                    },
                    error: function (XMLHttpRequest, textStatus, errorThrown) {
                        var error = eval("(" + XMLHttpRequest.responseText + ")");
                        alert(error.Message);
                    }
                });


            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                var error = eval("(" + XMLHttpRequest.responseText + ")");
                alert(error.Message);
            }
        });


    });
    function actualizarVariableTodo() {
        var todo = $("#todo").sortable("toArray");
        var inprogress = $("#inprogress").sortable("toArray");
        var completed = $("#completed").sortable("toArray");

        $("#txt_guia_Asignada").val(todo);

        if (todo.length > 2) {
            toastr.warning('Solo se permite asignar <b> 2 Guias </b> a la DAM.!', "Validación del Sistema.. !");
            $(this).sortable("cancel");
        }

        $('.output').html("ToDo: " + window.JSON.stringify(todo) + "<br/>" + "In Progress: " + window.JSON.stringify(inprogress) + "<br/>" + "Completed: " + window.JSON.stringify(completed));
    }



    $("#todo").sortable({
        connectWith: ".connectList",
        scroll: false,
        receive: function (event, ui) {

            var elemento = ui.item.attr("id");
            var todo = $("#todo").sortable("toArray");

            if (todo.length > 2) {
                toastr.warning('Solo se permite asignar <b> 2 Guias </b> a la DAM.!', "Validación del Sistema.. !");
                $(ui.sender).sortable("cancel");
            }

            else {

                $('#txtnroDAM_guia_validacion').val('');
                $('#txtGuia_validacion').val('');
                $('#txtCliente_guia_validacion').val('');
                $('#txtGuia_validacion_cia').val('');
                $('#txtGuia_validacion_anio').val('');
                $('#txtGuia_validacion_serie').val('');
                $('#txtGuia_validacion_numero').val('');

                var nro_dam = $("#txtnroDAM_guia").val();

                var guias = elemento.split(','); // Separar los valores por comas
                var codigoCompania;
                var anio;
                var serieGuia;
                var numeroGuia;
                var ListaNumeroGuias = [];
                for (var i = 0; i < guias.length; i++) {
                    var guia = guias[i];
                    var datosGuia = guia.split('-'); // Separar los valores por guiones

                    codigoCompania = datosGuia[0];
                    anio = datosGuia[1];
                    serieGuia = datosGuia[2];
                    numeroGuia = datosGuia[3];
                }
               
                var Tabla_Validar_DAM = $('#Tabla_Validar_DAM').DataTable();
                Tabla_Validar_DAM.clear().draw();
                var COMPAÑIA_GUIA = codigoCompania;
                var AÑO_GUIA = anio;
                var SERIE_GUIA = serieGuia;
                var NRO_GUIA = numeroGuia;
                var NRO_DAM = $("#txtnroDAM_guia").val();
                var CLIENTE = $("#txtCliente_guia").val();
                $('#txtnroDAM_guia_validacion').val(NRO_DAM);
                $('#txtGuia_validacion').val(serieGuia + '-' + numeroGuia);
                $('#txtCliente_guia_validacion').val(CLIENTE);
                $('#txtGuia_validacion_cia').val(codigoCompania);
                $('#txtGuia_validacion_anio').val(anio);
                $('#txtGuia_validacion_serie').val(serieGuia);
                $('#txtGuia_validacion_numero').val(numeroGuia);

                var ajax_data = {
                    "COMPAÑIA_GUIA": COMPAÑIA_GUIA,
                    "AÑO_GUIA": AÑO_GUIA,
                    "SERIE_GUIA": SERIE_GUIA,
                    "NRO_GUIA": NRO_GUIA,
                    "NRO_DAM": NRO_DAM,
                };

                $.ajax({
                    type: "POST",
                    url: '../ServiciosWeb/SW_DAM.asmx/Validar_Guia_Dam',
                    data: JSON.stringify(ajax_data),
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    async: true,
                    beforeSend: function () {
                        $('body').addClass('loading');
                    },
                    success: function (respuesta) {
                        var datos = (typeof respuesta.d) == 'string' ?
                            JSON.parse(respuesta.d) :
                            respuesta.d;


                        for (var i = 0; i < datos.length; i++) {



                            $('#Tabla_Validar_DAM').DataTable({
                                destroy: true,
                                columnDefs: [
                                    { className: 'text-center', targets: [0, 1, 2, 3, 4] }
                                ],
                                data: datos.map(function (item) {
                                    return [
                                        item.SERIE_PEDIDO + '-' + item.NUMERO_PEDIDO,
                                        item.CODIGO_ARTICULO,
                                        item.PARTIDA_VALIDAR,
                                        item.DAM_PARTIDA_VALIDAR,
                                        obtenerContenidoValidar(item.DAM_PARTIDA_VALIDAR)


                                    ];
                                }),
                                columns: [
                                    { title: 'PEDIDO' },
                                    { title: 'ARTICULO' },
                                    { title: 'PARTIDA' },
                                    { title: 'TIENE PARTIDA' },
                                    { title: 'COMPLETADO' }

                                ]
                            });

                        }

                        /*Guardar*/
                        var NRO_GUIA_COMPLETO = $('#txtGuia_validacion').val();
                        var NRO_DAM = $('#txtnroDAM_guia_validacion').val();
                        var NRO_CIA_GUIA = $('#txtGuia_validacion_cia').val();
                        var ANO_GUIA = $('#txtGuia_validacion_anio').val();
                        var SERIE_GUIA = $('#txtGuia_validacion_serie').val();
                        var NRO_GUIA = $('#txtGuia_validacion_numero').val();
                        var tabla = $('#Tabla_Validar_DAM').DataTable();
                        var contieneNo = tabla.column(3).data().toArray().some(function (valor) {
                            return valor === 'NO';
                        });


                        if (contieneNo == true) {

                            Swal.fire({
                                title: 'Advertencia..!',
                                html: "<span style='font-weight:500;'>No se puede asignar la <span style='font-weight: bold;'> Guia : " + NRO_GUIA_COMPLETO + " a la DAM : " + NRO_DAM + "</span>, No termino el proceso de validación satisfactoriamente.</span>",
                                type: 'warning'

                            });
                            $('#modal_validacion').modal().addClass('animated bounceInLeft');
                            $(ui.sender).sortable("cancel");
                            // Restablecer el padding-right manualmente después de cancelar
                          
                        }

                        else {
                            var NRO_GUIA_COMPLETO = $('#txtGuia_validacion').val();
                            var NRO_DAM = $('#txtnroDAM_guia_validacion').val();

                            var ajax_data = {
                                "NRO_CIA_GUIA": NRO_CIA_GUIA,
                                "ANO_GUIA": ANO_GUIA,
                                "SERIE_GUIA": SERIE_GUIA,
                                "NRO_GUIA": NRO_GUIA,
                                "NRO_DAM": NRO_DAM,
                            };

                            $.ajax({
                                type: "POST",
                                url: '../ServiciosWeb/SW_DAM.asmx/Grabar_DAM_Guia',
                                data: JSON.stringify(ajax_data),
                                contentType: "application/json; charset=utf-8",
                                dataType: "json",
                                async: true,
                                beforeSend: function () {
                                    $('body').addClass('loading');
                                },
                                success: function (respuesta) {
                                    var num = respuesta.d;
                                    if (num == -1) {

                                        Swal.fire('Excelente!', 'El registro se Grabo Satisfactoriamente.!', 'success')
                                    }


                                    $('body').removeClass('loading'); //Removemos la clase loading
                                },
                                error: function (XMLHttpRequest, textStatus, errorThrown) {
                                    var error = eval("(" + XMLHttpRequest.responseText + ")");
                                    alert(error.Message);
                                }
                            });
                        }

                        /*Fin - Guardar*/
                       
                        $('body').removeClass('loading'); //Removemos la clase loading
                     
                    },
                    error: function (XMLHttpRequest, textStatus, errorThrown) {
                        var error = eval("(" + XMLHttpRequest.responseText + ")");
                        // alert(error.Message);
                        swal("Error!", "Por favor, prueba los pasos siguientes: <b></br>1.      Cierre todas sus sesiones y vuelva a ingresar al sistema. </br>2.      Compruebe su conexión a Internet.</br> 3.      Reinicie su equipo.</br> 4.      En caso no resuelva la situación, envíe un correo a sistemas <b/> ", "error");
                    }
                });






            }
        },
        update: function (event, ui) {
            var todo = $("#todo").sortable("toArray");
            var inprogress = $("#inprogress").sortable("toArray");
            var completed = $("#completed").sortable("toArray");

            $("#txt_guia_Asignada").val(todo);

            $('.output').html("ToDo: " + window.JSON.stringify(todo) + "<br/>" + "In Progress: " + window.JSON.stringify(inprogress) + "<br/>" + "Completed: " + window.JSON.stringify(completed));
        }
    }).disableSelection();

    $("#completed").sortable({
        connectWith: ".connectList",
        scroll: false,

        receive: function (event, ui) {
            var elemento = ui.item.attr("id");
            var completed = $("#completed").sortable("toArray");
            var nro_dam = $("#txtnroDAM_guia").val();
            var guias = elemento.split(','); // Separar los valores por comas
            var codigoCompania;
            var anio;
            var serieGuia;
            var numeroGuia;
            var NumeroGuiaCompleto;

            for (var i = 0; i < guias.length; i++) {
                var guia = guias[i];
                var datosGuia = guia.split('-'); // Separar los valores por guiones

                codigoCompania = datosGuia[0];
                anio = datosGuia[1];
                serieGuia = datosGuia[2];
                numeroGuia = datosGuia[3];
            }
            NumeroGuiaCompleto = serieGuia + ' - ' + numeroGuia;
            var ajax_data_serie = {
                "NRO_CIA_GUIA": codigoCompania,
                "ANO_GUIA": anio,
                "SERIE_GUIA": serieGuia,
                "NRO_GUIA": numeroGuia,
                "NRO_DAM": nro_dam
            };
           
            $.ajax({
                type: "POST",
                url: '../ServiciosWeb/SW_DAM.asmx/Validar_Guias_Series',
                data: JSON.stringify(ajax_data_serie),
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                async: true,
                beforeSend: function () {
                    $('body').addClass('loading');
                },
                success: function (respuesta) {
                   var  cantidad = (typeof respuesta.d) == 'string' ?
                        eval('(' + respuesta.d + ')') :
                        respuesta.d;

                   
                    

                    if (cantidad > 0)
                    {
                        toastr.warning('No se puede desasociar la Guia, existen series asociadas.!', "Validación del Sistema.. !");
                        $(ui.sender).sortable("cancel");
                    }
                    else {
                        
                                   var ajax_data = {
                                       "NRO_CIA_GUIA": codigoCompania,
                                       "ANO_GUIA": anio,
                                       "SERIE_GUIA": serieGuia,
                                       "NRO_GUIA": numeroGuia,
                                       "NRO_DAM": nro_dam
                                   };
                       
                                   Swal.fire({
                                       title: 'Advertencia',
                                       html: "¿Estás seguro de liberar la DAM : <b>" + nro_dam + "</b> de la Guia : <b>" + NumeroGuiaCompleto + "</b>?",
                                       type: 'warning',
                                       showCancelButton: true,
                                       confirmButtonText: 'Sí',
                                       cancelButtonText: 'No'
                                   }).then((result) => {
                                       if (result.value) {
                                           // Si el usuario hace clic en "Sí", ejecutar la acción AJAX
                       
                                           $.ajax({
                                               type: "POST",
                                               url: '../ServiciosWeb/SW_DAM.asmx/Liberar_DAM_Guia',
                                               data: JSON.stringify(ajax_data),
                                               contentType: "application/json; charset=utf-8",
                                               dataType: "json",
                                               async: true,
                                               beforeSend: function () {
                                                   $('body').addClass('loading');
                                               },
                                               success: function (respuesta) {
                                                   var num = respuesta.d;
                                                   if (num == -1) {
                       
                                                       Swal.fire('Excelente!', 'El registro se Libero Satisfactoriamente.!', 'success')
                                                   }
                       
                       
                                                   $('body').removeClass('loading'); //Removemos la clase loading
                                               },
                                               error: function (XMLHttpRequest, textStatus, errorThrown) {
                                                   var error = eval("(" + XMLHttpRequest.responseText + ")");
                                                   alert(error.Message);
                                               }
                                           });
                       
                                       } else if (result.dismiss === Swal.DismissReason.cancel) {
                                           $(ui.sender).sortable("cancel");}
                       
                       
                                   });
                                   

                    }

                    $('body').removeClass('loading'); //Removemos la clase loading
                  
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    var error = eval("(" + XMLHttpRequest.responseText + ")");
                    // alert(error.Message);
                    swal("Error!", "Por favor, prueba los pasos siguientes: <b></br>1.      Cierre todas sus sesiones y vuelva a ingresar al sistema. </br>2.      Compruebe su conexión a Internet.</br> 3.      Reinicie su equipo.</br> 4.      En caso no resuelva la situación, envíe un correo a sistemas <b/> ", "error");
                }
            });

        },
        update: function (event, ui) {

        }
    }).disableSelection();

 

    //$("#btnAsignar_Guia").click(function (e) {

    //    var valor = $("#txt_guia_Asignada").val();
    //    var nro_dam = $("#txtnroDAM_guia").val();


    //    if (valor == "")
    //    {

    //        Swal.fire({
    //            title: 'Advertencia',
    //            html: "¿Estás seguro de liberar la DAM <b>" + nro_dam +"</b> ?",
    //            type: 'warning',
    //            showCancelButton: true,
    //            confirmButtonText: 'Sí',
    //            cancelButtonText: 'No'
    //        }).then((result) => {
    //            if (result.value) {
    //                // Si el usuario hace clic en "Sí", ejecutar la acción AJAX
    //                var ajax_data = {"NRO_DAM": nro_dam};
    //                $.ajax({
    //                    type: "POST",
    //                    url: '../ServiciosWeb/SW_DAM.asmx/Liberar_DAM_Guia',
    //                    data: JSON.stringify(ajax_data),
    //                    contentType: "application/json; charset=utf-8",
    //                    dataType: "json",
    //                    async: true,
    //                    beforeSend: function () {
    //                        $('body').addClass('loading');
    //                    },
    //                    success: function (respuesta) {
    //                        var num = respuesta.d;
    //                        if (num == -1) {

    //                            Swal.fire('Excelente!', 'El registro se Grabo Satisfactoriamente.!', 'success')
    //                        }


    //                        $('body').removeClass('loading'); //Removemos la clase loading
    //                    },
    //                    error: function (XMLHttpRequest, textStatus, errorThrown) {
    //                        var error = eval("(" + XMLHttpRequest.responseText + ")");
    //                        alert(error.Message);
    //                    }
    //                });

    //            } else if (result.dismiss === Swal.DismissReason.cancel) {
    //                // Si el usuario hace clic en "No" o cierra el modal, no hacer nada
    //                // Puedes agregar código adicional aquí si es necesario
    //            }
    //        });
    //    }

    //    else {
    //        var guias = valor.split(','); // Separar los valores por comas
    //        var codigoCompania;
    //        var anio;
    //        var serieGuia;
    //        var numeroGuia;
    //        var ListaNumeroGuias = [];
    //        for (var i = 0; i < guias.length; i++) {
    //            var guia = guias[i];
    //            var datosGuia = guia.split('-'); // Separar los valores por guiones

    //            codigoCompania = datosGuia[0];
    //            anio = datosGuia[1];
    //            serieGuia = datosGuia[2];
    //            numeroGuia = datosGuia[3];

    //            ListaNumeroGuias.push(numeroGuia);

    //        }
    //        var numeroGuiasComa = ListaNumeroGuias.join(',');
    //        var Tabla_Validar_DAM = $('#Tabla_Validar_DAM').DataTable();
    //        Tabla_Validar_DAM.clear().draw();
    //        var COMPAÑIA_GUIA = codigoCompania;
    //        var AÑO_GUIA = anio;
    //        var SERIE_GUIA = serieGuia;
    //        var NRO_GUIA = ListaNumeroGuias;
    //        var NRO_DAM = $("#txtnroDAM_guia").val();
    //        var CLIENTE = $("#txtCliente_guia").val();
    //        $('#txtnroDAM_guia_validacion').val(NRO_DAM);
    //       /* $('#txtGuia_validacion').val(serieGuia + '-' + numeroGuia);*/
    //        $('#txtGuia_validacion').val(numeroGuiasComa); 
    //        $('#txtCliente_guia_validacion').val(CLIENTE);
    //        $('#txtGuia_validacion_cia').val(codigoCompania);
    //        $('#txtGuia_validacion_anio').val(anio);
    //        $('#txtGuia_validacion_serie').val(serieGuia);
    //        $('#txtGuia_validacion_numero').val(numeroGuia);

    //        var ajax_data = {
    //            "COMPAÑIA_GUIA": COMPAÑIA_GUIA,
    //            "AÑO_GUIA": AÑO_GUIA,
    //            "SERIE_GUIA": SERIE_GUIA,
    //            "NROS_GUIA": ListaNumeroGuias,
    //            "NRO_DAM": NRO_DAM,
    //        };

    //        $.ajax({
    //            type: "POST",
    //            url: '../ServiciosWeb/SW_DAM.asmx/Validar_Guia_Dam',
    //            data: JSON.stringify(ajax_data),
    //            contentType: "application/json; charset=utf-8",
    //            dataType: "json",
    //            async: true,
    //            beforeSend: function () {
    //                $('body').addClass('loading');
    //            },
    //            success: function (respuesta) {
    //                var datos = (typeof respuesta.d) == 'string' ?
    //                    eval('(' + respuesta.d + ')') :
    //                    respuesta.d;

    //                for (var i = 0; i < datos.length; i++) {



    //                    $('#Tabla_Validar_DAM').DataTable({
    //                        destroy: true,
    //                        columnDefs: [
    //                            { className: 'text-center', targets: [0, 1, 2, 3, 4] }
    //                        ],
    //                        data: datos.map(function (item) {
    //                            return [
    //                                item.SERIE_PEDIDO + '-' + item.NUMERO_PEDIDO,
    //                                item.CODIGO_ARTICULO,
    //                                item.PARTIDA_VALIDAR,
    //                                item.DAM_PARTIDA_VALIDAR,
    //                                obtenerContenidoValidar(item.DAM_PARTIDA_VALIDAR)


    //                            ];
    //                        }),
    //                        columns: [
    //                            { title: 'PEDIDO' },
    //                            { title: 'ARTICULO' },
    //                            { title: 'PARTIDA' },
    //                            { title: 'TIENE PARTIDA' },
    //                            { title: 'COMPLETADO' }

    //                        ]
    //                    });

    //                }

    //                $('body').removeClass('loading'); //Removemos la clase loading
    //                $('#modal_validacion').modal().addClass('animated rotateInUpRight');
    //            },
    //            error: function (XMLHttpRequest, textStatus, errorThrown) {
    //                var error = eval("(" + XMLHttpRequest.responseText + ")");
    //                // alert(error.Message);
    //                swal("Error!", "Por favor, prueba los pasos siguientes: <b></br>1.      Cierre todas sus sesiones y vuelva a ingresar al sistema. </br>2.      Compruebe su conexión a Internet.</br> 3.      Reinicie su equipo.</br> 4.      En caso no resuelva la situación, envíe un correo a sistemas <b/> ", "error");
    //            }
    //        });

    //    }







    //});

    function obtenerContenidoValidar(damPartidaValidar) {
        if (damPartidaValidar === 'SI') {
            return "<img src='../img/bien.png'  style='width:20px;height:20px' />";
        } else {
            return "<img src='../img/warning.png'  style='width:20px;height:20px' />";
        }
    }




    $("#btnGuardar_Guia").click(function (e) {
        var NRO_GUIA_COMPLETO = $('#txtGuia_validacion').val();
        var NRO_DAM = $('#txtnroDAM_guia_validacion').val();
        var NRO_CIA_GUIA = $('#txtGuia_validacion_cia').val();
        var ANO_GUIA = $('#txtGuia_validacion_anio').val();
        var SERIE_GUIA = $('#txtGuia_validacion_serie').val();
        var NRO_GUIA = $('#txtGuia_validacion_numero').val();

        // Obtener la instancia del DataTable
        var tabla = $('#Tabla_Validar_DAM').DataTable();

        var contieneNo = tabla.column(3).data().toArray().some(function (valor) {
            return valor === 'NO';
        });

        if (contieneNo == true) {
            Swal.fire({
                title: 'Advertencia..!',
                html: "<span style='font-weight:500;'>No se puede asignar la <span style='font-weight: bold;'> Guia : " + NRO_GUIA_COMPLETO + " a la DAM : " + NRO_DAM + "</span>, No termino el proceso de validación satisfactoriamente.</span>",
                type: 'warning'

            });
        }

        else {
            var NRO_GUIA_COMPLETO = $('#txtGuia_validacion').val();
            var NRO_DAM = $('#txtnroDAM_guia_validacion').val();

            var ajax_data = {
                "NRO_CIA_GUIA": NRO_CIA_GUIA,
                "ANO_GUIA": ANO_GUIA,
                "SERIE_GUIA": SERIE_GUIA,
                "NRO_GUIA": NRO_GUIA_COMPLETO,
                "NRO_DAM": NRO_DAM,
            };

            $.ajax({
                type: "POST",
                url: '../ServiciosWeb/SW_DAM.asmx/Grabar_DAM_Guia',
                data: JSON.stringify(ajax_data),
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                async: true,
                beforeSend: function () {
                    $('body').addClass('loading');
                },
                success: function (respuesta) {
                    var num = respuesta.d;
                    if (num == -1) {

                        Swal.fire('Excelente!', 'El registro se Grabo Satisfactoriamente.!', 'success')
                    }


                    $('body').removeClass('loading'); //Removemos la clase loading
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    var error = eval("(" + XMLHttpRequest.responseText + ")");
                    alert(error.Message);
                }
            });
        }




    });

    $(document).on('click', '.val_guia', function (e) {

        $('#txtnroDAM_guia_validacion').val('');
        $('#txtGuia_validacion').val('');
        $('#txtCliente_guia_validacion').val('');
        $('#txtGuia_validacion_cia').val('');
        $('#txtGuia_validacion_anio').val('');
        $('#txtGuia_validacion_serie').val('');
        $('#txtGuia_validacion_numero').val('');

        var liId = $(this).closest('li').attr('id');

        var NRO_DAM = $("#txtnroDAM_guia").val();
        var CLIENTE = $("#txtCliente_guia").val();
      
        var guias = liId.split(','); // Separar los valores por comas
        var codigoCompania;
        var anio;
        var serieGuia;
        var numeroGuia;
        var ListaNumeroGuias = [];
        for (var i = 0; i < guias.length; i++) {
            var guia = guias[i];
            var datosGuia = guia.split('-'); // Separar los valores por guiones

            codigoCompania = datosGuia[0];
            anio = datosGuia[1];
            serieGuia = datosGuia[2];
            numeroGuia = datosGuia[3];
        }


        $('#txtnroDAM_guia_validacion').val(NRO_DAM);
        $('#txtGuia_validacion').val(serieGuia + '-' + numeroGuia);
        $('#txtCliente_guia_validacion').val(CLIENTE);
        $('#txtGuia_validacion_cia').val(codigoCompania);
        $('#txtGuia_validacion_anio').val(anio);
        $('#txtGuia_validacion_serie').val(serieGuia);
        $('#txtGuia_validacion_numero').val(numeroGuia);



        var ajax_data = {
            "COMPAÑIA_GUIA": codigoCompania,
            "AÑO_GUIA": anio,
            "SERIE_GUIA": serieGuia,
            "NRO_GUIA": numeroGuia,
            "NRO_DAM": NRO_DAM,
        };

        $.ajax({
            type: "POST",
            url: '../ServiciosWeb/SW_DAM.asmx/Validar_Guia_Dam',
            data: JSON.stringify(ajax_data),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: true,
            beforeSend: function () {
                $('body').addClass('loading');
            },
            success: function (respuesta) {
                var datos = (typeof respuesta.d) == 'string' ?
                    JSON.parse(respuesta.d) :
                    respuesta.d;


                for (var i = 0; i < datos.length; i++) {



                    $('#Tabla_Validar_DAM').DataTable({
                        destroy: true,
                        columnDefs: [
                            { className: 'text-center', targets: [0, 1, 2, 3, 4] }
                        ],
                        data: datos.map(function (item) {
                            return [
                                item.SERIE_PEDIDO + '-' + item.NUMERO_PEDIDO,
                                item.CODIGO_ARTICULO,
                                item.PARTIDA_VALIDAR,
                                item.DAM_PARTIDA_VALIDAR,
                                obtenerContenidoValidar(item.DAM_PARTIDA_VALIDAR)


                            ];
                        }),
                        columns: [
                            { title: 'PEDIDO' },
                            { title: 'ARTICULO' },
                            { title: 'PARTIDA' },
                            { title: 'TIENE PARTIDA' },
                            { title: 'COMPLETADO' }

                        ]
                    });

                }
                $('#modal_validacion').modal().addClass('animated bounceInLeft');
              
                $('body').removeClass('loading'); //Removemos la clase loading
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                var error = eval("(" + XMLHttpRequest.responseText + ")");
                // alert(error.Message);
                swal("Error!", "Por favor, prueba los pasos siguientes: <b></br>1.      Cierre todas sus sesiones y vuelva a ingresar al sistema. </br>2.      Compruebe su conexión a Internet.</br> 3.      Reinicie su equipo.</br> 4.      En caso no resuelva la situación, envíe un correo a sistemas <b/> ", "error");
            }

        });
    });

    

});
