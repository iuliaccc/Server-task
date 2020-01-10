const db = require('../database');

// all
exports.get = async (_, res) => {
  try {
    const users = await db.all('SELECT * from users');
    return res.status(200).json(users);
  } catch (e) {
    return res.status(500).send('Something went wrong');
  }
};

// Get user By id ( games, score ) - aici fac cu inner join cu userul ce joc s a jucat si cu ce scor
exports.getById = async (req, res) => {
  try {
    const { id } = req.params;
    const users = await db.all(
      'SELECT * FROM ((users Inner JOIN score on users.id = score.userID)\n' +
        '                         INNER JOIN games ON score.gameID = games.id) \n' +
        '                         where users.id = $id',
      { $id: id },
    );
    console.log(users);

    if (!users) return res.status(400).send('Bad request');

    return res.status(200).json(users);
  } catch (e) {
    return res.status(500).send('Something went wrong');
  }
};

//
// Add user ( register/ sign up )
exports.post = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name) return res.status(400).send('Bad request');

    const id = await db.run(
      `INSERT INTO users (name,email,password) VALUES ($name, $email, $password)`,
      {
        $name: name,
        $email: email,
        $password: password,
      },
    );

    return res.status(200).json({ id, name, email, password });
  } catch (e) {
    return res.status(500).send('Something went wrong');
  }
};
