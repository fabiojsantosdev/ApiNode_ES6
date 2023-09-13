import { GetUserId } from '../repositories/UserModel.js';

class UserController {
  async show(req, res) {
    try {
      const user = await GetUserId(req);

      // Verifique se o usuário foi encontrado
      if (user.statusText == 'error') {
        return res.status(404).json(user);
      }

      // Caso contrário, retorne o usuário
      res.status(200).json(user);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  }

  async index(req, res) {
    try {
      res.status(200).json({
        statusText: 'Ok!',
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  }
}

export default new UserController();
