using BE;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Diagnostics;
using System.Linq;
using System.Web;
using IBM.Data.DB2.iSeries;
using System.Data.OleDb;
namespace DA
{
    public class DA_Partida_Arancelaria
    {
        string conexion = ConfigurationManager.ConnectionStrings["ConexionAS400"].ConnectionString;

        public List<BE_Partida_Arancelaria> BUSCAR_PARTIDA_ARANCELARIA(double NROPARTIDA, string DESCRIPCION, double ESTADO)
        {
           
            List<BE_Partida_Arancelaria> lista = new List<BE_Partida_Arancelaria>();
            try
            {

                 iDB2Connection con = new iDB2Connection(conexion);
                con.Open();

                using (iDB2Command cmd = new iDB2Command("SP_BUSCAR_PARTIDA_ARANCELARIA", con))
                {
                    cmd.Parameters.AddWithValue("@NROPARTIDA", NROPARTIDA);
                    cmd.Parameters.AddWithValue("@DESCRIPCION", DESCRIPCION);
                    cmd.Parameters.AddWithValue("@ESTADO", ESTADO);
                    cmd.CommandType = CommandType.StoredProcedure;

                    iDB2DataReader lector = cmd.ExecuteReader(CommandBehavior.CloseConnection);
                    while (lector.Read())
                    {
                        BE_Partida_Arancelaria obj_BE = new BE_Partida_Arancelaria();

                        obj_BE.NROPAR = Convert.ToDouble(lector[0].ToString().Trim());
                        obj_BE.DESPAR = lector[1].ToString().Trim();
                        obj_BE.STAPAR = lector[2].ToString().Trim();
                       

                        lista.Add(obj_BE);
                    }

                    lector.Close();
                }
            }
            catch (Exception ex)
            {
                StackTrace st = new StackTrace(ex, true);
                StackFrame frame = st.GetFrames().Where(f => !String.IsNullOrEmpty(f.GetFileName())
                     && f.GetILOffset() != StackFrame.OFFSET_UNKNOWN
                     && f.GetNativeOffset() != StackFrame.OFFSET_UNKNOWN
                     && !f.GetMethod().Module.Assembly.GetName().Name.Contains("mscorlib")).First();

                string MachineName = System.Environment.MachineName;
                string UserName = System.Environment.UserName.ToUpper();
                string Mensaje = ex.Message;
                int LineaError = frame.GetFileLineNumber();
                string Proyecto = frame.GetMethod().Module.Assembly.GetName().Name;
                string Clase = frame.GetMethod().DeclaringType.Name;
                string metodo = frame.GetMethod().Name;
                string codigoError = Convert.ToString(frame.GetHashCode());
                Console.WriteLine(Mensaje);
            }
            return lista;
        }
        
              public List<BE_Partida_Arancelaria> BUSCAR_PARTIDA_ARANCELARIA_ARTICULO(double NRO_ARTICULO)
        {

            List<BE_Partida_Arancelaria> lista = new List<BE_Partida_Arancelaria>();
            try
            {

                iDB2Connection con = new iDB2Connection(conexion);
                con.Open();

                using (iDB2Command cmd = new iDB2Command("SP_BUSCAR_PARTIDA_ARANCELARIA_ARTICULO", con))
                {
                    cmd.Parameters.AddWithValue("NRO_ARTICULO", NRO_ARTICULO);
             
                    cmd.CommandType = CommandType.StoredProcedure;

                    iDB2DataReader lector = cmd.ExecuteReader(CommandBehavior.CloseConnection);
                    while (lector.Read())
                    {
                        BE_Partida_Arancelaria obj_BE = new BE_Partida_Arancelaria();

                        obj_BE.NROPAR = Convert.ToDouble(lector[0].ToString().Trim());
                        obj_BE.DESPAR = lector[1].ToString().Trim();
                      


                        lista.Add(obj_BE);
                    }

                    lector.Close();
                }
            }
            catch (Exception ex)
            {
                StackTrace st = new StackTrace(ex, true);
                StackFrame frame = st.GetFrames().Where(f => !String.IsNullOrEmpty(f.GetFileName())
                     && f.GetILOffset() != StackFrame.OFFSET_UNKNOWN
                     && f.GetNativeOffset() != StackFrame.OFFSET_UNKNOWN
                     && !f.GetMethod().Module.Assembly.GetName().Name.Contains("mscorlib")).First();

                string MachineName = System.Environment.MachineName;
                string UserName = System.Environment.UserName.ToUpper();
                string Mensaje = ex.Message;
                int LineaError = frame.GetFileLineNumber();
                string Proyecto = frame.GetMethod().Module.Assembly.GetName().Name;
                string Clase = frame.GetMethod().DeclaringType.Name;
                string metodo = frame.GetMethod().Name;
                string codigoError = Convert.ToString(frame.GetHashCode());
            }
            return lista;
        }
        public List<BE_Partida_Arancelaria> BUSCAR_PARTIDA_ARANCELARIA_CONEXION(double NROPARTIDA)
        {

            List<BE_Partida_Arancelaria> lista = new List<BE_Partida_Arancelaria>();
            try
            {

                iDB2Connection con = new iDB2Connection(conexion);
                con.Open();

                using (iDB2Command cmd = new iDB2Command("SP_BUSCAR_PARTIDA_ARANCELARIA_CONEXION", con))
                {
                    cmd.Parameters.AddWithValue("@NROPARTIDA", NROPARTIDA);
                  
                    cmd.CommandType = CommandType.StoredProcedure;

                    iDB2DataReader lector = cmd.ExecuteReader(CommandBehavior.CloseConnection);
                    while (lector.Read())
                    {
                        BE_Partida_Arancelaria obj_BE = new BE_Partida_Arancelaria();

                        obj_BE.CODCIA = Convert.ToDouble(lector[0].ToString().Trim());
                        obj_BE.DESCRIPCIONCOMPAÑIA = lector[1].ToString().Trim();
                        obj_BE.CODARTICULO = Convert.ToDouble(lector[2].ToString().Trim());
                        obj_BE.DESCRIPCIONARTICULO = lector[3].ToString().Trim();
                        obj_BE.CODIGOTIPOARTICULO = Convert.ToDouble(lector[4].ToString().Trim());
                        obj_BE.DESCRIPCIONTIPOARTICULO = lector[5].ToString().Trim();
                        obj_BE.CODIGOTONO = Convert.ToDouble(lector[6].ToString().Trim());
                        obj_BE.DESCRIPCIONTONO = lector[7].ToString().Trim();
                        obj_BE.NROPAR = Convert.ToDouble(lector[8].ToString().Trim());
                        obj_BE.ESTADO = lector[9].ToString().Trim();

                        lista.Add(obj_BE);
                    }

                    lector.Close();
                }
            }
            catch (Exception ex)
            {
                StackTrace st = new StackTrace(ex, true);
                StackFrame frame = st.GetFrames().Where(f => !String.IsNullOrEmpty(f.GetFileName())
                     && f.GetILOffset() != StackFrame.OFFSET_UNKNOWN
                     && f.GetNativeOffset() != StackFrame.OFFSET_UNKNOWN
                     && !f.GetMethod().Module.Assembly.GetName().Name.Contains("mscorlib")).First();

                string MachineName = System.Environment.MachineName;
                string UserName = System.Environment.UserName.ToUpper();
                string Mensaje = ex.Message;
                int LineaError = frame.GetFileLineNumber();
                string Proyecto = frame.GetMethod().Module.Assembly.GetName().Name;
                string Clase = frame.GetMethod().DeclaringType.Name;
                string metodo = frame.GetMethod().Name;
                string codigoError = Convert.ToString(frame.GetHashCode());
            }
            return lista;
        }
        
                public List<BE_Partida_Arancelaria> OBTENER_COMBO_ARTICULO(string DATO)
        {

            List<BE_Partida_Arancelaria> lista = new List<BE_Partida_Arancelaria>();
            try
            {

                iDB2Connection con = new iDB2Connection(conexion);
                con.Open();

                using (iDB2Command cmd = new iDB2Command("SP_OBTENER_COMBO_ARTICULO", con))
                {
                    cmd.Parameters.AddWithValue("DATO", DATO);

                    cmd.CommandType = CommandType.StoredProcedure;

                    iDB2DataReader lector = cmd.ExecuteReader(CommandBehavior.CloseConnection);
                    while (lector.Read())
                    {
                        BE_Partida_Arancelaria obj_BE = new BE_Partida_Arancelaria();

                        obj_BE.CODARTICULO = Convert.ToDouble(lector[0].ToString().Trim());
                        obj_BE.DESCRIPCIONARTICULO=lector[1].ToString().Trim();
              

                        lista.Add(obj_BE);
                    }

                    lector.Close();
                }
            }
            catch (Exception ex)
            {
                StackTrace st = new StackTrace(ex, true);
                StackFrame frame = st.GetFrames().Where(f => !String.IsNullOrEmpty(f.GetFileName())
                     && f.GetILOffset() != StackFrame.OFFSET_UNKNOWN
                     && f.GetNativeOffset() != StackFrame.OFFSET_UNKNOWN
                     && !f.GetMethod().Module.Assembly.GetName().Name.Contains("mscorlib")).First();

                string MachineName = System.Environment.MachineName;
                string UserName = System.Environment.UserName.ToUpper();
                string Mensaje = ex.Message;
                int LineaError = frame.GetFileLineNumber();
                string Proyecto = frame.GetMethod().Module.Assembly.GetName().Name;
                string Clase = frame.GetMethod().DeclaringType.Name;
                string metodo = frame.GetMethod().Name;
                string codigoError = Convert.ToString(frame.GetHashCode());
            }
            return lista;
        }
        public List<BE_Partida_Arancelaria> OBTENER_COMBO_TIPO_ARTICULO(double CODIGO_ARTICULO)
        {

            List<BE_Partida_Arancelaria> lista = new List<BE_Partida_Arancelaria>();
            try
            {

                iDB2Connection con = new iDB2Connection(conexion);
                con.Open();

                using (iDB2Command cmd = new iDB2Command("SP_OBTENER_COMBO_TIPO_ARTICULO", con))
                {
                    cmd.Parameters.AddWithValue("CODIGO_ARTICULO", CODIGO_ARTICULO);

                    cmd.CommandType = CommandType.StoredProcedure;

                    iDB2DataReader lector = cmd.ExecuteReader(CommandBehavior.CloseConnection);
                    while (lector.Read())
                    {
                        BE_Partida_Arancelaria obj_BE = new BE_Partida_Arancelaria();

                        obj_BE.CODIGOTIPOARTICULO = Convert.ToDouble(lector[0].ToString().Trim());
                        obj_BE.DESCRIPCIONTIPOARTICULO = lector[1].ToString().Trim();


                        lista.Add(obj_BE);
                    }

                    lector.Close();
                }
            }
            catch (Exception ex)
            {
                StackTrace st = new StackTrace(ex, true);
                StackFrame frame = st.GetFrames().Where(f => !String.IsNullOrEmpty(f.GetFileName())
                     && f.GetILOffset() != StackFrame.OFFSET_UNKNOWN
                     && f.GetNativeOffset() != StackFrame.OFFSET_UNKNOWN
                     && !f.GetMethod().Module.Assembly.GetName().Name.Contains("mscorlib")).First();

                string MachineName = System.Environment.MachineName;
                string UserName = System.Environment.UserName.ToUpper();
                string Mensaje = ex.Message;
                int LineaError = frame.GetFileLineNumber();
                string Proyecto = frame.GetMethod().Module.Assembly.GetName().Name;
                string Clase = frame.GetMethod().DeclaringType.Name;
                string metodo = frame.GetMethod().Name;
                string codigoError = Convert.ToString(frame.GetHashCode());
            }
            return lista;
        }
        
        public List<BE_Partida_Arancelaria> OBTENER_COMBO_TONO()
        {

            List<BE_Partida_Arancelaria> lista = new List<BE_Partida_Arancelaria>();
            try
            {

                iDB2Connection con = new iDB2Connection(conexion);
                con.Open();

                using (iDB2Command cmd = new iDB2Command("SP_OBTENER_COMBO_TONO", con))
                {
                   

                    cmd.CommandType = CommandType.StoredProcedure;

                    iDB2DataReader lector = cmd.ExecuteReader(CommandBehavior.CloseConnection);
                    while (lector.Read())
                    {
                        BE_Partida_Arancelaria obj_BE = new BE_Partida_Arancelaria();

                        obj_BE.CODIGOTONO = Convert.ToDouble(lector[0].ToString().Trim());
                        obj_BE.DESCRIPCIONTONO = lector[1].ToString().Trim();


                        lista.Add(obj_BE);
                    }

                    lector.Close();
                }
            }
            catch (Exception ex)
            {
                StackTrace st = new StackTrace(ex, true);
                StackFrame frame = st.GetFrames().Where(f => !String.IsNullOrEmpty(f.GetFileName())
                     && f.GetILOffset() != StackFrame.OFFSET_UNKNOWN
                     && f.GetNativeOffset() != StackFrame.OFFSET_UNKNOWN
                     && !f.GetMethod().Module.Assembly.GetName().Name.Contains("mscorlib")).First();

                string MachineName = System.Environment.MachineName;
                string UserName = System.Environment.UserName.ToUpper();
                string Mensaje = ex.Message;
                int LineaError = frame.GetFileLineNumber();
                string Proyecto = frame.GetMethod().Module.Assembly.GetName().Name;
                string Clase = frame.GetMethod().DeclaringType.Name;
                string metodo = frame.GetMethod().Name;
                string codigoError = Convert.ToString(frame.GetHashCode());
            }
            return lista;
        }


        public List<BE_Partida_Arancelaria> OBTENER_COMBO_COMPAÑIA()
        {

            List<BE_Partida_Arancelaria> lista = new List<BE_Partida_Arancelaria>();
            try
            {

                iDB2Connection con = new iDB2Connection(conexion);
                con.Open();

                using (iDB2Command cmd = new iDB2Command("SP_OBTENER_COMBO_COMPANIA", con))
                {
                  

                    cmd.CommandType = CommandType.StoredProcedure;

                    iDB2DataReader lector = cmd.ExecuteReader(CommandBehavior.CloseConnection);
                    while (lector.Read())
                    {
                        BE_Partida_Arancelaria obj_BE = new BE_Partida_Arancelaria();

                        obj_BE.CODIGOCOMPAÑIA = Convert.ToDouble(lector[0].ToString().Trim());
                        obj_BE.DESCRIPCIONCOMPAÑIA = lector[1].ToString().Trim();


                        lista.Add(obj_BE);
                    }

                    lector.Close();
                }
            }
            catch (Exception ex)
            {
                StackTrace st = new StackTrace(ex, true);
                StackFrame frame = st.GetFrames().Where(f => !String.IsNullOrEmpty(f.GetFileName())
                     && f.GetILOffset() != StackFrame.OFFSET_UNKNOWN
                     && f.GetNativeOffset() != StackFrame.OFFSET_UNKNOWN
                     && !f.GetMethod().Module.Assembly.GetName().Name.Contains("mscorlib")).First();

                string MachineName = System.Environment.MachineName;
                string UserName = System.Environment.UserName.ToUpper();
                string Mensaje = ex.Message;
                int LineaError = frame.GetFileLineNumber();
                string Proyecto = frame.GetMethod().Module.Assembly.GetName().Name;
                string Clase = frame.GetMethod().DeclaringType.Name;
                string metodo = frame.GetMethod().Name;
                string codigoError = Convert.ToString(frame.GetHashCode());
            }
            return lista;
        }

        public List<BE_Partida_Arancelaria> OBTENER_PARTIDA_ARANCELARIA(double NROPARTIDA)
        {
            List<BE_Partida_Arancelaria> lista = new List<BE_Partida_Arancelaria>();
            try
            {

                iDB2Connection con = new iDB2Connection(conexion);
                con.Open();

                using (iDB2Command cmd = new iDB2Command("SP_OBTENER_PARTIDA_ARANCELARIA", con))
                {
                    cmd.Parameters.AddWithValue("@NROPARTIDA", NROPARTIDA);
                  
                    cmd.CommandType = CommandType.StoredProcedure;

                    iDB2DataReader lector = cmd.ExecuteReader(CommandBehavior.CloseConnection);
                    while (lector.Read())
                    {
                        BE_Partida_Arancelaria obj_BE = new BE_Partida_Arancelaria();

                        obj_BE.NROPAR = Convert.ToDouble(lector[0].ToString().Trim());
                        obj_BE.DESPAR = lector[1].ToString().Trim();
                        obj_BE.STAPAR = lector[2].ToString().Trim();


                        lista.Add(obj_BE);
                    }

                    lector.Close();
                }
            }
            catch (Exception ex)
            {
                StackTrace st = new StackTrace(ex, true);
                StackFrame frame = st.GetFrames().Where(f => !String.IsNullOrEmpty(f.GetFileName())
                     && f.GetILOffset() != StackFrame.OFFSET_UNKNOWN
                     && f.GetNativeOffset() != StackFrame.OFFSET_UNKNOWN
                     && !f.GetMethod().Module.Assembly.GetName().Name.Contains("mscorlib")).First();

                string MachineName = System.Environment.MachineName;
                string UserName = System.Environment.UserName.ToUpper();
                string Mensaje = ex.Message;
                int LineaError = frame.GetFileLineNumber();
                string Proyecto = frame.GetMethod().Module.Assembly.GetName().Name;
                string Clase = frame.GetMethod().DeclaringType.Name;
                string metodo = frame.GetMethod().Name;
                string codigoError = Convert.ToString(frame.GetHashCode());
            }
            return lista;
        }
        
             public List<BE_Partida_Arancelaria> OBTENER_PARTIDA_ARANCELARIA_CONEXION(double CODIGOCIA, double CODIGOARTICULO, double CODIGOTIPOARTICULO, double CODIGOTONOCOLOR, double PARTIDA)
        {
            List<BE_Partida_Arancelaria> lista = new List<BE_Partida_Arancelaria>();
            try
            {

                iDB2Connection con = new iDB2Connection(conexion);
                con.Open();

                using (iDB2Command cmd = new iDB2Command("SP_OBTENER_PARTIDA_ARANCELARIA_CONEXION", con))
                {
                    cmd.Parameters.AddWithValue("CODIGOCIA", CODIGOCIA);
                    cmd.Parameters.AddWithValue("CODIGOARTICULO", CODIGOARTICULO);
                    cmd.Parameters.AddWithValue("CODIGOTIPOARTICULO", CODIGOTIPOARTICULO);
                    cmd.Parameters.AddWithValue("CODIGOTONOCOLOR", CODIGOTONOCOLOR);
                    cmd.Parameters.AddWithValue("PARTIDA", PARTIDA);

                    cmd.CommandType = CommandType.StoredProcedure;

                    iDB2DataReader lector = cmd.ExecuteReader(CommandBehavior.CloseConnection);
                    while (lector.Read())
                    {
                        BE_Partida_Arancelaria obj_BE = new BE_Partida_Arancelaria();

                        obj_BE.CODCIA = Convert.ToDouble(lector[0].ToString().Trim());
                        obj_BE.CODARTICULO = Convert.ToDouble(lector[1].ToString().Trim());
                        obj_BE.CODIGOTIPOARTICULO = Convert.ToDouble(lector[2].ToString().Trim());
                        obj_BE.CODIGOTONO = Convert.ToDouble(lector[3].ToString().Trim());
                        obj_BE.NROPAR = Convert.ToDouble(lector[4].ToString().Trim());
                        obj_BE.ESTADO = lector[5].ToString().Trim();
                        obj_BE.DESCRIPCIONARTICULO = lector[6].ToString().Trim();


                        lista.Add(obj_BE);
                    }

                    lector.Close();
                }
            }
            catch (Exception ex)
            {
                StackTrace st = new StackTrace(ex, true);
                StackFrame frame = st.GetFrames().Where(f => !String.IsNullOrEmpty(f.GetFileName())
                     && f.GetILOffset() != StackFrame.OFFSET_UNKNOWN
                     && f.GetNativeOffset() != StackFrame.OFFSET_UNKNOWN
                     && !f.GetMethod().Module.Assembly.GetName().Name.Contains("mscorlib")).First();

                string MachineName = System.Environment.MachineName;
                string UserName = System.Environment.UserName.ToUpper();
                string Mensaje = ex.Message;
                int LineaError = frame.GetFileLineNumber();
                string Proyecto = frame.GetMethod().Module.Assembly.GetName().Name;
                string Clase = frame.GetMethod().DeclaringType.Name;
                string metodo = frame.GetMethod().Name;
                string codigoError = Convert.ToString(frame.GetHashCode());
            }
            return lista;
        }
        public int GRABAR_PARTIDA_ARANCELARIA(double NROPARTIDA, string DESCRIPCION)
        {
            int val = 0;

            iDB2Connection con = new iDB2Connection(conexion);
            con.Open();
            using (iDB2Transaction  transaccion = con.BeginTransaction())
            {
                try
                {

                    using (iDB2Command cmd = transaccion.Connection.CreateCommand())
                    {
                        val = 0;
                        cmd.CommandText = "SP_GRABAR_PARTIDA_ARANCELARIA";
                        cmd.Transaction = transaccion;
                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("NROPARTIDA", NROPARTIDA);
                        cmd.Parameters.AddWithValue("DESCRIPCION", DESCRIPCION);
                      

                        val = cmd.ExecuteNonQuery();
                        cmd.Parameters.Clear();
                    }
                    transaccion.Commit();

                }
                catch (Exception ex)
                {

                    StackTrace st = new StackTrace(ex, true);
                    StackFrame frame = st.GetFrames().Where(f => !String.IsNullOrEmpty(f.GetFileName())
                         && f.GetILOffset() != StackFrame.OFFSET_UNKNOWN
                         && f.GetNativeOffset() != StackFrame.OFFSET_UNKNOWN
                         && !f.GetMethod().Module.Assembly.GetName().Name.Contains("mscorlib")).First();

                    string MachineName = System.Environment.MachineName;
                    string UserName = System.Environment.UserName.ToUpper();
                    string Mensaje = ex.Message;
                    int LineaError = frame.GetFileLineNumber();
                    string Proyecto = frame.GetMethod().Module.Assembly.GetName().Name;
                    string Clase = frame.GetMethod().DeclaringType.Name;
                    string metodo = frame.GetMethod().Name;
                    string codigoError = Convert.ToString(frame.GetHashCode());
                    string codigoError_db2 =((IBM.Data.DB2.iSeries.iDB2Exception)ex).SqlState;
                    val =Convert.ToInt32(codigoError_db2);

                    transaccion.Rollback();
                }



            }




            return val;

        }
        
              public int GRABAR_PARTIDA_ARANCELARIA_CONEXION(double NRO_PARTIDA, double COD_CIA, double COD_ARTICULO, double TIPO_ARTICULO, double COD_TONO)
        {
            int val = 0;

            iDB2Connection con = new iDB2Connection(conexion);
            con.Open();
            using (iDB2Transaction transaccion = con.BeginTransaction())
            {
                try
                {

                    using (iDB2Command cmd = transaccion.Connection.CreateCommand())
                    {
                        val = 0;
                        cmd.CommandText = "SP_GRABAR_PARTIDA_ARANCELARIA_CONEXION";
                        cmd.Transaction = transaccion;
                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("NRO_PARTIDA", NRO_PARTIDA);
                        cmd.Parameters.AddWithValue("COD_CIA", COD_CIA);
                        cmd.Parameters.AddWithValue("COD_ARTICULO", COD_ARTICULO);
                        cmd.Parameters.AddWithValue("TIPO_ARTICULO", TIPO_ARTICULO);
                        cmd.Parameters.AddWithValue("COD_TONO", COD_TONO);
                     


                        val = cmd.ExecuteNonQuery();
                        cmd.Parameters.Clear();
                    }
                    transaccion.Commit();

                }
                catch (Exception ex)
                {

                    StackTrace st = new StackTrace(ex, true);
                    StackFrame frame = st.GetFrames().Where(f => !String.IsNullOrEmpty(f.GetFileName())
                         && f.GetILOffset() != StackFrame.OFFSET_UNKNOWN
                         && f.GetNativeOffset() != StackFrame.OFFSET_UNKNOWN
                         && !f.GetMethod().Module.Assembly.GetName().Name.Contains("mscorlib")).First();

                    string MachineName = System.Environment.MachineName;
                    string UserName = System.Environment.UserName.ToUpper();
                    string Mensaje = ex.Message;
                    int LineaError = frame.GetFileLineNumber();
                    string Proyecto = frame.GetMethod().Module.Assembly.GetName().Name;
                    string Clase = frame.GetMethod().DeclaringType.Name;
                    string metodo = frame.GetMethod().Name;
                    string codigoError = Convert.ToString(frame.GetHashCode());
                    string codigoError_db2 = ((IBM.Data.DB2.iSeries.iDB2Exception)ex).SqlState;
                    val = Convert.ToInt32(codigoError_db2);

                    transaccion.Rollback();
                }



            }




            return val;

        }
        
            public int ACTUALIZAR_PARTIDA_ARANCELARIA_CONEXION(double NRO_PARTIDA, double COD_CIA, double COD_ARTICULO, double TIPO_ARTICULO, double COD_TONO,string ESTADO)
        {
            int val = 0;

            iDB2Connection con = new iDB2Connection(conexion);
            con.Open();
            using (iDB2Transaction transaccion = con.BeginTransaction())
            {
                try
                {

                    using (iDB2Command cmd = transaccion.Connection.CreateCommand())
                    {
                        val = 0;
                        cmd.CommandText = "SP_ACTUALIZAR_PARTIDA_ARANCELARIA_CONEXION";
                        cmd.Transaction = transaccion;
                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("NRO_PARTIDA", NRO_PARTIDA);
                        cmd.Parameters.AddWithValue("COD_CIA", COD_CIA);
                        cmd.Parameters.AddWithValue("COD_ARTICULO", COD_ARTICULO);
                        cmd.Parameters.AddWithValue("TIPO_ARTICULO", TIPO_ARTICULO);
                        cmd.Parameters.AddWithValue("COD_TONO", COD_TONO);
                        cmd.Parameters.AddWithValue("ESTADO_ART", ESTADO);



                        val = cmd.ExecuteNonQuery();
                        cmd.Parameters.Clear();
                    }
                    transaccion.Commit();

                }
                catch (Exception ex)
                {

                    StackTrace st = new StackTrace(ex, true);
                    StackFrame frame = st.GetFrames().Where(f => !String.IsNullOrEmpty(f.GetFileName())
                         && f.GetILOffset() != StackFrame.OFFSET_UNKNOWN
                         && f.GetNativeOffset() != StackFrame.OFFSET_UNKNOWN
                         && !f.GetMethod().Module.Assembly.GetName().Name.Contains("mscorlib")).First();

                    string MachineName = System.Environment.MachineName;
                    string UserName = System.Environment.UserName.ToUpper();
                    string Mensaje = ex.Message;
                    int LineaError = frame.GetFileLineNumber();
                    string Proyecto = frame.GetMethod().Module.Assembly.GetName().Name;
                    string Clase = frame.GetMethod().DeclaringType.Name;
                    string metodo = frame.GetMethod().Name;
                    string codigoError = Convert.ToString(frame.GetHashCode());
                    string codigoError_db2 = ((IBM.Data.DB2.iSeries.iDB2Exception)ex).SqlState;
                    val = Convert.ToInt32(codigoError_db2);

                    transaccion.Rollback();
                }



            }




            return val;

        }
        public int ACTUALIZAR_PARTIDA_ARANCELARIA(double NROPARTIDA, string DESCRIPCION, int ESTADO)
        {
            int val = 0;
           
            iDB2Connection con = new iDB2Connection(conexion);
            con.Open();
            using (iDB2Transaction transaccion = con.BeginTransaction())
            {
                try
                {

                    using (iDB2Command cmd = transaccion.Connection.CreateCommand())
                    {
                        val = 0;
                        cmd.CommandText = "SP_ACTUALIZAR_PARTIDA_ARANCELARIA";
                        cmd.Transaction = transaccion;
                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("@NROPARTIDA", NROPARTIDA);
                        cmd.Parameters.AddWithValue("@DESCRIPCION", DESCRIPCION.Trim());
                        cmd.Parameters.AddWithValue("@ESTADO", ESTADO);

                        val = cmd.ExecuteNonQuery();
                        cmd.Parameters.Clear();
                    }
                    transaccion.Commit();

                }
                catch (Exception ex)
                {

                    StackTrace st = new StackTrace(ex, true);
                    StackFrame frame = st.GetFrames().Where(f => !String.IsNullOrEmpty(f.GetFileName())
                         && f.GetILOffset() != StackFrame.OFFSET_UNKNOWN
                         && f.GetNativeOffset() != StackFrame.OFFSET_UNKNOWN
                         && !f.GetMethod().Module.Assembly.GetName().Name.Contains("mscorlib")).First();

                    string MachineName = System.Environment.MachineName;
                    string UserName = System.Environment.UserName.ToUpper();
                    string Mensaje = ex.Message;
                    int LineaError = frame.GetFileLineNumber();
                    string Proyecto = frame.GetMethod().Module.Assembly.GetName().Name;
                    string Clase = frame.GetMethod().DeclaringType.Name;
                    string metodo = frame.GetMethod().Name;
                    string codigoError = Convert.ToString(frame.GetHashCode());
                    string codigoError_db2 = ((IBM.Data.DB2.iSeries.iDB2Exception)ex).SqlState;
                    val = Convert.ToInt32(codigoError_db2);

                    transaccion.Rollback();
                }



            }




            return val;

        }

        public int ELIMINAR_PARTIDA_ARANCELARIA(double NROPARTIDA)
        {
            int val = 0;

            iDB2Connection con = new iDB2Connection(conexion);
            con.Open();
            using (iDB2Transaction transaccion = con.BeginTransaction())
            {
                try
                {

                    using (iDB2Command cmd = transaccion.Connection.CreateCommand())
                    {
                        val = 0;
                        cmd.CommandText = "SP_ELIMINAR_PARTIDA_ARANCELARIA";
                        cmd.Transaction = transaccion;
                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("@NROPARTIDA", NROPARTIDA);
                       

                        val = cmd.ExecuteNonQuery();
                        cmd.Parameters.Clear();
                    }
                    transaccion.Commit();

                }
                catch (Exception ex)
                {

                    StackTrace st = new StackTrace(ex, true);
                    StackFrame frame = st.GetFrames().Where(f => !String.IsNullOrEmpty(f.GetFileName())
                         && f.GetILOffset() != StackFrame.OFFSET_UNKNOWN
                         && f.GetNativeOffset() != StackFrame.OFFSET_UNKNOWN
                         && !f.GetMethod().Module.Assembly.GetName().Name.Contains("mscorlib")).First();

                    string MachineName = System.Environment.MachineName;
                    string UserName = System.Environment.UserName.ToUpper();
                    string Mensaje = ex.Message;
                    int LineaError = frame.GetFileLineNumber();
                    string Proyecto = frame.GetMethod().Module.Assembly.GetName().Name;
                    string Clase = frame.GetMethod().DeclaringType.Name;
                    string metodo = frame.GetMethod().Name;
                    string codigoError = Convert.ToString(frame.GetHashCode());
                    string codigoError_db2 = ((IBM.Data.DB2.iSeries.iDB2Exception)ex).SqlState;
                    val = Convert.ToInt32(codigoError_db2);

                    transaccion.Rollback();
                }



            }




            return val;

        }

            public int ELIMINAR_PARTIDA_ARANCELARIA_CONEXION( double COD_CIA, double COD_ARTICULO, double TIPO_ARTICULO, double COD_TONO, double NRO_PARTIDA)
        {
            int val = 0;

            iDB2Connection con = new iDB2Connection(conexion);
            con.Open();
            using (iDB2Transaction transaccion = con.BeginTransaction())
            {
                try
                {

                    using (iDB2Command cmd = transaccion.Connection.CreateCommand())
                    {
                        val = 0;
                        cmd.CommandText = "SP_ELIMINAR_PARTIDA_ARANCELARIA_CONEXION";
                        cmd.Transaction = transaccion;
                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("COD_CIA", COD_CIA);
                        cmd.Parameters.AddWithValue("COD_ARTICULO", COD_ARTICULO);
                        cmd.Parameters.AddWithValue("TIPO_ARTICULO", TIPO_ARTICULO);
                        cmd.Parameters.AddWithValue("COD_TONO", COD_TONO);
                        cmd.Parameters.AddWithValue("NRO_PARTIDA", NRO_PARTIDA);



                        val = cmd.ExecuteNonQuery();
                        cmd.Parameters.Clear();
                    }
                    transaccion.Commit();

                }
                catch (Exception ex)
                {

                    StackTrace st = new StackTrace(ex, true);
                    StackFrame frame = st.GetFrames().Where(f => !String.IsNullOrEmpty(f.GetFileName())
                         && f.GetILOffset() != StackFrame.OFFSET_UNKNOWN
                         && f.GetNativeOffset() != StackFrame.OFFSET_UNKNOWN
                         && !f.GetMethod().Module.Assembly.GetName().Name.Contains("mscorlib")).First();

                    string MachineName = System.Environment.MachineName;
                    string UserName = System.Environment.UserName.ToUpper();
                    string Mensaje = ex.Message;
                    int LineaError = frame.GetFileLineNumber();
                    string Proyecto = frame.GetMethod().Module.Assembly.GetName().Name;
                    string Clase = frame.GetMethod().DeclaringType.Name;
                    string metodo = frame.GetMethod().Name;
                    string codigoError = Convert.ToString(frame.GetHashCode());
                    string codigoError_db2 = ((IBM.Data.DB2.iSeries.iDB2Exception)ex).SqlState;
                    val = Convert.ToInt32(codigoError_db2);

                    transaccion.Rollback();
                }



            }




            return val;

        }

        public int VALIDAR_ELIMINAR_CONEXION(string PARTIDA,double COD_ARTICULO)
        {

            int cantidad = 0;
            try
            {

                iDB2Connection con = new iDB2Connection(conexion);
                con.Open();

                using (iDB2Command cmd = new iDB2Command("SP_VALIDAR_ELIMINAR_CONEXION", con))
                {
                    cmd.Parameters.AddWithValue("@NRO_PARTIDA", PARTIDA.Trim()); 
                        cmd.Parameters.AddWithValue("@COD_ARTICULO", COD_ARTICULO);
                    cmd.CommandType = CommandType.StoredProcedure;

                    iDB2DataReader lector = cmd.ExecuteReader(CommandBehavior.CloseConnection);
                    while (lector.Read())
                    {


                        cantidad = Convert.ToInt32(lector[0].ToString().Trim());

                    }



                    lector.Close();
                }
            }
            catch (Exception ex)
            {
                StackTrace st = new StackTrace(ex, true);
                StackFrame frame = st.GetFrames().Where(f => !String.IsNullOrEmpty(f.GetFileName())
                     && f.GetILOffset() != StackFrame.OFFSET_UNKNOWN
                     && f.GetNativeOffset() != StackFrame.OFFSET_UNKNOWN
                     && !f.GetMethod().Module.Assembly.GetName().Name.Contains("mscorlib")).First();

                string MachineName = System.Environment.MachineName;
                string UserName = System.Environment.UserName.ToUpper();
                string Mensaje = ex.Message;
                int LineaError = frame.GetFileLineNumber();
                string Proyecto = frame.GetMethod().Module.Assembly.GetName().Name;
                string Clase = frame.GetMethod().DeclaringType.Name;
                string metodo = frame.GetMethod().Name;
                string codigoError = Convert.ToString(frame.GetHashCode());
                string codigoError_db2 = ((IBM.Data.DB2.iSeries.iDB2Exception)ex).SqlState;
            }
            return cantidad;
        }
        
             public int VALIDAR_ELIMINAR_PARTIDA(string PARTIDA)
        {

            int cantidad = 0;
            try
            {

                iDB2Connection con = new iDB2Connection(conexion);
                con.Open();

                using (iDB2Command cmd = new iDB2Command("SP_VALIDAR_ELIMINAR_PARTIDA", con))
                {
                    cmd.Parameters.AddWithValue("@NRO_PARTIDA", PARTIDA.Trim());
               
                    cmd.CommandType = CommandType.StoredProcedure;

                    iDB2DataReader lector = cmd.ExecuteReader(CommandBehavior.CloseConnection);
                    while (lector.Read())
                    {


                        cantidad = Convert.ToInt32(lector[0].ToString().Trim());

                    }



                    lector.Close();
                }
            }
            catch (Exception ex)
            {
                StackTrace st = new StackTrace(ex, true);
                StackFrame frame = st.GetFrames().Where(f => !String.IsNullOrEmpty(f.GetFileName())
                     && f.GetILOffset() != StackFrame.OFFSET_UNKNOWN
                     && f.GetNativeOffset() != StackFrame.OFFSET_UNKNOWN
                     && !f.GetMethod().Module.Assembly.GetName().Name.Contains("mscorlib")).First();

                string MachineName = System.Environment.MachineName;
                string UserName = System.Environment.UserName.ToUpper();
                string Mensaje = ex.Message;
                int LineaError = frame.GetFileLineNumber();
                string Proyecto = frame.GetMethod().Module.Assembly.GetName().Name;
                string Clase = frame.GetMethod().DeclaringType.Name;
                string metodo = frame.GetMethod().Name;
                string codigoError = Convert.ToString(frame.GetHashCode());
                string codigoError_db2 = ((IBM.Data.DB2.iSeries.iDB2Exception)ex).SqlState;
            }
            return cantidad;
        }
    }
}