import 'dotenv/config';
import oracledb from 'oracledb';

oracledb.outFormat = oracledb.OBJECT;
oracledb.fetchAsString = [oracledb.CLOB];

// Define caminho client do oracle
if (process.platform === 'win32') {
  try {
    oracledb.initOracleClient({ libDir: 'C:\\oracle\\instantclient_21.6' });
  } catch (error) {
    console.error('Ops!');
    console.error(error);
    throw error('Erro ao abrir conexao.');
  }
} else {
  try {
    oracledb.initOracleClient();
  } catch (error) {
    console.error('Ops!');
    console.error(error);
    throw error('Erro ao abrir conexao.');
  }
}

const host = process.env.CONNECTION_HOST;
const pw = process.env.DB_PASSWORD;
const user = process.env.DB_USER;

const Connection = async () => {
  let con = undefined;

  try {
    if (con === undefined) {
      con = await oracledb.getConnection({
        user: user,
        password: pw,
        connectionString: host,
      });
    }

    return con;
  } catch (error) {
    console.log(error); // Use `error` em vez de `err`
  }
};

export default Connection;
