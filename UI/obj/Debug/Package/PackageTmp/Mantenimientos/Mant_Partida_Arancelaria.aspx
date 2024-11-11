<%@ Page Title="" Language="C#" MasterPageFile="~/Mernu.Master" AutoEventWireup="true" CodeBehind="Mant_Partida_Arancelaria.aspx.cs" Inherits="UI.Mantenimientos.Mant_Partida_Arancelaria" %>
<asp:Content ID="Content1" ContentPlaceHolderID="ContentPlaceHolder1" runat="server"  >
      <div class="row wrapper border-bottom white-bg page-heading">
                <div class="col-lg-10">
                    <h2>Gestionar Partidas Arancelarias</h2>
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item">
                            <a href="../Principal.aspx">Inicio</a>
                        </li>
                        <li class="breadcrumb-item">
                            <a>Mantenimiento</a>
                        </li>
                        <li class="breadcrumb-item active">
                            <strong> Partida Arancelaria</strong>
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
                            <h5>Gestionar Partidas Arancelarias <small></small></h5>
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
                            <li id="tab1"class="active"><a data-toggle="tab" href="#tab-1" aria-expanded="false"> Partidas</a></li>
                            <li id="tab2" class="" ><a data-toggle="tab" href="#tab-2" aria-expanded="true" >Conexion</a></li>
                            <li id="tab3" class="" ><a data-toggle="tab" href="#tab-3" aria-expanded="true" >Articulos</a></li>
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
        

             <div class="row" style="margin:2px">
  
                  <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12" >
                 Partida :
              <input type="text"  class="form-control" id="txtnropartida_buscar"/>
                 </div>
            

                    
                     <div class="col-lg-5 col-md-5 col-sm-5 col-xs-12" >
                        Descripcion :
                          <input type="text"  class="form-control" id="txtdescripcion_buscar"/>
                 </div>
                  <div class="col-lg-2 col-md-2 col-sm-2 col-xs-12" >
                        Estado : 
          <select class="form-control" id="ddlestado_buscar"    >
          
           <option value="0">ACTIVO</option>
           <option value="1">INACTIVO</option>
          
           </select>
                       
                 </div>
             

                     <div class="col-lg-2 col-md-2 col-sm-2 col-xs-12" >
                         <br />
                         <button id="btnbuscar" type="button" class="btn btn-warning"  style="background-color:#1ab394;color:white;border-color:#1ab394" >Buscar</button>
                 </div>

                 </div>
            <hr />

        <div class="row" style="margin:2px">
  
             <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12" >
        <div class="table-responsive"> 
 
                                 

            <table id="Tabla_Partida_Arancelaria" class="table table-hover  table-striped compact nowrap" style="display:none" >
                <thead>
                    <tr>
                          <th>PARTIDA</th>
                          <th>DESCRIPCION</th>                                 
                          <th>ESTADO</th>                       
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
                               <div id="tab-2" class="tab-pane" >
                                <div class="panel-body">
                                      <div class="row">
      
               <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
 
        <div class="row" style="margin:2px;text-align:center">
           
            
             <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12" style="text-align:right">
        

           
             <img  id="imgmas2" src="../img/mas.png"  style="width:20px;height:20px"/>
             <strong id="btnnuevo2" >NUEVO</strong>
                
            
               

             </div>
            <hr/>
            </div>
         <div class="row" style="margin:2px">
              <div class="col-lg-2 col-md-2 col-sm-2 col-xs-12" >
                 Nro. Partida :
               <input type="text"  class="form-control" id="txtnropartida_conexion"  disabled/>
                 </div>
              <div class="col-lg-10 col-md-10 col-sm-10 col-xs-12" >
                 Descripcion :
               <input type="text"  class="form-control" id="txtdescripcionpartida_conexion" disabled/>
                 </div>
             </div>

         
         
            <hr />

        <div class="row" style="margin:2px">
  
             <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12" >
        <div class="table-responsive"> 
 
                                 

            <table id="Tabla_Partida_Arancelaria_Conexion" class="table table-hover  table-striped compact nowrap" style="display:none" >
                <thead>
                    <tr>
                        <th>CODIGOCIA</th>
                          <th>COMPAÑIA</th>
                        <th>CODIGO ARTICULO</th>
                          <th>ARTICULO</th>  
                        <th>CODIGO TIPO ARTICULO</th>
                        <th>TIPO ARTICULO</th>
                        <th>CODIGO TONO COLOR</th>
                        <th>TONO COLOR</th>  
                        <th>PARTIDA</th>  
                          <th>ESTADO</th>                       
                         <%-- <th>EDITAR</th>--%>
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
                                <div id="tab-3" class="tab-pane" >
                                <div class="panel-body">
                                      <div class="row">
      
               <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
 
        <div class="row" style="margin:2px;text-align:center">
           
            
             <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12" style="text-align:right">
        

           
           <%--  <img  id="imgmas2" src="../img/mas.png"  style="width:20px;height:20px"/>
             <strong id="btnnuevo2" >NUEVO</strong>--%>
                
            
               

             </div>
            <hr/>
            </div>
         <div class="row" style="margin:2px">
              <div class="col-lg-5 col-md-5 col-sm-5 col-xs-12" >
                 Articulo :
               <br />
                          <select class="form-control"   id="ddlarticulo_buscar" style="width:100%"></select>
                 </div>
               <div class="col-lg-2 col-md-2 col-sm-2 col-xs-12" >
                         <br />
                         <button id="btnbuscar_partida_articulo" type="button" class="btn btn-warning"  style="background-color:#1ab394;color:white;border-color:#1ab394" >Buscar</button>
                 </div>
              <div class="col-lg-5 col-md-5 col-sm-5 col-xs-12" >
               
                 </div>
             </div>

     
            <hr />

        <div class="row" style="margin:2px">
  
             <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12" >
        <div class="table-responsive"> 
 
                                 

            <table id="Tabla_Partida_Arancelaria_Articulo" class="table table-hover  table-striped compact nowrap" style="display:none" >
                <thead>
                    <tr>
                        <th>PARTIDA</th>
                          <th>DESCRIPCION</th>
                    
                          
                      
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
            Nro Partida Arancelaria : 
               <input type="text" class="form-control" id="txtpartida" maxlength="10"/> 

          </div>
           
            <div id="div_estado_buscar" class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
             Estado : 
             <select class="form-control" id="ddlestado"  disabled >
          
           <option value="0">ACTIVO</option>
           <option value="1">INACTIVO</option>
          
           </select>
          </div>
    </div>


       <br />
       
               <div  class="row" >
                      
           <div  class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
               Descripcion :
          <textarea id="txtdescripcion" class="form-control" rows="3" maxlength="220">

          </textarea>
          
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
                        <!-- Modal nuevo conexion -->
<div class="modal fade "  id="modal_nuevo2" tabindex="-1"   role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
     
  <div class="modal-dialog modal-lg " role="document">
    <div class="modal-content " style="border-radius: 5px;">
     
   <div class="modal-header" style="background-color:#1ab394;color:white">
        <h5 class="modal-title" id="Titulo_Panel2">Nuevo Usuario</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>

     <div class="modal-body">
  <div class="container-fluid">

     
               <div  class="row" >
                      
         <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12" >
                         Nro. Partida :
                          <input type="text"  class="form-control" id="txtnropartida_conexion_nuevo" disabled/>
                     </div>
    <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12"  style="display:none">
                        Estado : 
          <select class="form-control" id="ddlestado2" >
          
           <option value="0">ACTIVO</option>
           <option value="1">INACTIVO</option>
          
           </select>
                       
                 </div>
                   </div>
      <br />
         <div class="row" >
  
                  <div class="col-lg-5 col-md-5 col-sm-5 col-xs-12" >
                 Compañia :
               <select class="form-control" id="ddlcompañia" >
                 </select>
                 </div>  
           
                   <div class="col-lg-7 col-md-7 col-sm-7 col-xs-12" >
                        Articulo :
                       <br />
                          <select class="form-control"  name="selecttono" id="ddlarticulo"  style="width: 455px;">

                                      
                         </select>
            </div>
                 
          
                     
                 </div>
     

                     <br />
         <div class="row" >
               <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12" >
                        Tipo Articulo :
                       <br />
                          <select class="form-control"   id="ddltipo_articulo"  disabled >

                                      
                         </select>
            </div>
                 <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12" >
                        Tono :
                       <br />
                          <select class="form-control"   id="ddltono"  >

                                      
                         </select>
            </div>
              </div>

 
                 </div>

         <br />
 

      <div class="modal-footer">
         <div class="ibox-content" >
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
        
        <button id="btnGuardar_Conexion" type="button" class="btn btn-default" style="background-color:#1ab394;color:white;border-color:#1ab394">Guardar</button>
          <button id="btnActualizar_Conexion" type="button" class="btn btn-default active" style="display:none;background-color:#1ab394;color:white;border-color:#1ab394">Actualizar</button>
      <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
      </div>
    </div>
  </div>
</div>
         

   </div>
                           <!-- Modal conexion editar -->
<div class="modal fade "  id="modal_editar" tabindex="-1"   role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
     
  <div class="modal-dialog modal-lg " role="document">
    <div class="modal-content " style="border-radius: 5px;">
     
   <div class="modal-header" style="background-color:#1ab394;color:white">
        <h5 class="modal-title" id="Titulo_Panel_editar">Nuevo Usuario</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>

     <div class="modal-body">
  <div class="container-fluid">

     
               <div  class="row" >
                      
         <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12" >
                         Nro. Partida :
                          <input type="text"  class="form-control" id="txtnropartida_conexion_editar" disabled/>
                     </div>
    <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12" >
                        Estado : 
          <select class="form-control" id="ddlestado_editar" disabled>
          
           <option value="0">ACTIVO</option>
           <option value="1">INACTIVO</option>
          
           </select>
                       
                 </div>
                   </div>
      <br />
         <div class="row" >
  
                  <div class="col-lg-5 col-md-5 col-sm-5 col-xs-12" >
                 Compañia :
               <select class="form-control" id="ddlcompañia_editar"  disabled>
                 </select>
                 </div>  
           
                   <div class="col-lg-7 col-md-7 col-sm-7 col-xs-12" >
                        Articulo :
                       <br />
                          <select class="form-control"  name="selecttono" id="ddlarticulo_editar"  style="width: 455px;" disabled>

                                      
                         </select>
            </div>
                 
          
                     
                 </div>
     

                     <br />
         <div class="row" >
               <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12" >
                        Tipo Articulo :
                       <br />
                          <select class="form-control"   id="ddltipo_articulo_editar"  disabled >

                                      
                         </select>
            </div>
                 <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12" >
                        Tono :
                       <br />
                          <select class="form-control"   id="ddltono_editar"  disabled >

                                      
                         </select>
            </div>
              </div>

 
                 </div>

         <br />
 

      <div class="modal-footer">
     
        
        <button id="btnGuardar_Conexion_editar" type="button" class="btn btn-default" style="background-color:#1ab394;color:white;border-color:#1ab394">Guardar</button>
          <button id="btnActualizar_Conexion_editar" type="button" class="btn btn-default active" style="display:none;background-color:#1ab394;color:white;border-color:#1ab394">Actualizar</button>
      <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
      </div>
    </div>
  </div>
</div>
         

   </div>
    <style>
    .editar {
       cursor:pointer 
    }
   
  .eliminar {
       cursor:pointer 
    }
  .editar_conexion {
       cursor:pointer 
    }
   
  .eliminar_conexion {
       cursor:pointer 
    }
    .error_campo_vacio {
        
        box-shadow: 0 0 5px #CD2F0D;
        border-color:red;
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
    /*.panel-primary>.panel-heading {
    color: #fff;
    background-color: rgba(34, 45, 50, 0.61);
    border-color: #222d32;
}*/


    </style>

    <script src="../js/Mantenimiento/Js_Mant_Partida_Arancelaria.js"></script>

    <link href="../css/plugins/select2/select2.min.css" rel="stylesheet" />
    <script src="../js/plugins/select2/select2.full.min.js"></script>
    <style>
       #modal_nuevo2  span.select2-container {
    z-index:10050;
}
            #modal_editar  span.select2-container {
    z-index:10050;
}
    </style>

 

</asp:Content>
