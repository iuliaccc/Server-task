const db = require('../database');

// all
exports.get = async (_, res) => {
  try {
    const note = await db.all('SELECT * from score');
    return res.status(200).json(note);
  } catch (e) {
    return res.status(500).send('Something went wrong');
  }
};

exports.get = async (_, res) => {
  try {
    const score = await db.all(
      'SELECT * from score group by userID order by count(userID) desc limit 5',
    );
    return res.status(200).json(score);
  } catch (e) {
    return res.status(500).send('Something went wrong');
  }
};

exports.getScoreByGameID = async (req, res) => {
  try {
    const { gameID, page } = req.body;
    const rowsToRead = 2;
    const offset = (page - 1) * rowsToRead;
    const score = await db.all(
      `select * from score where gameID = $gameID limit $offset, $rowsToRead`,
      {
        $gameID: gameID,
        $offset: offset,
        $rowsToRead: rowsToRead,
      },
    );
    return res.status(200).json(score);
  } catch (e) {
    return res.status(500).send('Something went wrong');
  }
};

exports.post = async (req, res) => {
  try {
    const { userID, gameID, val } = req.body;

    if (!userID) return res.status(400).send('Bad request');

    const id = await db.run(
      `INSERT INTO score (userID,gameID,val) VALUES ($userID, $gameID, $val)`,
      {
        $userID: userID,
        $gameID: gameID,
        $val: val,
      },
    );

    return res.status(200).json({ id, userID, gameID, val });
  } catch (e) {
    return res.status(500).send('Something went wrong');
  }
};
