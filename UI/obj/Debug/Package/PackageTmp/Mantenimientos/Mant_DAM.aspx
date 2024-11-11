<%@ Page Title="" Language="C#" MasterPageFile="~/Mernu.Master" AutoEventWireup="true" CodeBehind="Mant_DAM.aspx.cs" Inherits="UI.Mantenimientos.Mant_DAM" %>
<asp:Content ID="Content1" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
        <div class="row wrapper border-bottom white-bg page-heading">
                <div class="col-lg-10">
                    <h2>Gestionar DAM de Exportación</h2>
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item">
                            <a href="../Principal.aspx">Inicio</a>
                        </li>
                        <li class="breadcrumb-item">
                            <a>Mantenimiento</a>
                        </li>
                        <li class="breadcrumb-item active">
                            <strong> DAM</strong>
                        </li>
                    </ol>
                </div>
                <div class="col-lg-2">

                </div>
            </div>
    <br />
     <div class="row">
                <div class="col-lg-12">
                    <div class="ibox ">
                        <div class="ibox-title">
                            <h5>Gestionar DAM de Exportación<small></small></h5>
                            <div class="ibox-tools">
                                <a class="collapse-link">
                                    <i class="fa fa-chevron-up"></i>
                                </a>
                               <%--  <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                                    <i class="fa fa-wrench"></i>
                                </a>
                               <ul class="dropdown-menu dropdown-user">
                                    <li><a href="#" class="dropdown-item">Config option 1</a>
                                    </li>
                                    <li><a href="#" class="dropdown-item">Config option 2</a>
                                    </li>
                                </ul>
                                <a class="close-link">
                                    <i class="fa fa-times"></i>
                                </a>--%>
                            </div>
                        </div>
                        <div class="ibox-content">
                                <div class="tabs-container">
                        <ul class="nav nav-tabs">
                            <li id="tab1"class="active"><a data-toggle="tab" href="#tab-1" aria-expanded="false"> DAM</a></li>
                            <li id="tab3" class="" ><a data-toggle="tab" href="#tab-2" aria-expanded="true" >Guia</a></li>
                            <li id="tab2" class="" ><a data-toggle="tab" href="#tab-2" aria-expanded="true" >Serie</a></li>
                        </ul>
                        <div class="tab-content">
                             <div id="tab-1" class="tab-pane active">
                                <div class="panel-body">
                                     <div class="row">
      
               <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
 
        <div class="row" style="margin:2px;text-align:center">
           
            
             <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12" style="text-align:right">
        

           
             <img  id="imgmas" src="../img/mas.png"  style="width:20px;height:20px"/>
             <strong id="btnnuevo">NUEVO</strong>
                
            
               

             </div>
            <hr/>
            </div>
        

                   <div class="row" style="margin: 2px">

                       <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                           Compañia :
              <select class="form-control" id="ddlcia_buscar" style="width: 100%;">
                          </select>

                           </div>

                       <div class="col-lg-2 col-md-2 col-sm-2 col-xs-12">
                           DAM :
                          <input type="text" class="form-control" id="txtDAM_buscar" />
                       </div>
                       <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                           Cliente :
                          <select class="form-control" id="ddlcliente_buscar" style="width: 100%;">
                          </select>
                       </div>
                       <div class="col-lg-2 col-md-2 col-sm-2 col-xs-12">
                           Estado : 
          <select class="form-control" id="ddlestado_buscar">

              <option value="0">ACTIVO</option>
              <option value="1">INACTIVO</option>

          </select>

                       </div>


                       <div class="col-lg-2 col-md-2 col-sm-2 col-xs-12">
                           <br />
                           <button id="btnbuscar" type="button" class="btn btn-warning" style="background-color: #1ab394; color: white; border-color: #1ab394">Buscar</button>
                       </div>

                   </div>
            <hr />

        <div class="row" style="margin:2px">
  
             <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12" >
        <div class="table-responsive"> 
 
                                 

            <table id="Tabla_DAM" class="table table-hover  table-striped compact nowrap" style="display:none" >
                <thead>
                    <tr>
                          <th>COMPAÑIA</th>
                          <th>DAM</th>  
                        <th>CLIENTE</th>  
                          <th>ESTADO</th>  
                        <th>GUIA</th>  
                         <th>SERIE</th> 
                          <th>EDITAR</th>
                          <th>ELIMINAR</th>
                      
                    </tr>
                 </thead>
               
            </table>

                </div>   


             </div> 
       </div>
       
             

             </div>
                                </div>
                                    </div>
                                 </div>
                             <div id="tab-2" class="tab-pane">
                                <div class="panel-body">
                                      <div class="row">
      
               <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
 
        <div class="row" style="margin:2px;text-align:center">
           
            
             <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12" style="text-align:right">
        

           
             <img  id="imgmas2" src="../img/mas.png"  style="width:20px;height:20px"/>
             <strong id="btnnuevo_serie" >NUEVO</strong>
                
            
               

             </div>
            <hr/>
            </div>
         <div class="row" style="margin:2px">
              <div class="col-lg-2 col-md-2 col-sm-2 col-xs-12" >
                 Nro. DAM :
               <input type="text"  class="form-control" id="txtnroDAM_Serie" disabled/>
                 </div>
              <div class="col-lg-10 col-md-10 col-sm-10 col-xs-12" >
                 Cliente :
               <input type="text"  class="form-control" id="txtCliente_Serie" disabled/>
                 </div>
             </div>

         
            <hr />

        <div class="row" style="margin:2px">
  
             <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12" >
        <div class="table-responsive"> 
 
                                 

            <table id="Tabla_Serie_DAM" class="table table-hover  table-striped compact nowrap" style="display:none" >
                <thead>
                    <tr>
                        <th>SERIE</th>
                          <th>NRO PARTIDA</th>
                        <th>COD ART</th>
                        <th>ARTICULO</th>   
                        <th>COLOR</th>   
                         <th>TIPO ARTICULO</th>   
                         <th>COD COLOR</th>   
                          <th>ESTADO</th>                       
                           <th>ELIMINAR</th>
                      
                    </tr>
                 </thead>
               
            </table>

                </div>   


             </div> 
       </div>
       
             

             </div>
                                </div>
                                     </div>
                                 </div>
                             <div id="tab-3" class="tab-pane">
                                <div class="panel-body">
                                      <div class="row">
      
               <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
 
        <div class="row" style="margin:2px;text-align:center">
             
        
            </div>
         <div class="row" style="margin:2px">
              <div class="col-lg-2 col-md-2 col-sm-2 col-xs-12" >
                 Nro. DAM :
               <input type="text"  class="form-control" id="txtnroDAM_guia" disabled/>
                 </div>
          
               <input type="text"  class="form-control" id="txtcod_Cliente_guia" disabled style="display:none"/>
                 
              <div class="col-lg-10 col-md-10 col-sm-10 col-xs-12" >
                 Cliente :
               <input type="text"  class="form-control" id="txtCliente_guia" disabled/>
                 </div>
             </div>

         
            <hr />

        <div class="row" style="margin:2px">
  
             <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12" >
     
                 <div class="row">
                      <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12" >
                    <div class="ibox">
                        <div class="ibox-content">
                            <h3>Guias Asignadas</h3>
                            <p class="small"><i class="fa fa-hand-o-up"></i> Arrastra la Guia</p>
                            <ul class="sortable-list connectList agile-list scrollable-list" id="todo"  style="height:600px;">

                            </ul>
                        </div>
                    </div>
                </div>

                     <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12" >
                    <div class="ibox">
                        <div class="ibox-content">
                         <img src="../img/guia_asignar.gif"  style="width:70%;height:70%" />
                        </div>
                    </div>
                </div>
        
                     <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12" >
                    <div class="ibox">
                        <div class="ibox-content">
                            <h3>Guias por Asignar</h3>
                            <p class="small"><i class="fa fa-hand-o-up"></i> Arrastra la Guia</p>
                            <ul class="sortable-list connectList agile-list scrollable-list" id="completed" style="height:600px;">

                            </ul>
                        </div>
                    </div>
                </div>

            </div>

   

             </div> 
       </div>

                  
       <div class="row">
       <div class="modal-footer" style="text-align:left">
       
       <input type="text"  class="form-control" id="txt_guia_Asignada" disabled style="display:none"/>
        
        <button id="btnAsignar_Guia" type="button" class="btn btn-warning" style="color:white;display:none;">Asignar Guia</button>
          <button id="btnActualizar_guia" type="button" class="btn btn-default active" style="display:none;background-color:#1ab394;color:white;border-color:#1ab394">Actualizar</button>
     
      </div>
                <div class="col-lg-12" style="display:none">

                    <h4>
                        Serialised Output
                    </h4>
                    <p>
                        Serializes the sortable's item id's into an array of string.
                    </p>

                    <div class="output p-m m white-bg"></div>


                </div>
            </div>
             

             </div>
                                </div>
                                     </div>
                                 </div>
                            
                    </div>

                        </div>
                       
                         
                                   
                          
                            

          
                       
                    </div>
                </div>
            </div>






        </div>
                  <!-- Modal nuevo partida -->
<div class="modal fade "  id="modal_nuevo"  tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
     
  <div class="modal-dialog modal-lg " role="document">
    <div class="modal-content " style="border-radius: 5px;">
     
   <div class="modal-header" style="background-color:#1ab394;color:white">
        <h5 class="modal-title" id="Titulo_Panel">Nuevo Usuario</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>

     <div class="modal-body">
  <div class="container-fluid">

       
       
     <%--   <div  id="divcodigo" class="row"  style="display:none">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
           Nro Partida Arancelaria : 
              <input type="text" class="form-control" id="txtcodigo"/> 
         </div>
        </div>    --%>       
       <div  class="row" >
          <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
           Compañia : 
               <select class="form-control" id="ddlcompañia"></select>

          </div>
           
            <div id="div_estado_buscar" class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
             Estado : 
             <select class="form-control" id="ddlestado"    >
          
           <option value="0">ACTIVO</option>
           <option value="1">INACTIVO</option>
          
           </select>
          </div>
    </div>


       <br />
       
               <div  class="row" >
                      
           <div  class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
               DAM :
          <input type="text" class="form-control" id="txtDAM" maxlength="18"/> 
         </div>
                  
           <div  class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
               Cliente :<br />
          <select class="form-control" id="ddlcliente"    style="width: 100%;" >
          
           </select>
         </div>      
                  
 
            </div>
         
       
 <br />


      <div class="modal-footer">
     
        
        <button id="btnGuardar" type="button" class="btn btn-default" style="background-color:#1ab394;color:white;border-color:#1ab394">Guardar</button>
          <button id="btnActualizar" type="button" class="btn btn-default active" style="display:none;background-color:#1ab394;color:white;border-color:#1ab394">Actualizar</button>
      <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
      </div>
    </div>
  </div>
</div>
         

   </div>
        </div>
                      <!-- Modal nuevo serie -->
<div class="modal fade "  id="modal_nuevo_serie"  tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
     
  <div class="modal-dialog modal-lg " role="document">
    <div class="modal-content " style="border-radius: 5px;">
     
   <div class="modal-header" style="background-color:#1ab394;color:white">
        <h5 class="modal-title" id="Titulo_Panel_Serie">Nueva Serie</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>

     <div class="modal-body">
  <div class="container-fluid">
   
       <div  class="row" >
          <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
           DAM : 
         
               <input type="text" class="form-control" id="txtDAM_Serie_popup" disabled/> 
          </div>
           
            <div id="div_estado_buscar_Serie" class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
             Estado : 
             <select class="form-control" id="ddlestado_serie"    >
          
           <option value="0">ACTIVO</option>
           <option value="1">INACTIVO</option>
          
           </select>
          </div>
    </div>


       <br />
       
               <div  class="row" >
                      
           <div  class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
               Serie :
          <input type="text" class="form-control" id="txtserie" maxlength="4"/> 
         </div>
                  
           <div  class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
               Partida :<br />
         <input type="text" class="form-control" id="txtpartida" disabled/> 
         </div>      
                  
 
            </div>
      <br />
            <div  class="row" style="display:none">
             
  <div  class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
      CodArticulo :
 <input type="text" class="form-control" id="txtCodArticulo" /> 
</div>
         
   <div  class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
      Tipo Articulo :<br />
<input type="text" class="form-control" id="txtTipoArticulo"/> 
</div>      
            <div  class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
      Codigo Color :<br />
<input type="text" class="form-control" id="txtCodigoColor"/> 
</div>  
 
   </div>
      <hr />
          <div class="row" style="margin:2px">
  
      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12" >
 <div class="table-responsive"> 
 
                          

     <table id="Tabla_Partidas" class="table table-hover compact nowrap " 
         style="display:none; background-color: #1ab394;color: white;text-align: center;" >
         <thead>
             <tr>
                 <th></th>
                 <th>NRO</th>
                 <th>CANTIDAD</th>
                 <th>CODIGO</th>  
                 <th>DESCRIPCION</th>  
                 <th>COLOR</th>  
                 <th>NRO PARTIDA</th>  
                 <th>TIPO ARTICULO</th>  
                 <th>CODIGO COLOR</th>  
                  
               
             </tr>
          </thead>
        
     </table>

         </div>   


      </div> 
</div>
       
 <br />


      <div class="modal-footer">
        <div class="ibox-content" id="pregunta_cerrar_popup">
                            <h4 style="text-align:left">
                                Desea cerrar la ventana ?
                            </h4>
                           
                            <div class="switch">
                                <div class="onoffswitch">
                                    <input type="checkbox" checked class="onoffswitch-checkbox" id="switch_cerrar_ventana">
                                    <label class="onoffswitch-label" for="switch_cerrar_ventana">
                                        <span class="onoffswitch-inner"></span>
                                        <span class="onoffswitch-switch"></span>
                                    </label>
                                </div>
                            </div>

                          

                        </div>
        
        <button id="btnGuardar_serie" type="button" class="btn btn-default" style="background-color:#1ab394;color:white;border-color:#1ab394">Guardar</button>
          <button id="btnActualizar_Serie" type="button" class="btn btn-default active" style="display:none;background-color:#1ab394;color:white;border-color:#1ab394">Actualizar</button>
      <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
      </div>
    </div>
  </div>
</div>
         

   </div>
        </div>

       <!-- Modal validacion -->
      
    <div class="modal fade "  id="modal_validacion"  tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
     
  <div class="modal-dialog modal-lg " role="document">
    <div class="modal-content " style="border-radius: 5px;">
     
   <div class="modal-header" style="background-color:#1ab394;color:white">
        <h5 class="modal-title" id="Titulo_Panel_Validacion">Validacion</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>

     <div class="modal-body">
  <div class="container-fluid">
         <div class="row" style="margin:2px">
              <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12" >
                 DAM :
               <input type="text"  class="form-control" id="txtnroDAM_guia_validacion" disabled/>
                 </div>
          
              
              <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12" >
                 Guia :
                  <input type="text"  class="form-control" id="txtGuia_validacion_cia" disabled style="display:none"/>
                  <input type="text"  class="form-control" id="txtGuia_validacion_anio" disabled style="display:none"/>
                  <input type="text"  class="form-control" id="txtGuia_validacion_serie" disabled style="display:none"/>
                  <input type="text"  class="form-control" id="txtGuia_validacion_numero" disabled style="display:none"/>
               <input type="text"  class="form-control" id="txtGuia_validacion" disabled/>
                 </div>
              <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12" >
                 Cliente :
               <input type="text"  class="form-control" id="txtCliente_guia_validacion" disabled/>
                 </div>
             </div>
      <hr />
       <div  class="row" >
           <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            
              <div class="table-responsive" style="display: flex;justify-content: center;align-items: center;height: 100%;">
                    
            <table id="Tabla_Validar_DAM" class="table table-hover  table-striped compact nowrap"  >
                <thead>
                    <tr>
                        <th>PEDIDO</th>
                          <th>ARTICULO</th>
                          <th>PARTIDA</th>                       
                          <th>PARTIDA ASIGNADA A LA DAM</th>
                          <th>AA</th>
                      
                    </tr>
                 </thead>
               
            </table>
                         
               </div>
                
     </div>
    </div>

         
       
 <br />


      <div class="modal-footer">
     
        
   <%--      <button id="btnGuardar_Guia" type="button" class="btn btn-default" style="background-color:#1ab394;color:white;border-color:#1ab394">Guardar</button>
         <button id="btnActualizar" type="button" class="btn btn-default active" style="display:none;background-color:#1ab394;color:white;border-color:#1ab394">Actualizar</button>--%>
      <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
      </div>
    </div>
  </div>
</div>
         

   </div>
        </div>


     <style>
         .scrollable-list {
  max-height: 350px; /* Altura máxima de la lista */
  overflow: auto; /* Habilitar el scroll */
}
    .editar { 
       cursor:pointer 
    }
   
    .editar_serie { 
       cursor:pointer 
    }
  .eliminar {
       cursor:pointer 
    }
 .eliminar_Serie {
       cursor:pointer 
    }
   .guia {
       cursor:pointer 
    }
   
    .serie {
     cursor:pointer 
  }
    .error_campo_vacio {
        
        box-shadow: 0 0 5px #CD2F0D;
        border-color:red;
        }
       
       #modal_nuevo  span.select2-container {
    z-index:10050;
}     
       #modal_nuevo_serie  span.select2-container {
    z-index:10050;
}
              .onoffswitch-inner:before {
            content: "SI";
            padding-left: 0px;
            background-color: #1AB394;
            color: #FFFFFF;
            padding-right: 26px;
        }
         .onoffswitch-inner:after {
             content: "NO";
             padding-right: 7px;
             background-color: #FFFFFF;
             color: #919191;
             text-align: right;
         }

   .selected-row {
        background-color: #1ab394 !important;
        color:white;
    }
    </style>
    <link href="../css/plugins/select2/select2.min.css" rel="stylesheet" />
    <script src="../js/plugins/select2/select2.full.min.js"></script>
    <script src="../js/Mantenimiento/Js_Mant_DAM.js"></script>
</asp:Content>
