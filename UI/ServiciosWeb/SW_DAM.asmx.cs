using BE;
using DA;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;

namespace UI.ServiciosWeb
{
    /// <summary>
    /// Descripción breve de SW_DAM
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // Para permitir que se llame a este servicio web desde un script, usando ASP.NET AJAX, quite la marca de comentario de la línea siguiente. 
    [System.Web.Script.Services.ScriptService]
    public class SW_DAM : System.Web.Services.WebService
    {

        DA_DAM obj_DA = new DA_DAM();
        [WebMethod]
        public List<BE_DAM> Obtener_Combo_Partida(string buscar)
        {
            return obj_DA.OBTENER_COMBO_PARTIDA(buscar);

        }
        
             [WebMethod]
        public List<BE_DAM> Obtener_Combo_Cliente(string buscar)
        {
            return obj_DA.OBTENER_COMBO_CLIENTE(buscar);

        }
        [WebMethod]
        public List<BE_DAM> Buscar_DAM(double COMPAÑIA_BUSCAR, string DAM_BUSCAR, string CLIENTE_BUSCAR, double ESTADO_BUSCAR)
        {
            return obj_DA.BUSCAR_DAM(COMPAÑIA_BUSCAR,DAM_BUSCAR,CLIENTE_BUSCAR,ESTADO_BUSCAR);

        }
        
              [WebMethod]
        public List<BE_DAM> Buscar_Partidas_DAM(string DAM)
        {
            return obj_DA.BUSCAR_PARTIDAS_DAM(DAM);

        }
        [WebMethod]
        public List<BE_DAM> Buscar_Serie(string NRO_DAM)
        {
            return obj_DA.BUSCAR_SERIE(NRO_DAM);

        }
        [WebMethod]
        public int Grabar_DAM(string DAM, string CLIENTE, double COMPAÑIA)
        {
            return obj_DA.GRABAR_DAM(DAM, CLIENTE, COMPAÑIA);
        }
        
              [WebMethod]
        public int Grabar_Serie(string DAM, string SERIE, double PARTIDA, double COD_ARTICULO, double TIP_ARTICULO, double COD_COLOR)
        {
            return obj_DA.GRABAR_SERIE(DAM, SERIE, PARTIDA, COD_ARTICULO, TIP_ARTICULO, COD_COLOR);
        }

        [WebMethod]
        public List<BE_DAM> Obtener_DAM(string DAM)
        {
            return obj_DA.OBTENER_DAM(DAM);

        }
        
              [WebMethod]
        public List<BE_DAM> Obtener_Serie(string DAM,string SERIE)
        {
            return obj_DA.OBTENER_SERIE(DAM,SERIE);

        }
        [WebMethod]
        public int Eliminar_DAM(string DAM)
        {
            return obj_DA.ELIMINAR_DAM(DAM);
        }
        [WebMethod]
        public int Actualizar_DAM(string DAM, string CLIENTE, double COMPAÑIA, double ESTADO)
        {
            return obj_DA.ACTUALIZAR_DAM(DAM, CLIENTE, COMPAÑIA, ESTADO);
        }
        
              [WebMethod]
        public int Actualizar_Serie(string DAM, string SERIE, double PARTIDA, double ESTADO)
        {
            return obj_DA.ACTUALIZAR_SERIE(DAM, SERIE, PARTIDA, ESTADO);
        }
        
               [WebMethod]
        public int Eliminar_Serie(string DAM, string SERIE,double NRO_PARTIDA,double COD_ARTICULO,double COD_COLOR)
        {
            return obj_DA.ELIMINAR_SERIE(DAM, SERIE, NRO_PARTIDA, COD_ARTICULO, COD_COLOR);
        }
        [WebMethod]
        public List<BE_DAM> Obtener_Guias_Cliente(string COD_CLIENTE)
        {
            return obj_DA.OBTENER_GUIAS_CLIENTE(COD_CLIENTE);

        }
        

        [WebMethod]
             public List<BE_DAM> Validar_Guia_Dam(double COMPAÑIA_GUIA, double AÑO_GUIA, string SERIE_GUIA, string NRO_GUIA, string NRO_DAM)
        {
            return obj_DA.VALIDAR_GUIA_DAM(COMPAÑIA_GUIA,AÑO_GUIA,SERIE_GUIA, NRO_GUIA, NRO_DAM);

        }
        
             [WebMethod]
             public int Validar_Guias_Series(double NRO_CIA_GUIA, double ANO_GUIA, string SERIE_GUIA, string NRO_GUIA, string NRO_DAM)
        {
            return obj_DA.VALIDAR_GUIA_SERIE(NRO_CIA_GUIA,ANO_GUIA,SERIE_GUIA,NRO_GUIA,NRO_DAM);

        }
        
                [WebMethod]
             public int Validar_Eliminar_DAM(string DAM)
        {
            return obj_DA.VALIDAR_ELIMINAR_DAM(DAM);

        }

        [WebMethod]
        public int Grabar_DAM_Guia(string NRO_CIA_GUIA, string ANO_GUIA, string SERIE_GUIA, string NRO_GUIA, string NRO_DAM)
        {
            return obj_DA.GRABAR_DAM_GUIA(NRO_CIA_GUIA, ANO_GUIA, SERIE_GUIA, NRO_GUIA, NRO_DAM);
        }

        
            [WebMethod]
        public int Liberar_DAM_Guia(string NRO_CIA_GUIA, string ANO_GUIA, string SERIE_GUIA, string NRO_GUIA)
        {
            return obj_DA.LIBERAR_DAM_GUIA(NRO_CIA_GUIA, ANO_GUIA, SERIE_GUIA, NRO_GUIA);
        }
    }
}
