const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend
} = require('../../controllers/userController');

// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId

router.get('/', getUsers)
router.get('/:userId', getSingleUser)
router.post('/', createUser)
router.put('/:userId', updateUser)
router.delete('/:userId', deleteUser)
router.post('/:userId/friends/:friendId', addFriend)
router.delete('/:userId/friends/:friendId', removeFriend)

module.exports = router;
