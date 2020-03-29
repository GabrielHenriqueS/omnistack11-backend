import connection from '../../database/connection';
import Queue from '../../lib/Queue';
import RegisterMail from '../jobs/registerMail';
import generateUniqueId from '../../utils/generateUniqueId';

class OngController {
  async index(req, res) {
    const ongs = await connection('ongs').select('*');

    return res.json(ongs);
  }

  async store(req, res) {
    const { name, email, whatsapp, city, uf } = req.body;

    const id = generateUniqueId();

    try {
      await connection('ongs').insert({
        id,
        name,
        email,
        whatsapp,
        city,
        uf,
      });

      await Queue.add(RegisterMail.key, {
        id,
        name,
        email,
      });

      return res.json({ id });
    } catch (err) {
      return res.status(400).json({ error: 'Error on insert ong' });
    }
  }
}

export default new OngController();
