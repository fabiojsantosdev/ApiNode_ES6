import Connection from '../database/DBConnection.js';

async function GetUserId(req) {
  const matricula = req.params.id; // Obtenha o valor do parâmetro ID corretamente

  try {
    const db = await Connection();
    const user = await db.execute(
      'SELECT nome, nome_guerra, matricula FROM pcempr WHERE matricula = :matricula',
      { matricula }, // Passe o valor do parâmetro como um objeto
    );

    if (user.rows.length > 0) {
      return {
        statusText: 'success',
        statusMessage: 'Sucesso ao buscar dados do Usuário!',
        user: user.rows,
      };
    } else {
      return {
        statusText: 'error',
        statusMessage: 'Erro ao Buscar dados do Usuário!',
        user: matricula,
      };
    }
  } catch (error) {
    console.log(error);
    return 'Erro interno do servidor!';
  }
}

export { GetUserId };
