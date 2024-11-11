using BE;
using IBM.Data.DB2.iSeries;
using System;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.Configuration;
using System.Data;
using System.Diagnostics;
using System.Linq;
using System.Web;

namespace DA
{
    public class DA_DAM
    {
        string conexion = ConfigurationManager.ConnectionStrings["ConexionAS400"].ConnectionString;
        public List<BE_DAM> OBTENER_COMBO_PARTIDA(string DATO)
        {

            List<BE_DAM> lista = new List<BE_DAM>();
            try
            {

                iDB2Connection con = new iDB2Connection(conexion);
                con.Open();

                using (iDB2Command cmd = new iDB2Command("SP_OBTENER_COMBO_PARTIDA", con))
                {
                    cmd.Parameters.AddWithValue("DATO", DATO);

                    cmd.CommandType = CommandType.StoredProcedure;

                    iDB2DataReader lector = cmd.ExecuteReader(CommandBehavior.CloseConnection);
                    while (lector.Read())
                    {
                        BE_DAM obj_BE = new BE_DAM();

                        obj_BE.NROPAR = Convert.ToDouble(lector[0].ToString().Trim());
                        //obj_BE.DESCRIPCIONARTICULO = lector[1].ToString().Trim();


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
        public List<BE_DAM> OBTENER_COMBO_CLIENTE(string DATO)
        {

            List<BE_DAM> lista = new List<BE_DAM>();
            try
            {

                iDB2Connection con = new iDB2Connection(conexion);
                con.Open();

                using (iDB2Command cmd = new iDB2Command("SP_OBTENER_COMBO_CLIENTE", con))
                {
                    cmd.Parameters.AddWithValue("DATO", DATO);

                    cmd.CommandType = CommandType.StoredProcedure;

                    iDB2DataReader lector = cmd.ExecuteReader(CommandBehavior.CloseConnection);
                    while (lector.Read())
                    {
                        BE_DAM obj_BE = new BE_DAM();

                        obj_BE.CODCLI = lector[0].ToString().Trim();
                        obj_BE.RAZCLI = lector[1].ToString().Trim();


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
        public List<BE_DAM> BUSCAR_DAM(double COMPAÑIA_BUSCAR, string DAM_BUSCAR, string CLIENTE_BUSCAR, double ESTADO_BUSCAR)
        {

            List<BE_DAM> lista = new List<BE_DAM>();
            try
            {

                iDB2Connection con = new iDB2Connection(conexion);
                con.Open();

                using (iDB2Command cmd = new iDB2Command("SP_BUSCAR_DAM", con))
                {
                    cmd.Parameters.AddWithValue("COMPAÑIA_BUSCAR", COMPAÑIA_BUSCAR);
                    cmd.Parameters.AddWithValue("NRO_DAM", DAM_BUSCAR.Trim());
                    cmd.Parameters.AddWithValue("CLIENTE_BUSCAR", CLIENTE_BUSCAR.Trim());
                    cmd.Parameters.AddWithValue("ESTADO_BUSCAR", ESTADO_BUSCAR);


                    cmd.CommandType = CommandType.StoredProcedure;

                    iDB2DataReader lector = cmd.ExecuteReader(CommandBehavior.CloseConnection);
                    while (lector.Read())
                    {
                        BE_DAM obj_BE = new BE_DAM();

                        obj_BE.CODCIA = Convert.ToDouble(lector[0].ToString().Trim());
                        obj_BE.DESCRIPCION_CIA = lector[1].ToString().Trim();
                        obj_BE.DAM = lector[2].ToString().Trim();
                        obj_BE.CODCLI = lector[3].ToString().Trim();
                        obj_BE.RAZCLI = lector[4].ToString().Trim();
                        obj_BE.ESTADO = lector[5].ToString().Trim();


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
        public List<BE_DAM> BUSCAR_SERIE(string NRO_DAM)
        {

            List<BE_DAM> lista = new List<BE_DAM>();
            try
            {

                iDB2Connection con = new iDB2Connection(conexion);
                con.Open();

                using (iDB2Command cmd = new iDB2Command("SP_BUSCAR_SERIE", con))
                {
                    cmd.Parameters.AddWithValue("@NRO_DAM", NRO_DAM);



                    cmd.CommandType = CommandType.StoredProcedure;

                    iDB2DataReader lector = cmd.ExecuteReader(CommandBehavior.CloseConnection);
                    while (lector.Read())
                    {
                        BE_DAM obj_BE = new BE_DAM();

                        obj_BE.SERIE = lector[0].ToString().Trim();
                        obj_BE.NROPAR = Convert.ToDouble(lector[1].ToString().Trim());
                        obj_BE.DESCRIPCION_ARTICULO = lector[2].ToString().Trim();
                        obj_BE.DESCRIPCION_COLOR = lector[3].ToString().Trim();
                        obj_BE.CODIGO_ARTICULO = Convert.ToDouble(lector[4].ToString().Trim());
                        obj_BE.TIPO_ARTICULO = Convert.ToDouble(lector[5].ToString().Trim());
                        obj_BE.CODIGO_COLOR = Convert.ToInt32(lector[6].ToString().Trim());
                        obj_BE.ESTADO = lector[7].ToString().Trim();


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
        public int GRABAR_DAM(string DAM, string CLIENTE, double COMPAÑIA)
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
                        cmd.CommandText = "SP_GRABAR_DAM";
                        cmd.Transaction = transaccion;
                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("NRO_DAM", DAM);
                        cmd.Parameters.AddWithValue("NRO_CLIENTE", CLIENTE);
                        cmd.Parameters.AddWithValue("NRO_COMPAÑIA", COMPAÑIA);

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
        public int GRABAR_SERIE(string DAM, string SERIE, double PARTIDA, double COD_ARTICULO, double TIP_ARTICULO, double COD_COLOR)
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
                        cmd.CommandText = "SP_GRABAR_SERIE";
                        cmd.Transaction = transaccion;
                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("@NRO_DAM", DAM);
                        cmd.Parameters.AddWithValue("@NRO_SERIE", SERIE);
                        cmd.Parameters.AddWithValue("@NRO_PARTIDA", PARTIDA);
                        cmd.Parameters.AddWithValue("@COD_ARTICULO", COD_ARTICULO);
                        cmd.Parameters.AddWithValue("@TIP_ARTICULO", TIP_ARTICULO);
                        cmd.Parameters.AddWithValue("@COD_COLOR", COD_COLOR);

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
        public List<BE_DAM> OBTENER_DAM(string DAM)
        {
            //string estado_nuevo;
            //if (ESTADO == "ACTIVO") { estado_nuevo = "0"; } else { estado_nuevo = "1"; }

            List<BE_DAM> lista = new List<BE_DAM>();
            try
            {

                iDB2Connection con = new iDB2Connection(conexion);
                con.Open();

                using (iDB2Command cmd = new iDB2Command("SP_OBTENER_DAM", con))
                {
                    //cmd.Parameters.AddWithValue("NRO_PARTIDA", PARTIDA);
                    cmd.Parameters.AddWithValue("NRO_DAM", DAM.Trim());
                    //cmd.Parameters.AddWithValue("NRO_SERIE", SERIE.Trim());
                    //cmd.Parameters.AddWithValue("ESTADO", estado_nuevo.Trim());


                    cmd.CommandType = CommandType.StoredProcedure;

                    iDB2DataReader lector = cmd.ExecuteReader(CommandBehavior.CloseConnection);
                    while (lector.Read())
                    {
                        BE_DAM obj_BE = new BE_DAM();

                        obj_BE.CODCIA = Convert.ToDouble(lector[0].ToString().Trim());
                        obj_BE.DAM = lector[2].ToString().Trim();
                        obj_BE.CODCLI = lector[3].ToString().Trim();
                        obj_BE.RAZCLI = lector[4].ToString().Trim();
                        obj_BE.ESTADO = lector[5].ToString().Trim();


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
                string codigoError_db2 = ((IBM.Data.DB2.iSeries.iDB2Exception)ex).SqlState;
            }
            return lista;
        }
        public List<BE_DAM> OBTENER_SERIE(string DAM, string SERIE)
        {
            //string estado_nuevo;
            //if (ESTADO == "ACTIVO") { estado_nuevo = "0"; } else { estado_nuevo = "1"; }

            List<BE_DAM> lista = new List<BE_DAM>();
            try
            {

                iDB2Connection con = new iDB2Connection(conexion);
                con.Open();

                using (iDB2Command cmd = new iDB2Command("SP_OBTENER_SERIE", con))
                {
                    //cmd.Parameters.AddWithValue("NRO_PARTIDA", PARTIDA);
                    cmd.Parameters.AddWithValue("NRO_DAM", DAM.Trim());
                    cmd.Parameters.AddWithValue("NRO_SERIE", SERIE.Trim());
                    //cmd.Parameters.AddWithValue("ESTADO", estado_nuevo.Trim());


                    cmd.CommandType = CommandType.StoredProcedure;

                    iDB2DataReader lector = cmd.ExecuteReader(CommandBehavior.CloseConnection);
                    while (lector.Read())
                    {
                        BE_DAM obj_BE = new BE_DAM();

                        obj_BE.DAM = lector[0].ToString().Trim();
                        obj_BE.SERIE = lector[1].ToString().Trim();
                        obj_BE.NROPAR = Convert.ToDouble(lector[2].ToString().Trim());
                        obj_BE.ESTADO = lector[3].ToString().Trim();
                        obj_BE.FECHA_CREACION = lector[4].ToString().Trim();


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
                string codigoError_db2 = ((IBM.Data.DB2.iSeries.iDB2Exception)ex).SqlState;
            }
            return lista;
        }
        public int ELIMINAR_DAM(string DAM)
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
                        cmd.CommandText = "SP_ELIMINAR_DAM";
                        cmd.Transaction = transaccion;
                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("NRO_DAM", DAM.Trim());

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


                    transaccion.Rollback();
                }



            }




            return val;

        }
        public int ELIMINAR_SERIE(string DAM, string SERIE, double NRO_PARTIDA, double COD_ARTICULO, double COD_COLOR)
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
                        cmd.CommandText = "SP_ELIMINAR_SERIE";
                        cmd.Transaction = transaccion;
                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("@NRO_DAM", DAM.Trim());
                        cmd.Parameters.AddWithValue("@NRO_SERIE", SERIE);
                        cmd.Parameters.AddWithValue("@NRO_PARTIDA", NRO_PARTIDA);
                        cmd.Parameters.AddWithValue("@COD_ARTICULO", COD_ARTICULO);
                        cmd.Parameters.AddWithValue("@COD_COLOR", COD_COLOR);
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


                    transaccion.Rollback();
                }



            }




            return val;

        }
        public int ACTUALIZAR_DAM(string DAM, string CLIENTE, double COMPAÑIA, double ESTADO)
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
                        cmd.CommandText = "SP_ACTUALIZAR_DAM";
                        cmd.Transaction = transaccion;
                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("NRO_DAM", DAM);
                        cmd.Parameters.AddWithValue("NRO_CLIENTE", CLIENTE);
                        cmd.Parameters.AddWithValue("NRO_COMPAÑIA", COMPAÑIA);
                        cmd.Parameters.AddWithValue("COD_ESTADO", ESTADO);

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
        public int ACTUALIZAR_SERIE(string DAM, string SERIE, double PARTIDA, double ESTADO)
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
                        cmd.CommandText = "SP_ACTUALIZAR_SERIE";
                        cmd.Transaction = transaccion;
                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("NRO_DAM", DAM);
                        cmd.Parameters.AddWithValue("NRO_SERIE", SERIE);
                        cmd.Parameters.AddWithValue("NRO_PARTIDA", PARTIDA);
                        cmd.Parameters.AddWithValue("COD_ESTADO", ESTADO);

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
        public List<BE_DAM> OBTENER_GUIAS_CLIENTE(string COD_CLIENTE)
        {

            List<BE_DAM> lista = new List<BE_DAM>();
            try
            {

                iDB2Connection con = new iDB2Connection(conexion);
                con.Open();

                using (iDB2Command cmd = new iDB2Command("SP_OBTENER_GUIAS_CLIENTE", con))
                {

                    cmd.Parameters.AddWithValue("COD_CLIENTE", COD_CLIENTE.Trim());



                    cmd.CommandType = CommandType.StoredProcedure;

                    iDB2DataReader lector = cmd.ExecuteReader(CommandBehavior.CloseConnection);
                    while (lector.Read())
                    {
                        BE_DAM obj_BE = new BE_DAM();

                        obj_BE.CODCIA = Convert.ToDouble(lector[0].ToString().Trim());
                        obj_BE.DESCRIPCION_CIA = lector[1].ToString().Trim();
                        obj_BE.ANIO_GUIA = Convert.ToDouble(lector[2].ToString().Trim());
                        obj_BE.SERIE_GUIA = lector[3].ToString().Trim();
                        obj_BE.NUMERO_GUIA = Convert.ToDouble(lector[4].ToString().Trim());
                        obj_BE.FECHA_EMISION_GUIA = lector[5].ToString().Trim();
                        obj_BE.CODIGO_COMPLETO_GUIA = lector[6].ToString().Trim();
                        obj_BE.NUMERO_FACTURA = lector[7].ToString().Trim();
                        obj_BE.DAM = lector[8].ToString().Trim();

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
                string codigoError_db2 = ((IBM.Data.DB2.iSeries.iDB2Exception)ex).SqlState;
            }
            return lista;
        }
        public List<BE_DAM> VALIDAR_GUIA_DAM(double COMPAÑIA_GUIA, double AÑO_GUIA, string SERIE_GUIA, string NRO_GUIA, string NRO_DAM)
        {

            List<BE_DAM> lista = new List<BE_DAM>();
            try
            {

                iDB2Connection con = new iDB2Connection(conexion);
                con.Open();

                using (iDB2Command cmd = new iDB2Command("SP_VALIDAR_GUIA_DAM", con))
                {

                    cmd.Parameters.AddWithValue("@COD_CIA", COMPAÑIA_GUIA);
                    cmd.Parameters.AddWithValue("@ANO_GUIA", AÑO_GUIA);
                    cmd.Parameters.AddWithValue("@SERIE_GUIA", SERIE_GUIA.Trim());
                    cmd.Parameters.AddWithValue("@NRO_GUIA",Convert.ToInt32(NRO_GUIA.Trim()));
                    cmd.Parameters.AddWithValue("@NRO_DAM", NRO_DAM.Trim());
                    cmd.CommandType = CommandType.StoredProcedure;

                    iDB2DataReader lector = cmd.ExecuteReader(CommandBehavior.CloseConnection);
                    while (lector.Read())
                    {
                        BE_DAM obj_BE = new BE_DAM();

                        obj_BE.CODCIA = Convert.ToDouble(lector[0].ToString().Trim());
                        obj_BE.ANIO_PEDIDO = Convert.ToDouble(lector[1].ToString().Trim());
                        obj_BE.SERIE_PEDIDO = lector[2].ToString().Trim();
                        obj_BE.NUMERO_PEDIDO = Convert.ToDouble(lector[3].ToString().Trim());
                        obj_BE.CODIGO_ARTICULO = Convert.ToDouble(lector[5].ToString().Trim());
                        obj_BE.PARTIDA_VALIDAR = lector[7].ToString().Trim();
                        obj_BE.DAM_PARTIDA_VALIDAR = lector[8].ToString().Trim();


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
                string codigoError_db2 = ((IBM.Data.DB2.iSeries.iDB2Exception)ex).SqlState;
            }
            return lista;
        }

         public int VALIDAR_GUIA_SERIE(double NRO_CIA_GUIA, double ANO_GUIA, string SERIE_GUIA, string NRO_GUIA, string NRO_DAM)
        {

            int cantidad = 0;
            try
            {

                iDB2Connection con = new iDB2Connection(conexion);
                con.Open();

                using (iDB2Command cmd = new iDB2Command("SP_VALIDAR_GUIA_SERIES", con))
                {

                    cmd.Parameters.AddWithValue("@COD_CIA", NRO_CIA_GUIA);
                    cmd.Parameters.AddWithValue("@ANO_GUIA", ANO_GUIA);
                    cmd.Parameters.AddWithValue("@SERIE_GUIA", SERIE_GUIA.Trim());
                    cmd.Parameters.AddWithValue("@NRO_GUIA", Convert.ToInt32(NRO_GUIA.Trim()));
                    cmd.Parameters.AddWithValue("@NRO_DAM", NRO_DAM.Trim());
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
        
              public int VALIDAR_ELIMINAR_DAM(string DAM)
        {

            int cantidad = 0;
            try
            {

                iDB2Connection con = new iDB2Connection(conexion);
                con.Open();

                using (iDB2Command cmd = new iDB2Command("SP_VALIDAR_ELIMINAR_DAM", con))
                {
                    cmd.Parameters.AddWithValue("@NRO_DAM", DAM.Trim());
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
        private void EjecutarProcedimiento(iDB2Connection con, double COMPAÑIA_GUIA, double AÑO_GUIA, string SERIE_GUIA, string NRO_GUIA, string NRO_DAM, List<BE_DAM> lista)
        {
            using (iDB2Command cmd = new iDB2Command("SP_VALIDAR_GUIA_DAM", con))
            {
                cmd.Parameters.AddWithValue("@COD_CIA", COMPAÑIA_GUIA);
                cmd.Parameters.AddWithValue("@ANO_GUIA", AÑO_GUIA);
                cmd.Parameters.AddWithValue("@SERIE_GUIA", SERIE_GUIA.Trim());
                cmd.Parameters.AddWithValue("@NRO_GUIA", NRO_GUIA.Trim());
                cmd.Parameters.AddWithValue("@NRO_DAM", NRO_DAM.Trim());
                cmd.CommandType = CommandType.StoredProcedure;

                iDB2DataReader lector = cmd.ExecuteReader(CommandBehavior.Default);
                while (lector.Read())
                {
                    BE_DAM obj_BE = new BE_DAM();

                    obj_BE.CODCIA = Convert.ToDouble(lector[0].ToString().Trim());
                    obj_BE.ANIO_PEDIDO = Convert.ToDouble(lector[1].ToString().Trim());
                    obj_BE.SERIE_PEDIDO = lector[2].ToString().Trim();
                    obj_BE.NUMERO_PEDIDO = Convert.ToDouble(lector[3].ToString().Trim());
                    obj_BE.CODIGO_ARTICULO = Convert.ToDouble(lector[5].ToString().Trim());
                    obj_BE.PARTIDA_VALIDAR = lector[7].ToString().Trim();
                    obj_BE.DAM_PARTIDA_VALIDAR = lector[8].ToString().Trim();

                    lista.Add(obj_BE);
                }

                lector.Close();
            }
        }
        public int GRABAR_DAM_GUIA(string NRO_CIA_GUIA, string ANO_GUIA, string SERIE_GUIA, string NRO_GUIA, string NRO_DAM)
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
                        cmd.CommandText = "SP_GRABAR_DAM_GUIA";
                        cmd.Transaction = transaccion;
                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("@NRO_CIA_GUIA", Convert.ToInt32(NRO_CIA_GUIA));
                        cmd.Parameters.AddWithValue("@ANO_GUIA", Convert.ToInt32(ANO_GUIA));
                        cmd.Parameters.AddWithValue("@SERIE_GUIA", SERIE_GUIA);
                        cmd.Parameters.AddWithValue("@NRO_GUIA", NRO_GUIA);
                        cmd.Parameters.AddWithValue("@NRO_DAM", NRO_DAM);


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
        public int LIBERAR_DAM_GUIA(string NRO_CIA_GUIA, string ANO_GUIA, string SERIE_GUIA, string NRO_GUIA)
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
                        cmd.CommandText = "SP_LIBERAR_DAM_GUIA";
                        cmd.Transaction = transaccion;
                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("@NRO_CIA_GUIA", Convert.ToInt32(NRO_CIA_GUIA));
                        cmd.Parameters.AddWithValue("@ANO_GUIA", Convert.ToInt32(ANO_GUIA));
                        cmd.Parameters.AddWithValue("@SERIE_GUIA", SERIE_GUIA);
                        cmd.Parameters.AddWithValue("@NRO_GUIA", Convert.ToInt32(NRO_GUIA));
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

        
            public List<BE_DAM> BUSCAR_PARTIDAS_DAM(string DAM)
        {

            List<BE_DAM> lista = new List<BE_DAM>();
            try
            {

                iDB2Connection con = new iDB2Connection(conexion);
                con.Open();

                using (iDB2Command cmd = new iDB2Command("SP_BUSCAR_PARTIDAS_DAM", con))
                {
                    cmd.Parameters.AddWithValue("@DAM", DAM);
                    cmd.CommandType = CommandType.StoredProcedure;

                    iDB2DataReader lector = cmd.ExecuteReader(CommandBehavior.CloseConnection);
                    while (lector.Read())
                    {
                        BE_DAM obj_BE = new BE_DAM();

                        obj_BE.NRO = Convert.ToInt32(lector[0].ToString().Trim());
                        obj_BE.CANTIDAD = Convert.ToDouble(lector[1].ToString().Trim());
                        obj_BE.CODIGO_ARTICULO = Convert.ToDouble(lector[2].ToString().Trim());
                        obj_BE.DESCRIPCION_ARTICULO = lector[3].ToString().Trim();
                        obj_BE.DESCRIPCION_COLOR = lector[4].ToString().Trim();
                        obj_BE.NUMERO_PARTIDA = Convert.ToDouble(lector[5].ToString().Trim());
                        obj_BE.TIPO_ARTICULO = Convert.ToDouble(lector[6].ToString().Trim());
                        obj_BE.CODIGO_COLOR = Convert.ToInt32(lector[7].ToString().Trim());


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


    }
}

