const aboutController = require('../controllers/about');
const noteController = require('../controllers/note');
const usersController = require('../controllers/users');
const gamesController = require('../controllers/games');
const scoreController = require('../controllers/score');

module.exports = (app) => {
  /**
   * @api {get} /about Retrieve service info
   * @apiVersion 1.0.0
   * @apiName About
   * @apiGroup About
   * @apiDescription Retrieves the service's information.
   *
   * @apiExample {curl} Example usage:
   * curl --location --request GET 'http://localhost:8080/about'
   *
   * @apiSuccess {String} description Service description.
   *
   */
  app.get('/about', aboutController.get);

  /**
   * @api {get} /note Retrieve notes
   * @apiVersion 1.0.0
   * @apiName GetNotes
   * @apiGroup Note
   * @apiDescription Retrieves list of notes.
   *
   * @apiExample {curl} Example usage:
   * curl --location --request GET 'http://localhost:8080/note'
   *
   * @apiSuccess {Object[]} notes List of notes.
   * @apiSuccess {String}   notes.id Note id.
   * @apiSuccess {String}   notes.title Note title.
   * @apiSuccess {String}   notes.content Note content.
   *
   * @apiSuccessExample {json} Success-Response:
   *
   [
   {
      "id": 1,
      "title": "note title 1",
      "content": "note content 1"
     },
   {
      "id": 2,
      "title": "note title 2",
      "content": "note content 2"
     },
   ]
   */

  app.get('/users', usersController.get);
  app.get('/games', gamesController.get);
  app.get('/score', scoreController.get);
  app.get('/score/top', scoreController.get);

  app.get('/note', noteController.get);
  /**
   * @api {get} /note/id Retrieve note
   * @apiVersion 1.0.0
   * @apiName Get Note
   * @apiGroup Note
   * @apiDescription Retrieves note by id.
   *
   * @apiParam {String} id Note id
   *
   * @apiExample {curl} Example usage:
   * curl --location --request GET 'http://localhost:8080/note/1'
   *
   * @apiSuccess {String}  id Note id.
   * @apiSuccess {String}  title Note title.
   * @apiSuccess {String}  content Note content.
   * @apiSuccessExample {json} Success-Response:
   *
   {
      "id": 1,
      "title": "note title 1",
      "content": "note content 1"
    }
   */
  app.get('/note/:id', noteController.getById);
  app.get('/users/:id', usersController.getById);
  app.get('/games/:id', gamesController.getById);
  app.get('/score/', scoreController.getScoreByGameID);

  /**
   * @api {post} /note Creates note
   * @apiVersion 1.0.0
   * @apiName Create Note
   * @apiGroup Note
   * @apiDescription Creates a note.
   *
   * @apiExample {curl} Example usage:
   * curl --location --request POST 'http://localhost:8080/note' \
   --header 'Content-Type: application/json' \
   --data-raw '{
	   "title": "test",
	   "content": "test content"
    }'
   *
   * @apiSuccess {String}  id Note id.
   * @apiSuccess {String}  title Note title.
   * @apiSuccess {String}  content Note content.
   * @apiSuccessExample {json} Success-Response:
   *
   {
     "id": 8,
     "title": "test",
     "content": "test content"
    }
   */

  app.post('/users', usersController.post);
  app.post('/games', gamesController.post);
  app.post('/score', scoreController.post);

  app.post('/note', noteController.post);
  /**
   * @api {put} /note/id Updates note
   * @apiVersion 1.0.0
   * @apiName Update Note
   * @apiGroup Note
   * @apiDescription Updates a note.
   *
   * @apiParam {String} id Note id
   *
   * @apiExample {curl} Example usage:
   * curl --location --request PUT 'http://localhost:8080/note/8' \
   --header 'Content-Type: application/json' \
   --data-raw '{
        "id": 8,
        "title": "test title update",
        "content": "test content updated"
    }'
   *
   * @apiSuccess {String}  id Note id.
   * @apiSuccess {String}  title Note title.
   * @apiSuccess {String}  content Note content.
   * @apiSuccessExample {json} Success-Response:
   *
   {
     "id": 8,
     "title": "test title update",
     "content": "test content updated "
    }
   */
  app.put('/note/:id', noteController.put);
  /**
   * @api {delete} /note/id Delete note
   * @apiVersion 1.0.0
   * @apiName Delete Note
   * @apiGroup Note
   * @apiDescription Deletes a note.
   *
   * @apiParam {String} id Note id
   *
   * @apiExample {curl} Example usage:
   * curl --location --request DELETE 'http://localhost:8080/note/8' \
     --header 'Content-Type: application/json'
   *
   * @apiSuccessExample {text} Success-Response:
   * OK
   */
  app.delete('/note/:id', noteController.delete);
};
