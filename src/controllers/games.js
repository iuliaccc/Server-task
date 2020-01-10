const db = require('../database');

// all
exports.get = async (_, res) => {
  try {
    const games = await db.all('SELECT * from games');
    return res.status(200).json(games);
  } catch (e) {
    return res.status(500).send('Something went wrong');
  }
};

exports.getById = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);

    const games = await db.all(
      'SELECT games.name, score.val from score INNER JOIN games on games.id = score.gameid ' +
        'where games.id = $id ORDER by val desc LIMIT 10 \n',
      { $id: id },
    );

    if (!games) return res.status(400).send('Bad request');

    return res.status(200).json(games);
  } catch (e) {
    return res.status(500).send('Something went wrong');
  }
};

// add game
exports.post = async (req, res) => {
  try {
    const { name } = req.body;

    if (!name) return res.status(400).send('Bad request');

    const id = await db.run(`INSERT INTO games (name) VALUES ($name)`, {
      $name: name,
    });

    return res.status(200).json({ id, name });
  } catch (e) {
    return res.status(500).send('Something went wrong');
  }
};
