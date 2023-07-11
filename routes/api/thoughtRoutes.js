const router = require('express').Router();
const {
  getThoughts, getSingleThought, createThought,
  deleteThought, addReaction, updateThought,
} = require('../../controllers/thoughtController');


router.get('/', getThoughts);
router.get('/:thoughtId', getSingleThought);
router.post('/', createThought);
router.put('/:thoughtId', updateThought);
router.delete('/:thoughtId', deleteThought);
router.post('/:thoughtId/reactions', addReaction);

module.exports = router;