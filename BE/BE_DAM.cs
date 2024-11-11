using System;
using System.Collections.Generic;
using System.Drawing;
using System.Linq;
using System.Web;

namespace BE
{
    public class BE_DAM
    {
        public double CODCIA { get; set; }
        public string DESCRIPCION_CIA { get; set; }
        public string DAM { get; set; }
        public string SERIE { get; set; }
        public double NROPAR { get; set; }
        public string ESTADO { get; set; }

        public string CODCLI { get; set; }
        public string RAZCLI { get; set; }
        public string FECHA_CREACION { get; set; }

        public double ANIO_GUIA { get; set; }
        public string SERIE_GUIA { get; set; }
        public double NUMERO_GUIA { get; set; }
        public string FECHA_EMISION_GUIA { get; set; }
        public string CODIGO_COMPLETO_GUIA { get; set; }
        public string NUMERO_FACTURA { get; set; }
        public double ANIO_PEDIDO { get; set; }
        public string SERIE_PEDIDO { get; set; }
        public double NUMERO_PEDIDO { get; set; }
        public double CODIGO_ARTICULO { get; set; }
        public string PARTIDA_VALIDAR { get; set; }
        public string DAM_PARTIDA_VALIDAR { get; set; }
        public string TIENEDAM { get; set; }

        public int NRO { get; set; }
        public double CANTIDAD { get; set; }
        public string DESCRIPCION_ARTICULO { get; set; }
        public string DESCRIPCION_COLOR { get; set; }
        public double NUMERO_PARTIDA { get; set; }
        public double TIPO_ARTICULO { get; set; }
        public int CODIGO_COLOR { get; set; }

        




    }
}