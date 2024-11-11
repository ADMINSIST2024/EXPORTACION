using BE;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;
using DA;
namespace UI.ServiciosWeb
{
    /// <summary>
    /// Descripción breve de SW_Partida_Arancelaria
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // Para permitir que se llame a este servicio web desde un script, usando ASP.NET AJAX, quite la marca de comentario de la línea siguiente. 
    [System.Web.Script.Services.ScriptService]
    public class SW_Partida_Arancelaria : System.Web.Services.WebService
    {
        DA_Partida_Arancelaria obj_DA = new DA_Partida_Arancelaria();

        [WebMethod]
        public List<BE_Partida_Arancelaria> Buscar_Partida_Arancelaria(double NROPARTIDA, string DESCRIPCION,double ESTADO)
        {
            return obj_DA.BUSCAR_PARTIDA_ARANCELARIA(NROPARTIDA, DESCRIPCION, ESTADO);
        }
        
             [WebMethod]
        public List<BE_Partida_Arancelaria> Buscar_Partida_Arancelaria_Articulo(double NRO_ARTICULO)
        {
            return obj_DA.BUSCAR_PARTIDA_ARANCELARIA_ARTICULO(NRO_ARTICULO);
        }
        [WebMethod]
        public List<BE_Partida_Arancelaria> Obtener_Partida_Arancelaria(double NROPARTIDA)
        {
            return obj_DA.OBTENER_PARTIDA_ARANCELARIA(NROPARTIDA);
        }
        
            [WebMethod]
        public List<BE_Partida_Arancelaria> Obtener_Partida_Arancelaria_Conexion(double CODIGOCIA, double CODIGOARTICULO, double CODIGOTIPOARTICULO, double CODIGOTONOCOLOR, double PARTIDA)
        {
            return obj_DA.OBTENER_PARTIDA_ARANCELARIA_CONEXION(CODIGOCIA, CODIGOARTICULO, CODIGOTIPOARTICULO,CODIGOTONOCOLOR,PARTIDA);
        }

        [WebMethod]
        public int Grabar_Partida_Arancelaria(double NROPARTIDA, string DESCRIPCION)
        {
            return obj_DA.GRABAR_PARTIDA_ARANCELARIA(NROPARTIDA, DESCRIPCION);
        }
        
 [WebMethod]
        public int Grabar_Partida_Arancelaria_Conexion(double NRO_PARTIDA, double COD_CIA, double COD_ARTICULO, double TIPO_ARTICULO, double COD_TONO)
        {
            return obj_DA.GRABAR_PARTIDA_ARANCELARIA_CONEXION(NRO_PARTIDA, COD_CIA, COD_ARTICULO, TIPO_ARTICULO, COD_TONO);
        }
        [WebMethod]
        public int Actualizar_Partida_Arancelaria_Conexion(double NRO_PARTIDA, double COD_CIA, double COD_ARTICULO, double TIPO_ARTICULO, double COD_TONO, string ESTADO)
        {
            return obj_DA.ACTUALIZAR_PARTIDA_ARANCELARIA_CONEXION(NRO_PARTIDA, COD_CIA, COD_ARTICULO, TIPO_ARTICULO, COD_TONO, ESTADO);
        }
        

        [WebMethod]
        public int Actualizar_Partida_Arancelaria(double NROPARTIDA, string DESCRIPCION, int ESTADO)
        {
            return obj_DA.ACTUALIZAR_PARTIDA_ARANCELARIA(NROPARTIDA, DESCRIPCION, ESTADO);
        }
        
               [WebMethod]
        public int Eliminar_Partida_Arancelaria(double NROPARTIDA)
        {
            return obj_DA.ELIMINAR_PARTIDA_ARANCELARIA(NROPARTIDA);
        }

        [WebMethod]
        public int Eliminar_Partida_Arancelaria_Conexion(double COD_CIA, double COD_ARTICULO, double TIPO_ARTICULO, double COD_TONO, double NRO_PARTIDA)
        {
            return obj_DA.ELIMINAR_PARTIDA_ARANCELARIA_CONEXION(COD_CIA,COD_ARTICULO,TIPO_ARTICULO,COD_TONO,NRO_PARTIDA);
        }
        
        [WebMethod]
        public List<BE_Partida_Arancelaria> Buscar_Partida_Arancelaria_Conexion(double NROPARTIDA)
        {
            return obj_DA.BUSCAR_PARTIDA_ARANCELARIA_CONEXION(NROPARTIDA);
        }
        [WebMethod]
        public List<BE_Partida_Arancelaria> Obtener_Combo_Articulo(string buscar)
        {
            return obj_DA.OBTENER_COMBO_ARTICULO(buscar);
           
        }
        [WebMethod]
        public List<BE_Partida_Arancelaria> Obtener_Combo_Compañia()
        {
            return obj_DA.OBTENER_COMBO_COMPAÑIA();

        }
        [WebMethod]
        public List<BE_Partida_Arancelaria> Obtener_Combo_Tono()
        {
            return obj_DA.OBTENER_COMBO_TONO();

        }
        [WebMethod]
        public List<BE_Partida_Arancelaria> Obtener_Combo_Tipo_Articulo(double CODIGO_ARTICULO)
        {
            return obj_DA.OBTENER_COMBO_TIPO_ARTICULO(CODIGO_ARTICULO);

        }

        
         [WebMethod]
             public int Validar_Eliminar_Conexion(string PARTIDA, double COD_ARTICULO)
        {
            return obj_DA.VALIDAR_ELIMINAR_CONEXION(PARTIDA, COD_ARTICULO);

        }
        
             [WebMethod]
             public int Validar_Eliminar_Partida(string PARTIDA)
        {
            return obj_DA.VALIDAR_ELIMINAR_PARTIDA(PARTIDA);

        }

    }
}
