const notesCtrl = {};
const Notemodel = require('../models/note');




notesCtrl.getNotes = async (req, res) => {
    const notes = await Notemodel.find();
    res.json(notes);
}


notesCtrl.createNote = async (req, res) => {
    const { title, content, date, author } = req.body;
    const NewNote = new Notemodel({
        title: title,
        content: content,
        date, date,
        author, author
    })
    await NewNote.save();
    res.json({ message: 'Note Saved' })
};


notesCtrl.getNote = async (req, res) => {
    const note = await Notemodel.findById(req.params.id);
    res.json(note);
}
notesCtrl.updateNote = async (req, res) => {
    const { title, content, author } = req.body;
    await Notemodel.findByIdAndUpdate(req.params.id, {
        title,
        content,
        author
    })
    res.json({ message: 'Note update' });
};

notesCtrl.deleteNote = async (req, res) => {
    await Notemodel.findByIdAndRemove(req.params.id);
    res.json({ message: 'note deleted' });
};


module.exports = notesCtrl;