const { Router } = require('express');
const router = Router();

const Ctrl = require('../controllers/notes.controllers');

router.route('/')
    .get(Ctrl.getNotes)
    .post(Ctrl.createNote);

router.route('/:id')
    .get(Ctrl.getNote)
    .put(Ctrl.updateNote)
    .delete(Ctrl.deleteNote);


module.exports = router;


/*get()
post()
put()
delete()
path()*/